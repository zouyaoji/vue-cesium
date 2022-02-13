import type { ExtractPropTypes, VNode, CSSProperties } from 'vue'
import { defineComponent, getCurrentInstance, nextTick, ref, reactive, h, createCommentVNode, watch } from 'vue'
import { $, getInstanceListener, getVcParentInstance } from '@vue-cesium/utils/private/vm'
import usePosition from '@vue-cesium/composables/private/use-position'
import type { VcStatusBarEvt, VcComponentInternalInstance, VcReadyObject } from '@vue-cesium/utils/types'
import MouseCoords, { extendForMouseCoords } from './MouseCoords'
import throttle from '@vue-cesium/utils/private/throttle'
import { useCommon, useLocale } from '@vue-cesium/composables'
import { VcBtn, VcTooltip, VcTooltipProps } from '@vue-cesium/components/ui'
import defaultProps from './defaultProps'
import { isPlainObject } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'
import { heightToLevel } from '@vue-cesium/utils/cesium-helpers'

const emits = {
  ...commonEmits,
  statusBarEvt: (evt: VcStatusBarEvt) => true
}
export const statusBarProps = defaultProps
export default defineComponent({
  name: 'VcStatusBar',
  props: statusBarProps,
  emits: emits,
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
    const { t } = useLocale()

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

    const onCameraChanged = () => {
      const { viewer } = $services
      const { Math: CesiumMath } = Cesium
      cameraInfo.heading = CesiumMath.toDegrees(viewer.camera.heading).toFixed(1)
      cameraInfo.pitch = CesiumMath.toDegrees(viewer.camera.pitch).toFixed(1)
      cameraInfo.roll = CesiumMath.toDegrees(viewer.camera.roll).toFixed(1)
      cameraInfo.height = viewer.camera.positionCartographic.height.toFixed(2)
      cameraInfo.level = heightToLevel(Number(cameraInfo.height)).toFixed(0)
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
            performanceInfo: performanceInfo
          })
      }
    }

    const toggleUseProjection = () => {
      $(tooltipRef)?.hide()
      if (props.showMouseInfo) {
        mouseCoordsInfo.value?.toggleUseProjection()
      }
    }

    // expose public methods
    Object.assign(instance.proxy, { mouseCoordsInfo, cameraInfo, performanceInfo })

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

// export type VcStatusBarProps = ExtractPropTypes<typeof statusBarProps>
export type VcStatusBarEmits = typeof emits

export type VcStatusBarProps = {
  /**
   * Specify the position of the VcStatusBar.
   * Default value: bottom-right
   */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left'
  /**
   * An array of two numbers to offset the VcStatusBar horizontally and vertically in pixels.
   * Default value: [0, 0]
   */
  offset?: [number, number]
  /**
   * Specify the mouse to pick up the height model, use this to improve the accuracy of the height obtained.
   * Default value: https://zouyaoji.top/vue-cesium/statics/SampleData/WW15MGH.DAC
   */
  gridFileUrl?: string
  /**
   * Specify the proj4 projection.
   * Default value: +proj=utm +ellps=GRS80 +units=m +no_defs
   */
  proj4Projection?: string
  /**
   * Specify the projection units.
   * Default value: m
   */
  projectionUnits?: string
  /**
   * Specify the proj4 longlat.
   * Default value: +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees +no_defs
   */
  proj4longlat?: string
  /**
   * Specify the css color of the information bar.
   * Default value: #fff
   */
  color?: string
  /**
   * Specify the background of the information bar.
   * Default value: #3f4854
   */
  background?: string
  /**
   * Specify whether to display camera information in the information bar.
   * Default value: true
   */
  showCameraInfo?: boolean
  /**
   * Specify whether to display mouse coords information in the information bar.
   * Default value: true
   */
  showMouseInfo?: boolean
  /**
   * Specify whether to display frame rate information in the information bar.
   * Default value: true
   */
  showPerformanceInfo?: boolean
  /**
   * The tooltip parameter.
   */
  tooltip?: VcTooltipProps
  /**
   * Triggers before the VcStatusBar is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcStatusBar is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcStatusBar is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the information changed.
   */
  onStatusBarEvt?: (evt: VcStatusBarEvt) => void
}
