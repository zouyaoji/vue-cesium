import {
  defineComponent,
  getCurrentInstance,
  watch,
  nextTick,
  ref,
  CSSProperties,
  reactive,
  h,
  createCommentVNode,
  ExtractPropTypes,
  computed,
  VNode
} from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import usePosition from '@vue-cesium/composables/private/use-position'
import { $, getInstanceListener } from '@vue-cesium/utils/private/vm'
import { hMergeSlot } from '@vue-cesium/utils/private/render'
import { defaultProps, defaultOptions } from './defaultProps'
import { useCommon } from '@vue-cesium/composables'
import VcDistanceLegend from '../distance-legend'
import VcStatusBar from '../status-bar'
import VcZoomControl from '../zoom-control'
import VcMyLocation from '../my-location'
import VcCompass from '../compass'
import VcPrint from '../print'

export default defineComponent({
  name: 'VcNavigation',
  inheritAttrs: false,
  props: defaultProps,
  emits: ['beforeLoad', 'ready', 'destroyed', 'zoomEvt', 'compassEvt', 'locationEvt', 'printEvt', 'statusBarEvt', 'distanceLegendEvt'],
  setup(props: ExtractPropTypes<typeof defaultProps>, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcNavigation'
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }

    const canRender = ref(false)
    const { $services } = commonState
    const positionState = usePosition(props, $services)
    const positionStateOther = usePosition(props.otherOpts || { position: 'bottom-right' }, $services)
    const rootRef = ref<HTMLElement | null>(null)
    const secondRootRef = ref<HTMLElement | null>(null)
    const compassRef = ref<typeof VcCompass | null>(null)
    const zoomControlRef = ref<typeof VcZoomControl | null>(null)
    const printRef = ref<typeof VcPrint | null>(null)
    const myLocationRef = ref<typeof VcMyLocation | null>(null)
    const statusBarRef = ref<typeof VcStatusBar | null>(null)
    const distanceLegendRef = ref<typeof VcDistanceLegend | null>(null)
    const rootStyle = reactive<CSSProperties>({})
    const secondRootStyle = reactive<CSSProperties>({})
    const { emit } = ctx
    // watch
    watch(
      () => props,
      () => {
        nextTick(() => {
          updateRootStyle()
          $(compassRef)?.reload()
          $(zoomControlRef)?.reload()
          $(myLocationRef)?.reload()
          $(printRef)?.reload()
          $(statusBarRef)?.reload()
          $(distanceLegendRef)?.reload()
        })
      },
      {
        deep: true
      }
    )

    const compassOptions = computed(() => Object.assign({}, defaultOptions.compassOpts, props.compassOpts))
    const zoomControlOptions = computed(() => Object.assign({}, defaultOptions.zoomOpts, props.zoomOpts))
    const printViewOptions = computed(() => Object.assign({}, defaultOptions.printOpts, props.printOpts))
    const myLocationOptions = computed(() => Object.assign({}, defaultOptions.locationOpts, props.locationOpts))
    const otherControlOptions = computed(() => Object.assign({}, defaultOptions.otherOpts, props.otherOpts))

    // methods
    const onCompassEvt = e => {
      const listener = getInstanceListener(instance, 'compassEvt')
      listener && emit('compassEvt', e)
    }
    const onZoomEvt = e => {
      const listener = getInstanceListener(instance, 'zoomEvt')
      listener && emit('zoomEvt', e)
    }
    const onPrintEvt = e => {
      const listener = getInstanceListener(instance, 'printEvt')
      listener && emit('printEvt', e)
    }
    const onLocationEvt = e => {
      const listener = getInstanceListener(instance, 'locationEvt')
      listener && emit('locationEvt', e)
    }
    const onStatusBarEvt = e => {
      const listener = getInstanceListener(instance, 'statusBarEvt')
      listener && emit('statusBarEvt', e)
    }
    const onDistanceLegendEvt = e => {
      const listener = getInstanceListener(instance, 'distanceLegendEvt')
      listener && emit('distanceLegendEvt', e)
    }

    instance.createCesiumObject = async () => {
      canRender.value = true
      const { viewer } = $services
      viewer.viewerWidgetResized?.addEventListener(onViewerWidgetResized)
      return new Promise((resolve, reject) => {
        nextTick(() => {
          const viewerElement = (viewer as any)._element
          viewerElement.appendChild($(rootRef))
          $(secondRootRef) && viewerElement.appendChild($(secondRootRef))
          resolve([$(rootRef), $(secondRootRef)])
        })
      })
    }

    instance.mount = async () => {
      updateRootStyle()
      const { viewer } = $services
      viewer.viewerWidgetResized?.raiseEvent({
        type: instance.cesiumClass,
        status: 'mounted',
        target: $(rootRef)
      })
      return true
    }

    instance.unmount = async () => {
      const { viewer } = $services
      const viewerElement = (viewer as any)._element
      viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef))
      viewerElement.contains($(secondRootRef)) && viewerElement.removeChild($(secondRootRef))
      viewer.viewerWidgetResized?.removeEventListener(onViewerWidgetResized)
      viewer.viewerWidgetResized?.raiseEvent({
        type: instance.cesiumClass,
        status: 'unmounted',
        target: $(rootRef)
      })
      return true
    }

    const onViewerWidgetResized = () => {
      nextTick(() => {
        updateRootStyle()
      })
    }

    const updateRootStyle = () => {
      const compassTarget = $(compassRef)?.$el as HTMLElement
      let height = 0
      let marginX = 0
      if (compassTarget !== void 0) {
        const margin = getComputedStyle(compassTarget.parentNode as Element).margin
        marginX = parseInt(margin)
        height += compassTarget.getBoundingClientRect().height + marginX * 2
      }
      const zoomControlTarget = $(zoomControlRef)?.$el as HTMLElement
      if (zoomControlTarget !== void 0) {
        height += zoomControlTarget.getBoundingClientRect().height + marginX * 2
      }
      const printTarget = $(printRef)?.$el as HTMLElement
      if (printTarget !== void 0) {
        height += printTarget.getBoundingClientRect().height + marginX * 2
      }
      const myLocationTarget = $(myLocationRef)?.$el as HTMLElement
      if (myLocationTarget !== void 0) {
        height += myLocationTarget.getBoundingClientRect().height + marginX * 2
      }

      const css: CSSProperties = positionState.style.value
      const side = positionState.attach.value
      rootStyle.left = css.left
      rootStyle.top = css.top
      rootStyle.transform = css.transform

      if ((side.bottom || side.top) && !side.left && !side.right) {
        css.left = '50%'
        css.transform = 'translate(-50%, 0)'
      }

      if ((side.left || side.right) && !side.top && !side.bottom) {
        css.top = '50%'
        css.transform = 'translate(0, -50%)'
      }

      Object.assign(rootStyle, css, { height: `${height}px` })

      const cssSecondRoot: CSSProperties = positionStateOther.style.value
      const sideSecondRoot = positionStateOther.attach.value
      secondRootStyle.left = cssSecondRoot.left
      secondRootStyle.top = cssSecondRoot.top
      secondRootStyle.transform = cssSecondRoot.transform

      if ((sideSecondRoot.bottom || sideSecondRoot.top) && !sideSecondRoot.left && !sideSecondRoot.right) {
        cssSecondRoot.left = '50%'
        cssSecondRoot.transform = 'translate(-50%, 0)'
      }

      if ((sideSecondRoot.left || sideSecondRoot.right) && !sideSecondRoot.top && !sideSecondRoot.bottom) {
        cssSecondRoot.top = '50%'
        cssSecondRoot.transform = 'translate(0, -50%)'
      }

      let height2 = 0
      const statusBarRefTarget = $(statusBarRef)?.$el as HTMLElement
      if (statusBarRefTarget !== void 0) {
        height2 += statusBarRefTarget.getBoundingClientRect().height
      }
      Object.assign(secondRootStyle, cssSecondRoot, { height: `${height2}px` })
    }

    return () => {
      if (canRender.value) {
        const inner: VNode[] = []
        if (compassOptions.value && props.compassOpts !== false) {
          inner.push(
            h(
              'div',
              {
                class: 'vc-navigation-control'
              },
              [
                h(VcCompass, {
                  ref: compassRef,
                  ...compassOptions.value,
                  onCompassEvt
                })
              ]
            )
          )
        } else {
          inner.push(createCommentVNode('v-if'))
        }
        if (zoomControlOptions.value && props.zoomOpts !== false) {
          inner.push(
            h(
              'div',
              {
                class: 'vc-navigation-control'
              },
              [
                h(VcZoomControl, {
                  ref: zoomControlRef,
                  ...zoomControlOptions.value,
                  onZoomEvt
                })
              ]
            )
          )
        } else {
          inner.push(createCommentVNode('v-if'))
        }
        if (printViewOptions.value && props.printOpts !== false) {
          inner.push(
            h(
              'div',
              {
                class: 'vc-navigation-control'
              },
              [
                h(VcPrint, {
                  ref: printRef,
                  ...printViewOptions.value,
                  onPrintEvt
                })
              ]
            )
          )
        } else {
          inner.push(createCommentVNode('v-if'))
        }

        if (myLocationOptions.value && props.locationOpts !== false) {
          inner.push(
            h(
              'div',
              {
                class: 'vc-navigation-control'
              },
              [
                h(VcMyLocation, {
                  ref: myLocationRef,
                  ...myLocationOptions.value,
                  onLocationEvt
                })
              ]
            )
          )
        } else {
          inner.push(createCommentVNode('v-if'))
        }

        let children = [h('div', { class: 'vc-navigation-controls' }, inner)]
        children = hMergeSlot(ctx.slots.default, children)

        const root: VNode[] = []
        root.push(
          h(
            'div',
            {
              ref: rootRef,
              class: 'vc-navigation ' + positionState.classes.value,
              style: rootStyle
            },
            children
          )
        )
        if (props.otherOpts !== false) {
          root.push(
            h(
              'div',
              {
                ref: secondRootRef,
                class: 'vc-location-other-controls ' + positionStateOther.classes.value,
                style: secondRootStyle
              },
              [
                h(VcStatusBar, {
                  ref: statusBarRef,
                  ...otherControlOptions.value.statusBarOpts,
                  onStatusBarEvt
                }),
                h(VcDistanceLegend, {
                  ref: distanceLegendRef,
                  ...otherControlOptions.value.distancelegendOpts,
                  onDistanceLegendEvt
                })
              ]
            )
          )
        }
        return root
      } else {
        return createCommentVNode('v-if')
      }
    }
  }
})
