import type { VcTooltipProps } from '@vue-cesium/components/ui'
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcZoomEvt } from '@vue-cesium/utils/types'
import type { CSSProperties, VNode } from 'vue'
import { VcTooltip } from '@vue-cesium/components/ui'
import { useCommon, useLocale } from '@vue-cesium/composables'
import usePosition, { positionProps } from '@vue-cesium/composables/private/use-position'
import { commonEmits } from '@vue-cesium/utils/emits'
import { hMergeSlot } from '@vue-cesium/utils/private/render'
import { $, getVcParentInstance } from '@vue-cesium/utils/private/vm'
import { isObject } from '@vue-cesium/utils/util'
import { computed, createCommentVNode, defineComponent, getCurrentInstance, h, nextTick, reactive, ref, watch } from 'vue'
import useZoomControl from './use-zoom-control'

export const zoomControlSmProps = {
  ...positionProps,
  autoHidden: {
    type: Boolean,
    default: false
  },
  tooltip: {
    type: Object,
    default: () => ({
      delay: 1000,
      anchor: 'bottom middle',
      offset: [0, 20],
      zoomInTip: void 0,
      zoomOutTip: void 0,
      zoomBarTip: void 0
    })
  }
}
const emits = {
  ...commonEmits,
  zoomEvt: (evt: VcZoomEvt) => true
}
export default defineComponent({
  name: 'VcZoomControlSm',
  props: zoomControlSmProps,
  emits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcZoomControlSm'
    instance.cesiumEvents = []
    const rootRef = ref<HTMLElement>()
    const zoomInRef = ref<HTMLElement>()
    const zoomBarRef = ref<HTMLElement>()
    const zoomOutRef = ref<HTMLElement>()
    const parentInstance = getVcParentInstance(instance)
    const hasVcNavigation = parentInstance.proxy?.$options.name === 'VcNavigationSm'
    const canRender = ref(hasVcNavigation)
    const rootStyle = reactive<CSSProperties>({})
    const commonState = useCommon(props, ctx, instance)

    if (commonState === void 0) {
      return
    }
    const { t } = useLocale()
    const { $services } = commonState
    const positionState = usePosition(props, $services)
    const zoomControlState = useZoomControl(props, ctx, instance, $services)

    // watch
    watch(
      () => props,
      (val) => {
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
    // computed
    const zoombarStyle = computed(() => ({ top: `${zoomControlState.zoombarTop.value}px` }))
    // methods
    instance.createCesiumObject = async () => {
      return new Promise((resolve, reject) => {
        canRender.value = true
        nextTick(() => {
          const rootEl = $(rootRef)
          const { viewer } = $services
          if (!hasVcNavigation) {
            const viewerElement = viewer._element
            isObject(rootEl) && viewerElement?.appendChild(rootEl)
            resolve(rootEl)
          }
          else {
            resolve(rootEl)
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
        target: $(rootRef)
      })
      return zoomControlState.load($(rootRef))
    }
    instance.unmount = async () => {
      const { viewer } = $services
      if (!hasVcNavigation) {
        const viewerElement = viewer._element
        const rootEl = $(rootRef)
        isObject(rootEl) && viewerElement?.contains(rootEl) && viewerElement.removeChild(rootEl)
      }

      viewer.viewerWidgetResized?.raiseEvent({
        type: instance.cesiumClass,
        status: 'unmounted',
        target: $(rootRef)
      })

      return zoomControlState.unload()
    }

    const updateRootStyle = () => {
      const css: CSSProperties = positionState.style.value
      rootStyle.left = css.left
      rootStyle.top = css.top
      rootStyle.transform = css.transform
      rootStyle.visibility = props.autoHidden ? 'hidden' : 'visible'

      if (!hasVcNavigation) {
        const side = positionState.attach.value
        if ((side.bottom || side.top) && !side.left && !side.right) {
          css.left = '50%'
          css.transform = 'translate(-50%, 0)'
        }

        if ((side.left || side.right) && !side.top && !side.bottom) {
          css.top = '50%'
          css.transform = 'translate(0, -50%)'
        }
      }
      Object.assign(rootStyle, css)
    }

    return () => {
      if (canRender.value) {
        let children: Array<VNode> = []
        children = hMergeSlot(ctx.slots.default, children)
        children.push(
          h(
            'div',
            {
              ref: zoomInRef,
              class: 'vc-zoomin-sm',
              onMousedown: zoomControlState.handleZoomInMouseDown,
              onTouchstart: zoomControlState.handleZoomInMouseDown
            },
            props.tooltip
              ? h(
                  VcTooltip,
                  {
                    ref: zoomControlState.zoomInTooltipRef,
                    ...props.tooltip,
                    onBeforeShow: zoomControlState.onTooltipBeforeShow
                  },
                  () => h('strong', {}, props.tooltip.zoomInTip || t('vc.navigationSm.zoomCotrol.zoomInTip'))
                )
              : createCommentVNode('v-if')
          )
        )

        children.push(
          h(
            'div',
            {
              ref: zoomOutRef,
              class: 'vc-zoomout-sm',
              onMousedown: zoomControlState.handleZoomOutMouseDown,
              onTouchstart: zoomControlState.handleZoomOutMouseDown
            },
            props.tooltip
              ? h(
                  VcTooltip,
                  {
                    ref: zoomControlState.zoomInTooltipRef,
                    ...props.tooltip,
                    onBeforeShow: zoomControlState.onTooltipBeforeShow
                  },
                  () => h('strong', {}, props.tooltip.zoomOutTip || t('vc.navigationSm.zoomCotrol.zoomOutTip'))
                )
              : createCommentVNode('v-if')
          )
        )

        children.push(
          h(
            'div',
            {
              ref: zoomBarRef,
              class: 'vc-zoombar-sm',
              style: zoombarStyle.value,
              onMousedown: zoomControlState.handleZoomBarScrollMouseDown,
              onTouchstart: zoomControlState.handleZoomBarScrollMouseDown
            },
            props.tooltip
              ? h(
                  VcTooltip,
                  {
                    ref: zoomControlState.zoomInTooltipRef,
                    ...props.tooltip,
                    onBeforeShow: zoomControlState.onTooltipBeforeShow
                  },
                  () => h('strong', {}, props.tooltip.zoomBarTip || t('vc.navigationSm.zoomCotrol.zoomBarTip'))
                )
              : createCommentVNode('v-if')
          )
        )

        return h(
          'div',
          {
            ref: rootRef,
            class: `vc-zoom-control-sm ${positionState.classes.value}`,
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

export type VcZoomControlSmEmits = typeof emits
export interface VcZoomControlSmProps {
  /**
   * Specify the position of the VcZoomControlSm.
   * Default value: top-right
   */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left'
  /**
   * An array of two numbers to offset the VcZoomControlSm horizontally and vertically in pixels.
   * Default value: [0, 0]
   */
  offset?: [number, number]
  /**
   * Specify whether the outer ring of the compass can be operated.
   * Default value: true
   */
  /**
   * Specify whether to automatically hide the zoom control.
   * Default value: true
   */
  autoHidden?: boolean
  /**
   * Specify the compass prompt information.
   */
  tooltip?: false | (VcTooltipProps & { zoomInTip: string, zoomOutTip: string, zoomBarTip: string })
}

export type VcZoomControlSmRef = VcComponentPublicInstance<VcZoomControlSmProps>
