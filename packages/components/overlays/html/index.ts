import type { CSSProperties, TeleportProps, PropType, WatchStopHandle, VNode } from 'vue'
import { defineComponent, getCurrentInstance, ref, h, reactive, createCommentVNode, watch, onUnmounted } from 'vue'
import type { VcCartesian2, VcComponentInternalInstance, VcComponentPublicInstance, VcPosition, VcReadyObject } from '@vue-cesium/utils/types'
import { $ } from '@vue-cesium/utils/private/vm'
import { useCommon } from '@vue-cesium/composables'
import { hSlot } from '@vue-cesium/utils/private/render'
import { position, pixelOffset, show } from '@vue-cesium/utils/cesium-props'
import { makeCartesian2, makeCartesian3 } from '@vue-cesium/utils/cesium-helpers'
import usePortal from '@vue-cesium/composables/private/use-portal'
import { commonEmits } from '@vue-cesium/utils/emits'

export const htmlOverlayProps = {
  ...position,
  ...pixelOffset,
  ...show,
  autoHidden: {
    type: Boolean,
    default: true
  },
  customClass: String,
  teleport: Object as PropType<TeleportProps>
}
const emits = {
  ...commonEmits,
  mouseenter: (evt: MouseEvent) => true,
  mouseleave: (evt: MouseEvent) => true,
  click: (evt: MouseEvent) => true
}
export default defineComponent({
  name: 'VcOverlayHtml',
  props: htmlOverlayProps,
  emits: emits,
  setup(props: VcOverlayHtmlProps, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcOverlayHtml'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { $services } = commonState
    const canRender = ref(false)
    const rootRef = ref<HTMLElement>(null!)
    const rootStyle = reactive<CSSProperties>({})
    const offset = ref<Cesium.Cartesian2>(null!)
    const position = ref<Cesium.Cartesian3>(null!)
    const lastCanvasPosition = ref<Cesium.Cartesian2>(null!)

    // watcch
    let unwatchFns: Array<WatchStopHandle> = []
    unwatchFns.push(
      watch(
        () => props.position,
        val => {
          position.value = makeCartesian3(val as any, $services.viewer.scene.globe.ellipsoid) as Cesium.Cartesian3
        }
      )
    )

    unwatchFns.push(
      watch(
        () => props.pixelOffset,
        val => {
          offset.value = makeCartesian2(val) as Cesium.Cartesian2
        }
      )
    )
    // methods
    instance.createCesiumObject = async () => {
      return $(rootRef)
    }
    instance.mount = async () => {
      const { viewer } = $services
      canRender.value = true
      showPortal()
      offset.value = makeCartesian2(props.pixelOffset) as Cesium.Cartesian2
      position.value = makeCartesian3(props.position!, viewer.scene.globe.ellipsoid) as Cesium.Cartesian3
      viewer.scene.preRender.addEventListener(onPreRender)
      return true
    }
    instance.unmount = async () => {
      const { viewer } = $services
      viewer.scene.preRender.removeEventListener(onPreRender)
      canRender.value = false
      hidePortal()
      return true
    }
    const onPreRender = () => {
      const { viewer } = $services
      if (position.value) {
        const canvasPosition = viewer.scene.cartesianToCanvasCoordinates(position.value, {} as any)
        if (Cesium.defined(canvasPosition) && !Cesium.Cartesian2.equals(lastCanvasPosition.value, canvasPosition)) {
          rootStyle.left = canvasPosition.x + offset.value.x + 'px'
          rootStyle.top = canvasPosition.y + offset.value.y + 'px'

          if (props.autoHidden) {
            const cameraPosition = viewer.camera.position
            const cartographicPosition = viewer.scene.globe.ellipsoid.cartesianToCartographic(cameraPosition)
            if (Cesium.defined(cartographicPosition)) {
              let cameraHeight = cartographicPosition.height
              cameraHeight += 1 * viewer.scene.globe.ellipsoid.maximumRadius
              if (Cesium.Cartesian3.distance(cameraPosition, position.value) > cameraHeight || !props.show) {
                rootStyle.display = 'none'
              } else {
                rootStyle.display = 'block'
              }
            }
          } else {
            rootStyle.display = 'block'
          }
        }

        lastCanvasPosition.value = canvasPosition
      }
    }

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    const renderContent = () => {
      if (canRender.value) {
        return h(
          'div',
          {
            ref: rootRef,
            class: `vc-html-container${props.customClass ? ' ' + props.customClass : ''}`,
            style: rootStyle,
            onMouseenter: onMouseenter,
            onMouseleave: onMouseleave,
            onClick: onClick
          },
          hSlot(ctx.slots.default)
        )
      } else {
        return createCommentVNode('v-if')
      }
    }

    const onClick = evt => {
      ctx.emit('click', evt)
    }

    const onMouseenter = evt => {
      ctx.emit('mouseenter', evt)
    }

    const onMouseleave = evt => {
      ctx.emit('mouseleave', evt)
    }

    const renderPortalContent = () => {
      return renderContent()
    }

    const { showPortal, hidePortal, renderPortal } = usePortal(instance, rootRef, renderPortalContent)
    if (props.teleport && props.teleport.to && !props.teleport.disabled) {
      return renderPortal
    } else {
      return () => renderContent()
    }
  }
})

export type VcOverlayHtmlEmits = typeof emits
export interface VcOverlayHtmlProps {
  /**
   * Specify the geographic location of the HTML element.
   */
  position?: VcPosition
  /**
   * Specify the pixel offset of the HTML.
   */
  pixelOffset?: VcCartesian2
  /**
   * Specify whether to display the HTML overlay.
   * Default value: true
   */
  show?: boolean
  /**
   * Specifies whether HTML is automatically hidden when it is on the back of the earth.
   * Default value: true
   */
  autoHidden?: boolean
  /**
   * Specify an HTML custom class.
   */
  customClass?: string
  /**
   * Specify the teleport props.
   */
  teleport?: TeleportProps
  /**
   * Triggers before the VcOverlayHtml is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcOverlayHtml is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcOverlayHtml is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcOverlayHtmlRef = VcComponentPublicInstance<VcOverlayHtmlProps>
export type VcOverlayHtmlSlots = {
  /**
   * Slot for html element tag.
   */
  default: () => VNode[]
}
