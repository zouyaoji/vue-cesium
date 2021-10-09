import {
  CSSProperties,
  defineComponent,
  getCurrentInstance,
  nextTick,
  ref,
  reactive,
  ExtractPropTypes,
  h,
  createCommentVNode,
  watch,
  VNode
} from 'vue'
import { $, getInstanceListener, getVcParentInstance } from '@vue-cesium/utils/private/vm'
import usePosition from '@vue-cesium/composables/private/use-position'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import MouseCoords, { extendForMouseCoords } from './MouseCoords'
import throttle from '@vue-cesium/utils/private/throttle'
import { useCommon } from '@vue-cesium/composables'
import { VcBtn, VcTooltip } from '@vue-cesium/components/ui'
import defaultProps from './defaultProps'
import { t } from '@vue-cesium/locale'
import { isPlainObject } from '@vue-cesium/utils/util'

export default defineComponent({
  name: 'VcStatusBar',
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'statusBarEvt'],
  setup(props: ExtractPropTypes<typeof defaultProps>, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcStatusBar'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const parentInstance = getVcParentInstance(instance)
    const { $services } = commonState
    const rootRef = ref<typeof VcBtn | null>(null)
    const tooltipRef = ref<typeof VcTooltip | null>(null)

    let lastMouseX = -1
    let lastMouseY = -1
    const cameraInfo = reactive({
      heading: 'NaN',
      pitch: 'NaN',
      roll: 'NaN',
      height: 'NaN',
      level: 'NaN'
    })
    const performanceInfo = reactive({
      fps: 'NaN',
      ms: 'NaN'
    })
    const mouseCoordsInfo = ref<MouseCoords>()
    const positionState = usePosition(props, $services)
    const hasVcNavigation = parentInstance.proxy?.$options.name === 'VcNavigation'
    const canRender = ref(hasVcNavigation)
    const rootStyle = reactive<CSSProperties>({})
    // watch
    watch(
      () => props,
      val => {
        nextTick(() => {
          if (!instance.mounted) {
            return
          }
          updateRootStyle()
        })
      },
      {
        deep: true
      }
    )
    // methods
    instance.createCesiumObject = async () => {
      canRender.value = true
      const { viewer } = $services

      const viewerElement = (viewer as any)._element as HTMLElement

      if (props.showMouseInfo) {
        mouseCoordsInfo.value = new MouseCoords({
          gridFileUrl: props.gridFileUrl,
          proj4Projection: props.proj4Projection,
          projectionUnits: props.projectionUnits,
          proj4longlat: props.proj4longlat
        })

        viewerElement.addEventListener('wheel', onMouseMove, false)
        viewerElement.addEventListener('mousemove', onMouseMove, false)
        viewerElement.addEventListener('touchmove', onMouseMove, false)
        extendForMouseCoords()
      }

      if (props.showCameraInfo) {
        viewer.camera.changed.addEventListener(onCameraChanged)
        onCameraChanged()
      }

      if (props.showPerformanceInfo) {
        viewer.scene.debugShowFramesPerSecond = true
        viewer.scene.postRender.addEventListener(onScenePostRender)
      }

      return new Promise((resolve, reject) => {
        nextTick(() => {
          if (!hasVcNavigation) {
            const viewerElement = (viewer as any)._element
            viewerElement.appendChild($(rootRef)?.$el)
            resolve($(rootRef)?.$el)
          } else {
            resolve($(rootRef)?.$el)
          }
        })
      })
    }

    instance.mount = async () => {
      updateRootStyle()
      const { viewer } = $services
      viewer.viewerWidgetResized?.raiseEvent({
        type: instance.cesiumClass,
        status: 'mounted',
        target: $(rootRef)?.$el
      })
      return true
    }

    instance.unmount = async () => {
      const { viewer } = $services
      const viewerElement = (viewer as any)._element as HTMLElement
      if (props.showMouseInfo) {
        mouseCoordsInfo.value = undefined
        viewerElement.removeEventListener('wheel', onMouseMove)
        viewerElement.removeEventListener('mousemove', onMouseMove)
        viewerElement.removeEventListener('touchmove', onMouseMove)
      }

      if (props.showCameraInfo) {
        viewer.camera.changed.removeEventListener(onCameraChanged)
      }

      if (props.showPerformanceInfo) {
        if (viewer.scene._performanceDisplay) {
          viewer.scene._performanceDisplay._container.style.display = 'block'
        }

        viewer.scene.postRender.removeEventListener(onScenePostRender)
      }

      if (!hasVcNavigation) {
        viewerElement.contains($(rootRef)?.$el) && viewerElement.removeChild($(rootRef)?.$el)
      }
      viewer.viewerWidgetResized?.raiseEvent({
        type: instance.cesiumClass,
        status: 'unmounted',
        target: $(rootRef)?.$el
      })

      return true
    }

    const updateRootStyle = () => {
      const css: CSSProperties = positionState.style.value
      rootStyle.left = css.left
      rootStyle.top = css.top
      rootStyle.transform = css.transform

      css.background = props.background
      css.color = props.color
      const side = positionState.attach.value

      if ((side.bottom || side.top) && !side.left && !side.right) {
        css.left = '50%'
        css.transform = 'translate(-50%, 0)'
      }

      if ((side.left || side.right) && !side.top && !side.bottom) {
        css.top = '50%'
        css.transform = 'translate(0, -50%)'
      }

      Object.assign(rootStyle, css)
    }

    const onScenePostRender = throttle(scene => {
      performanceInfo.fps = scene._performanceDisplay?._fpsText.nodeValue
      performanceInfo.ms = scene._performanceDisplay?._msText.nodeValue
      scene._performanceDisplay._container.style.display = 'none'
    }, 500)

    // 粗略计算
    const heightToLevel = altitude => {
      const A = 40487.57
      const B = 0.00007096758
      const C = 91610.74
      const D = -40467.74

      return Math.round(D + (A - D) / (1 + Math.pow(altitude / C, B)))
    }

    const onCameraChanged = () => {
      const { viewer } = $services
      const { Math: CesiumMath } = Cesium
      cameraInfo.heading = CesiumMath.toDegrees(viewer.camera.heading).toFixed(1)
      cameraInfo.pitch = CesiumMath.toDegrees(viewer.camera.pitch).toFixed(1)
      cameraInfo.roll = CesiumMath.toDegrees(viewer.camera.roll).toFixed(1)
      cameraInfo.height = viewer.camera.positionCartographic.height.toFixed(2)
      cameraInfo.level = heightToLevel(cameraInfo.height).toFixed(0)
    }

    const onMouseMove = e => {
      const { Cartesian2 } = Cesium
      const { viewer } = $services

      const clientX = e.type === 'mousemove' || e.type === 'wheel' ? e.clientX : e.changedTouches[0].clientX
      const clientY = e.type === 'mousemove' || e.type === 'wheel' ? e.clientY : e.changedTouches[0].clientY

      if (clientX === lastMouseX && clientY === lastMouseY) {
        return
      }

      lastMouseX = clientX
      lastMouseY = clientY

      const viewerElement = (viewer as any)._element as HTMLElement

      if (viewer) {
        if (props.showMouseInfo) {
          const rect = viewerElement.getBoundingClientRect()
          const position = new Cartesian2(clientX - rect.left, clientY - rect.top)
          mouseCoordsInfo.value?.updateCoordinatesFromCesium(viewer, position)
        }
        const listener = getInstanceListener(instance, 'statusBarEvt')
        listener &&
          ctx.emit('statusBarEvt', {
            type: 'statusBar',
            mouseCoordsInfo: mouseCoordsInfo.value,
            cameraInfo: cameraInfo,
            performanceInfo: performanceInfo,
            statue: 'complete'
          })
      }
    }

    const toggleUseProjection = () => {
      $(tooltipRef)?.hide()
      if (props.showMouseInfo) {
        mouseCoordsInfo.value?.toggleUseProjection()
      }
    }

    return () => {
      if (canRender.value) {
        const inner: Array<VNode> = []
        if (props.showMouseInfo) {
          if (!mouseCoordsInfo.value?.useProjection) {
            inner.push(
              h(
                'div',
                {
                  class: 'vc-section ellipsis'
                },
                [
                  h(
                    'span',
                    {
                      ...ctx.attrs
                    },
                    t('vc.navigation.statusBar.lng')
                  ),
                  h('span', {}, mouseCoordsInfo.value?.longitude)
                ]
              ),
              h(
                'div',
                {
                  class: 'vc-section ellipsis'
                },
                [h('span', {}, t('vc.navigation.statusBar.lat')), h('span', {}, mouseCoordsInfo.value?.latitude)]
              )
            )
          } else {
            inner.push(
              h(
                'div',
                {
                  class: 'vc-section-short ellipsis'
                },
                [
                  h(
                    'span',
                    {
                      ...ctx.attrs
                    },
                    t('vc.navigation.statusBar.zone')
                  ),
                  h('span', null, mouseCoordsInfo.value?.utmZone)
                ]
              ),
              h(
                'div',
                {
                  class: 'vc-section ellipsis'
                },
                [
                  h(
                    'span',
                    {
                      ...ctx.attrs
                    },
                    t('vc.navigation.statusBar.e')
                  ),
                  h('span', null, mouseCoordsInfo.value?.east)
                ]
              ),
              h(
                'div',
                {
                  class: 'vc-section ellipsis'
                },
                [
                  h(
                    'span',
                    {
                      ...ctx.attrs
                    },
                    t('vc.navigation.statusBar.n')
                  ),
                  h('span', null, mouseCoordsInfo.value?.north)
                ]
              )
            )
          }

          if (mouseCoordsInfo.value?.elevation) {
            inner.push(
              h(
                'div',
                {
                  class: 'vc-section ellipsis'
                },
                [
                  h(
                    'span',
                    {
                      ...ctx.attrs
                    },
                    t('vc.navigation.statusBar.elev')
                  ),
                  h('span', {}, mouseCoordsInfo.value?.elevation)
                ]
              )
            )
          } else {
            inner.push(createCommentVNode('v-if'))
          }
        } else {
          inner.push(createCommentVNode('v-if'))
        }

        if (props.showCameraInfo) {
          inner.push(
            h(
              'div',
              {
                class: 'vc-section-short-mini ellipsis'
              },
              [
                h(
                  'span',
                  {
                    ...ctx.attrs
                  },
                  t('vc.navigation.statusBar.level')
                ),
                h('span', null, cameraInfo.level)
              ]
            ),
            h(
              'div',
              {
                class: 'vc-section-short ellipsis'
              },
              [
                h(
                  'span',
                  {
                    ...ctx.attrs
                  },
                  t('vc.navigation.statusBar.heading')
                ),
                h('span', null, `${cameraInfo.heading}°`)
              ]
            ),
            h(
              'div',
              {
                class: 'vc-section-short ellipsis'
              },
              [
                h(
                  'span',
                  {
                    ...ctx.attrs
                  },
                  t('vc.navigation.statusBar.pitch')
                ),
                h('span', null, `${cameraInfo.pitch}°`)
              ]
            ),
            h(
              'div',
              {
                class: 'vc-section-short ellipsis'
              },
              [
                h(
                  'span',
                  {
                    ...ctx.attrs
                  },
                  t('vc.navigation.statusBar.roll')
                ),
                h('span', null, `${cameraInfo.roll}°`)
              ]
            ),
            h(
              'div',
              {
                class: 'vc-section ellipsis'
              },
              [
                h(
                  'span',
                  {
                    ...ctx.attrs
                  },
                  t('vc.navigation.statusBar.cameraHeight')
                ),
                h('span', null, `${cameraInfo.height}m`)
              ]
            )
          )
        } else {
          inner.push(createCommentVNode('v-if'))
        }

        if (props.showPerformanceInfo) {
          inner.push(
            h(
              'div',
              {
                class: 'vc-section-short-mini ellipsis'
              },
              [h('span', null, performanceInfo.ms)]
            ),
            h(
              'div',
              {
                class: 'vc-section-short-mini ellipsis'
              },
              [h('span', null, performanceInfo.fps)]
            )
          )
        } else {
          inner.push(createCommentVNode('v-if'))
        }

        if (isPlainObject(props.tooltip) && props.showMouseInfo) {
          inner.push(
            h(
              VcTooltip,
              {
                ref: tooltipRef,
                ...props.tooltip
              },
              () => h('strong', null, (isPlainObject(props.tooltip) && props.tooltip.tip) || t('vc.navigation.statusBar.tip'))
            )
          )
        } else {
          inner.push(createCommentVNode('v-if'))
        }

        return h(
          VcBtn,
          {
            ref: rootRef,
            class: 'vc-status-bar ' + positionState.classes.value,
            style: rootStyle,
            noCaps: true,
            onClick: toggleUseProjection
          },
          () => inner
        )
      } else {
        return createCommentVNode('v-if')
      }
    }
  }
})
