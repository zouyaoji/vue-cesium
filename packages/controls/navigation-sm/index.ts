import { defineComponent, getCurrentInstance, watch, nextTick, ref, CSSProperties, reactive, h, createCommentVNode, computed } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import usePosition, { positionProps } from '@vue-cesium/composables/private/use-position'
import { $, getInstanceListener } from '@vue-cesium/utils/private/vm'
import { hMergeSlot } from '@vue-cesium/utils/private/render'
import { useCommon } from '@vue-cesium/composables'
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


export default defineComponent({
  name: 'VcNavigationSm',
  inheritAttrs: false,
  props: {
    ...positionProps,
    compassOpts: {
      type: Object,
      default: () => compassOptsDefault
    },
    zoomOpts: {
      type: Object,
      default: () => zoomOptsDefault
    }
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'zoomEvt', 'compassEvt'],
  setup (props, ctx) {
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
    const compassRef = ref<typeof VcCompassSm>(null)
    const zoomControlRef = ref<typeof VcZoomControlSm>(null)
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
    const compassOptions = computed(
      () => Object.assign({}, compassOptsDefault, props.compassOpts)
    )
    const zoomControlOptions = computed(
      () => Object.assign({}, zoomOptsDefault, props.zoomOpts)
    )

    // methods
    const onCompassEvt = e => {
      const listener = getInstanceListener(instance, 'compassEvt')
      listener && emit('compassEvt', e)
    }
    const onZoomEvt = e => {
      const listener = getInstanceListener(instance, 'zoomEvt')
      listener && emit('zoomEvt', e)
    }

    instance.createCesiumObject = async () => {
      canRender.value = true
      const { viewer } = $services
      viewer.viewerWidgetResized.addEventListener(onViewerWidgetResized)
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
      viewer.viewerWidgetResized.raiseEvent({
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
      viewer.viewerWidgetResized.removeEventListener(onViewerWidgetResized)
      viewer.viewerWidgetResized.raiseEvent({
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
        let children = []
        children = hMergeSlot(ctx.slots.default, children)
        if (props.compassOpts) {
          children.push(
            h(VcCompassSm, {
              ref: compassRef,
              onCompassEvt: onCompassEvt,
              ...compassOptions.value
            })
          )
        }
        if (props.zoomOpts) {
          children.push(
            h(VcZoomControlSm, {
              ref: zoomControlRef,
              onZoomEvt: onZoomEvt,
              ...zoomControlOptions.value
            })
          )
        }
        return h(
          'div',
          {
            ref: rootRef,
            class: 'vc-navigation-sm ' + positionState.classes.value,
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
