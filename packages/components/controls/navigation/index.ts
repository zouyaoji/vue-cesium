import type {
  VcCompassEvt,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcDistanceLegendEvt,
  VcLocationEvt,
  VcPrintEvt,
  VcReadyObject,
  VcStatusBarEvt,
  VcZoomEvt
} from '@vue-cesium/utils/types'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:13
 * @LastEditTime: 2022-11-05 00:39:45
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\controls\navigation\index.ts
 */
import type { CSSProperties, VNode } from 'vue'
import type { VcCompassProps, VcCompassRef } from '../compass'
import type { VcDistanceLegendRef } from '../distance-legend'
import type { VcMyLocationProps, VcMyLocationRef } from '../my-location'
import type { VcPrintProps, VcPrintRef } from '../print'
import type { VcStatusBarRef } from '../status-bar'
import type { VcZoomControlProps, VcZoomControlRef } from '../zoom-control'
import type { VcNavigationOtherOpts } from './defaultProps'
import { useCommon } from '@vue-cesium/composables'
import usePosition from '@vue-cesium/composables/private/use-position'
import { commonEmits } from '@vue-cesium/utils/emits'
import { hMergeSlot } from '@vue-cesium/utils/private/render'
import { $, getInstanceListener } from '@vue-cesium/utils/private/vm'
import { computed, createCommentVNode, defineComponent, getCurrentInstance, h, nextTick, reactive, ref, Teleport, watch } from 'vue'
import VcCompass from '../compass'
import VcDistanceLegend from '../distance-legend'
import VcMyLocation from '../my-location'
import VcPrint from '../print'
import VcStatusBar from '../status-bar'
import VcZoomControl from '../zoom-control'
import { defaultOptions, defaultProps } from './defaultProps'

const emits = {
  ...commonEmits,
  zoomEvt: (evt: VcZoomEvt) => true,
  compassEvt: (evt: VcCompassEvt) => true,
  locationEvt: (evt: VcLocationEvt) => true,
  printEvt: (evt: VcPrintEvt) => true,
  statusBarEvt: (evt: VcStatusBarEvt) => true,
  distanceLegendEvt: (evt: VcDistanceLegendEvt) => true
}
export const navigationProps = defaultProps
export default defineComponent({
  name: 'VcNavigation',
  inheritAttrs: false,
  props: navigationProps,
  emits,
  setup(props: VcNavigationProps, ctx) {
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
    const rootRef = ref<HTMLElement>(null)
    const secondRootRef = ref<HTMLElement>(null)
    const compassRef = ref<VcCompassRef>(null)
    const zoomControlRef = ref<VcZoomControlRef>(null)
    const printRef = ref<VcPrintRef>(null)
    const myLocationRef = ref<VcMyLocationRef>(null)
    const statusBarRef = ref<VcStatusBarRef>(null)
    const distanceLegendRef = ref<VcDistanceLegendRef>(null)
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
    const zoomControlOptions = computed<VcZoomControlProps>(() => Object.assign({}, defaultOptions.zoomOpts, props.zoomOpts))
    const printViewOptions = computed<VcPrintProps>(() => Object.assign({}, defaultOptions.printOpts, props.printOpts))
    const myLocationOptions = computed<false | VcMyLocationProps>(() => Object.assign({}, defaultOptions.locationOpts, props.locationOpts))
    const otherControlOptions = computed(() => Object.assign({}, defaultOptions.otherOpts, props.otherOpts))

    // methods
    const onCompassEvt = (evt: VcCompassEvt) => {
      const listener = getInstanceListener(instance, 'compassEvt')
      listener && emit('compassEvt', evt)
    }
    const onZoomEvt = (evt: VcZoomEvt) => {
      const listener = getInstanceListener(instance, 'zoomEvt')
      listener && emit('zoomEvt', evt)
    }
    const onPrintEvt = (evt: VcPrintEvt) => {
      const listener = getInstanceListener(instance, 'printEvt')
      listener && emit('printEvt', evt)
    }
    const onLocationEvt = (evt: VcLocationEvt) => {
      const listener = getInstanceListener(instance, 'locationEvt')
      listener && emit('locationEvt', evt)
    }
    const onStatusBarEvt = (evt: VcStatusBarEvt) => {
      const listener = getInstanceListener(instance, 'statusBarEvt')
      listener && emit('statusBarEvt', evt)
    }
    const onDistanceLegendEvt = (evt: VcDistanceLegendEvt) => {
      const listener = getInstanceListener(instance, 'distanceLegendEvt')
      listener && emit('distanceLegendEvt', evt)
    }

    instance.createCesiumObject = async () => {
      const { viewer } = $services
      viewer.viewerWidgetResized?.addEventListener(onViewerWidgetResized)
      return [rootRef, secondRootRef]
    }

    instance.mount = async () => {
      canRender.value = true
      nextTick(() => {
        updateRootStyle()
      })
      const { viewer } = $services
      viewer.viewerWidgetResized?.raiseEvent({
        type: instance.cesiumClass,
        status: 'mounted',
        target: $(rootRef)
      })
      return true
    }

    instance.unmount = async () => {
      canRender.value = false
      const { viewer } = $services
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
      if (compassTarget !== void 0 && compassTarget.nodeName !== '#comment') {
        const margin = getComputedStyle(compassTarget.parentNode as Element).margin
        marginX = Number.parseInt(margin)
        height += compassTarget.getBoundingClientRect().height + marginX * 2
      }
      const zoomControlTarget = $(zoomControlRef)?.$el as HTMLElement
      if (zoomControlTarget !== void 0 && zoomControlTarget.nodeName !== '#comment') {
        height += zoomControlTarget.getBoundingClientRect().height + marginX * 2
      }
      const printTarget = $(printRef)?.$el as HTMLElement
      if (printTarget !== void 0 && printTarget.nodeName !== '#comment') {
        height += printTarget.getBoundingClientRect().height + marginX * 2
      }
      const myLocationTarget = $(myLocationRef)?.$el as HTMLElement
      if (myLocationTarget !== void 0 && myLocationTarget.nodeName !== '#comment') {
        height += myLocationTarget.getBoundingClientRect().height + marginX * 2
      }

      const css: CSSProperties = positionState.style.value
      const side = positionState.attach.value
      rootStyle.left = css.left
      rootStyle.top = css.top
      rootStyle.transform = css.transform

      if (typeof props.teleportToViewer === 'undefined' || props.teleportToViewer) {
        if ((side.bottom || side.top) && !side.left && !side.right) {
          css.left = '50%'
          css.transform = 'translate(-50%, 0)'
        }

        if ((side.left || side.right) && !side.top && !side.bottom) {
          css.top = '50%'
          css.transform = 'translate(0, -50%)'
        }
      }

      Object.assign(rootStyle, css, { height: `${height}px` })

      const cssSecondRoot: CSSProperties = positionStateOther.style.value
      const sideSecondRoot = positionStateOther.attach.value
      secondRootStyle.left = cssSecondRoot.left
      secondRootStyle.top = cssSecondRoot.top
      secondRootStyle.transform = cssSecondRoot.transform

      if (typeof props.teleportToViewer === 'undefined' || props.teleportToViewer) {
        if ((sideSecondRoot.bottom || sideSecondRoot.top) && !sideSecondRoot.left && !sideSecondRoot.right) {
          cssSecondRoot.left = '50%'
          cssSecondRoot.transform = 'translate(-50%, 0)'
        }

        if ((sideSecondRoot.left || sideSecondRoot.right) && !sideSecondRoot.top && !sideSecondRoot.bottom) {
          cssSecondRoot.top = '50%'
          cssSecondRoot.transform = 'translate(0, -50%)'
        }
      }

      let height2 = 0
      const statusBarRefTarget = $(statusBarRef)?.$el as HTMLElement
      if (statusBarRefTarget !== void 0 && statusBarRefTarget.nodeName !== '#comment') {
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
        }
        else {
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
        }
        else {
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
        }
        else {
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
        }
        else {
          inner.push(createCommentVNode('v-if'))
        }

        let children = [h('div', { class: 'vc-navigation-controls' }, inner)]
        children = hMergeSlot(ctx.slots.default, children)

        const root: VNode[] = []
        const renderNavigationContent = h(
          'div',
          {
            ref: rootRef,
            class: `vc-navigation ${positionState.classes.value} ${props.customClass}`,
            style: rootStyle
          },
          children
        )

        if (props.teleportToViewer) {
          root.push(h(Teleport, { to: $services.viewer._element }, renderNavigationContent))
        }
        else {
          root.push(renderNavigationContent)
        }

        if (props.otherOpts !== false) {
          const renderOtherContent = h(
            'div',
            {
              ref: secondRootRef,
              class: `vc-location-other-controls ${positionStateOther.classes.value}`,
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
          if (props.teleportToViewer) {
            root.push(h(Teleport, { to: $services.viewer._element }, renderOtherContent))
          }
          else {
            root.push(renderOtherContent)
          }
        }
        return root
      }
      else {
        return createCommentVNode('v-if')
      }
    }
  }
})

export type VcNavigationEmits = typeof emits
export interface VcNavigationProps {
  /**
   * Specify the position of the VcNavigation.
   * Default value: top-right
   */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left'
  /**
   * An array of two numbers to offset the VcNavigation horizontally and vertically in pixels.
   * Default value: [0, 0]
   */
  offset?: [number, number]
  /**
   * Specify the compass options of the component. false means no display.
   */
  compassOpts?: false | VcCompassProps
  /**
   * Specify the zoom control options of the component. false means no display.
   */
  zoomOpts?: false | VcZoomControlProps
  /**
   * Specify the print button options of the component. false means no display.
   */
  printOpts?: false | VcPrintProps
  /**
   * Specify the location button options of the component. false means no display.
   */
  locationOpts?: false | VcMyLocationProps
  /**
   * Specify the other controls(status bar & distance legend) options of the component. false means no display.
   */
  otherOpts?: false | VcNavigationOtherOpts
  /**
   * Specify the customClass of the vc-navigation.
   */
  customClass?: string
  /**
   * Specify whether to add to the cesium-viewer node.
   * Default value: true
   */
  teleportToViewer?: boolean
  /**
   * Triggers before the VcNavigation is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcNavigation is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcNavigation is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the zoom control is operated.
   */
  onZoomEvt?: (evt: VcZoomEvt) => void
  /**
   * Triggers when the compass control is operated.
   */
  onCompassEvt?: (evt: VcCompassEvt) => void
  /**
   * Triggers when the positioning button is clicked.
   */
  onLocationEvt?: (evt: VcLocationEvt) => void
  /**
   * Triggers when the print button is clicked.
   */
  onPrintEvt?: (evt: VcPrintEvt) => void
  /**
   * Triggers when the information changed.
   */
  onStatusBarEvt?: (evt: VcStatusBarEvt) => void
  /**
   * Triggers when the distance scale changed.
   */
  onDistanceLegendEvt?: (evt: VcDistanceLegendEvt) => void
}

export interface VcNavigationSlots {
  /**
   * Suggestion: VcCompass, VcZoomControl, VcPrint, VcMyLocation, VcStatusBar, VcDistanceLegend
   */
  default: () => VNode[]
}

export type VcNavigationRef = VcComponentPublicInstance<VcNavigationProps>
