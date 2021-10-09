import { defineComponent, getCurrentInstance, ref, computed, nextTick, CSSProperties, watch, reactive, createCommentVNode, h, VNode } from 'vue'
import usePosition, { positionProps } from '@vue-cesium/composables/private/use-position'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { $, getVcParentInstance } from '@vue-cesium/utils/private/vm'
import { hMergeSlot } from '@vue-cesium/utils/private/render'
import { VcTooltip } from '@vue-cesium/components/ui'
import { useCommon } from '@vue-cesium/composables'
import useCompass from './use-compass'
import { t } from '@vue-cesium/locale'

export default defineComponent({
  name: 'VcCompassSm',
  props: {
    enableCompassOuterRing: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 1.5
    },
    tooltip: {
      type: Object,
      default: () => ({
        delay: 1000,
        anchor: 'bottom middle',
        offset: [0, 20],
        tip: void 0
      })
    },
    autoHidden: {
      type: Boolean,
      default: true
    },
    ...positionProps
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'compassEvt'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcCompassSm'
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const parentInstance = getVcParentInstance(instance)
    const { $services } = commonState
    const compassState = useCompass(props, ctx, instance)
    const positionState = usePosition(props, $services)
    const rootRef = ref<HTMLElement | null>(null)
    const outerRingRef = ref<HTMLElement | null>(null)
    const hasVcNavigation = parentInstance.proxy?.$options.name === 'VcNavigationSm'
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
    // computed
    const tiltbarStyle = computed<CSSProperties>(() => {
      return {
        left: compassState.tiltbarLeft.value + 'px',
        top: compassState.tiltbarTop.value + 'px',
        visibility: props.autoHidden ? 'hidden' : 'visible'
      }
    })
    const visibilityStyle = computed<CSSProperties>(() => {
      return {
        visibility: props.autoHidden ? 'hidden' : 'visible'
      }
    })
    const outerRingStyle = computed<CSSProperties>(() => {
      return {
        transform: 'rotate(-' + compassState.heading.value + 'rad)',
        WebkitTransform: 'rotate(-' + compassState.heading.value + 'rad)'
      }
    })
    // methods
    instance.createCesiumObject = async () => {
      canRender.value = true
      const { viewer } = $services
      return new Promise((resolve, reject) => {
        nextTick(() => {
          if (!hasVcNavigation) {
            const viewerElement = (viewer as any)._element
            viewerElement.appendChild($(rootRef))
            resolve($(rootRef))
          } else {
            resolve($(rootRef))
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
      return compassState.load($services.viewer, $(rootRef))
    }
    instance.unmount = async () => {
      const { viewer } = $services
      const viewerElement = (viewer as any)._element
      if (!hasVcNavigation) {
        viewerElement.contains($(rootRef)) && viewerElement.removeChild($(rootRef))
      }
      viewer.viewerWidgetResized?.raiseEvent({
        type: instance.cesiumClass,
        status: 'unmounted',
        target: $(rootRef)
      })
      return compassState.unload()
    }

    const updateRootStyle = () => {
      const css: CSSProperties = positionState.style.value
      rootStyle.left = css.left
      rootStyle.top = css.top
      rootStyle.transform = css.transform
      const side = positionState.attach.value
      const outerRingTarget = $(outerRingRef)
      if (outerRingTarget !== void 0) {
        const clientRect = outerRingTarget?.getBoundingClientRect()
        css.width = `${clientRect?.width}px`
        css.height = `${clientRect?.height}px`

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
          h('div', {
            class: 'vc-compass-tilt-sm',
            style: visibilityStyle.value
          })
        )
        children.push(
          h('div', {
            class: 'vc-compass-tiltbar-sm',
            style: tiltbarStyle.value
          })
        )
        children.push(
          h('div', {
            class: 'vc-compass-arrows-sm',
            style: visibilityStyle.value
          })
        )
        children.push(
          h(
            'div',
            {
              ref: outerRingRef,
              class: 'vc-compass-outer-ring-sm',
              style: outerRingStyle.value
            },
            props.tooltip
              ? h(
                  VcTooltip,
                  {
                    ref: compassState.tooltipRef,
                    ...props.tooltip,
                    onBeforeShow: compassState.onTooltipBeforeShow
                  },
                  () => h('strong', {}, props.tooltip.tip || t('vc.navigationSm.compass.outerTip'))
                )
              : createCommentVNode('v-if')
          )
        )
        children.push(
          h('div', {
            class: 'vc-arrows-e-sm',
            style: visibilityStyle.value
          })
        )
        children.push(
          h('div', {
            class: 'vc-arrows-n-sm',
            style: visibilityStyle.value
          })
        )
        children.push(
          h('div', {
            class: 'vc-arrows-s-sm',
            style: visibilityStyle.value
          })
        )
        children.push(
          h('div', {
            class: 'vc-arrows-w-sm',
            style: visibilityStyle.value
          })
        )

        return h(
          'div',
          {
            ref: rootRef,
            class: 'vc-compass-sm ' + positionState.classes.value,
            style: rootStyle,
            onDblclick: compassState.handleDoubleClick,
            onMousedown: compassState.handleMouseDown,
            onMouseup: compassState.handleMouseUp,
            onTouchend: compassState.handleMouseUp,
            onTouchstart: compassState.handleMouseDown
          },
          children
        )
      } else {
        return createCommentVNode('v-if')
      }
    }
  }
})
