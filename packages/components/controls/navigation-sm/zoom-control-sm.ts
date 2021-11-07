import { computed, defineComponent, getCurrentInstance, nextTick, ref, CSSProperties, createCommentVNode, h, reactive, watch, VNode } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import usePosition, { positionProps } from '@vue-cesium/composables/private/use-position'
import { $, getVcParentInstance } from '@vue-cesium/utils/private/vm'
import { hMergeSlot } from '@vue-cesium/utils/private/render'
import { useCommon, useLocaleInject } from '@vue-cesium/composables'
import useZoomControl from './use-zoom-control'
import { VcTooltip } from '@vue-cesium/components/ui'
import { isObject } from '@vue-cesium/utils/util'

export default defineComponent({
  name: 'VcZoomControlSm',
  props: {
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
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'zoomEvt'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcZoomControlSm'
    instance.cesiumEvents = []
    const rootRef = ref<HTMLElement | null>(null)
    const zoomInRef = ref<HTMLElement | null>(null)
    const zoomBarRef = ref<HTMLElement | null>(null)
    const zoomOutRef = ref<HTMLElement | null>(null)
    const parentInstance = getVcParentInstance(instance)
    const hasVcNavigation = parentInstance.proxy?.$options.name === 'VcNavigationSm'
    const canRender = ref(hasVcNavigation)
    const rootStyle = reactive<CSSProperties>({})
    const commonState = useCommon(props, ctx, instance)

    if (commonState === void 0) {
      return
    }
    const { t } = useLocaleInject()
    const { $services } = commonState
    const positionState = usePosition(props, $services)
    const zoomControlState = useZoomControl(props, ctx, instance, $services)

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
    // computed
    const zoombarStyle = computed(() => ({ top: zoomControlState.zoombarTop.value + 'px' }))
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
          } else {
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
            class: 'vc-zoom-control-sm ' + positionState.classes.value,
            style: rootStyle
          },
          children
        )
      } else {
        return createCommentVNode('v-if')
      }
    }
  }
})
