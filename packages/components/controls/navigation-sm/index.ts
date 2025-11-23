import type { VcCompassEvt, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject, VcZoomEvt } from '@vue-cesium/utils/types'
import type { CSSProperties, PropType, VNode } from 'vue'
import type { VcCompassSmProps, VcCompassSmRef } from './compass-sm'
import type { VcZoomControlSmProps, VcZoomControlSmRef } from './zoom-control-sm'
import { useCommon } from '@vue-cesium/composables'
import usePosition, { positionProps } from '@vue-cesium/composables/private/use-position'
import { commonEmits } from '@vue-cesium/utils/emits'
import { hMergeSlot } from '@vue-cesium/utils/private/render'
import { $, getInstanceListener } from '@vue-cesium/utils/private/vm'
import { computed, createCommentVNode, defineComponent, getCurrentInstance, h, nextTick, reactive, ref, watch } from 'vue'
import VcCompassSm from './compass-sm'
import VcZoomControlSm from './zoom-control-sm'

const compassOptsDefault = {
  enableCompassOuterRing: true,
  duration: 1.5,
  autoHidden: true,
  tooltip: {
    delay: 1000,
    anchor: 'bottom middle',
    offset: [0, 20],
    tip: void 0
  }
}

const zoomOptsDefault = {
  autoHidden: true,
  tooltip: {
    delay: 1000,
    anchor: 'bottom middle',
    offset: [0, 20],
    tip: void 0
  }
}

export const navigationSmProps = {
  ...positionProps,
  compassOpts: {
    type: [Boolean, Object] as PropType<false | VcCompassSmProps>,
    default: () => compassOptsDefault as VcCompassSmProps
  },
  zoomOpts: {
    type: [Boolean, Object] as PropType<false | VcZoomControlSmProps>,
    default: () => zoomOptsDefault as VcZoomControlSmProps
  }
}
const emits = {
  ...commonEmits,
  zoomEvt: (evt: VcZoomEvt) => true,
  compassEvt: (evt: VcCompassEvt) => true
}
export default defineComponent({
  name: 'VcNavigationSm',
  inheritAttrs: false,
  props: navigationSmProps,
  emits,
  setup(props: VcNavigationSmProps, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcNavigationSm'
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }

    const canRender = ref(false)
    const { $services } = commonState
    const positionState = usePosition(props, $services)
    const rootRef = ref<HTMLElement>(null)
    const compassRef = ref<VcCompassSmRef>(null)
    const zoomControlRef = ref<VcZoomControlSmRef>(null)
    const rootStyle = reactive<CSSProperties>({})
    const { emit } = ctx
    // watch
    watch(
      () => props,
      () => {
        nextTick(() => {
          updateRootStyle()
          $(compassRef)?.reload()
          $(zoomControlRef)?.reload()
        })
      },
      {
        deep: true
      }
    )
    // computed
    const compassOptions = computed(() => Object.assign({}, compassOptsDefault, props.compassOpts))
    const zoomControlOptions = computed(() => Object.assign({}, zoomOptsDefault, props.zoomOpts))

    // methods
    const onCompassEvt = (e) => {
      const listener = getInstanceListener(instance, 'compassEvt')
      listener && emit('compassEvt', e)
    }
    const onZoomEvt = (e) => {
      const listener = getInstanceListener(instance, 'zoomEvt')
      listener && emit('zoomEvt', e)
    }

    instance.createCesiumObject = async () => {
      canRender.value = true
      const { viewer } = $services
      viewer.viewerWidgetResized?.addEventListener(onViewerWidgetResized)
      return new Promise((resolve, reject) => {
        nextTick(() => {
          const viewerElement = (viewer as any)._element
          viewerElement.appendChild($(rootRef))
          resolve($(rootRef))
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

      Object.assign(rootStyle, css)
    }

    return () => {
      if (canRender.value) {
        let children: Array<VNode> = []
        children = hMergeSlot(ctx.slots.default, children)
        if (compassOptions.value && props.compassOpts !== false) {
          children.push(
            h(VcCompassSm, {
              ref: compassRef,
              onCompassEvt,
              ...compassOptions.value
            })
          )
        }
        if (zoomControlOptions.value && props.zoomOpts !== false) {
          children.push(
            h(VcZoomControlSm, {
              ref: zoomControlRef,
              onZoomEvt,
              ...zoomControlOptions.value
            })
          )
        }
        return h(
          'div',
          {
            ref: rootRef,
            class: `vc-navigation-sm ${positionState.classes.value}`,
            style: rootStyle
          },
          children
        )
      }
      else {
        return createCommentVNode('v-if')
      }
    }
  }
})

export type VcNavigationSmEmits = typeof emits
export interface VcNavigationSmProps {
  /**
   * Specify the position of the VcNavigationSm.
   * Default value: top-right
   */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left'
  /**
   * An array of two numbers to offset the VcNavigationSm horizontally and vertically in pixels.
   * Default value: [0, 0]
   */
  offset?: [number, number]
  /**
   * Specify the compass options of the component. false means no display.
   */
  compassOpts?: false | VcCompassSmProps
  /**
   * Specify the zoom control options of the component. false means no display.
   */
  zoomOpts?: false | VcZoomControlSmProps
  /**
   * Triggers before the VcNavigationSm is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcNavigationSm is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcNavigationSm is destroyed.
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
}

export interface VcNavigationSmSlots {
  /**
   * Suggestion: VcCompassSm, VcZoomControlSm
   */
  default: () => VNode[]
}

export type VcNavigationSmRef = VcComponentPublicInstance<VcNavigationSmProps>
