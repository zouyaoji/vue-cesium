import { CSSProperties, defineComponent, getCurrentInstance, ref, h, reactive, createCommentVNode, watch, onUnmounted } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { $ } from '@vue-cesium/utils/private/vm'
import { useCommon } from '@vue-cesium/composables'
import { hSlot } from '@vue-cesium/utils/private/render'
import { position, pixelOffset } from '@vue-cesium/utils/cesium-props'
import { makeCartesian2, makeCartesian3 } from '@vue-cesium/utils/cesium-helpers'

export default defineComponent({
  name: 'VcOverlayHtml',
  props: {
    ...position,
    ...pixelOffset,
    autoHidden: {
      type: Boolean,
      default: true
    },
    customClass: String
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
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
    const rootRef = ref<HTMLElement>(null)
    const rootStyle = reactive<CSSProperties>({})
    const offset = ref(null)
    const position = ref(null)
    const lastCanvasPosition = ref(null)

    // watcch
    let unwatchFns = []
    unwatchFns.push(watch(
      () => props.position,
      val => {
        position.value = makeCartesian3(val) as Cesium.Cartesian3
      }
    ))

    unwatchFns.push(watch(
      () => props.pixelOffset,
      val => {
        offset.value = makeCartesian3(val) as Cesium.Cartesian3
      }
    ))

    // methods
    instance.createCesiumObject = async () => {
      return $(rootRef)
    }
    instance.mount = async () => {
      const { viewer } = $services
      canRender.value = true
      offset.value = makeCartesian2(props.pixelOffset) as Cesium.Cartesian2
      position.value = makeCartesian3(props.position) as Cesium.Cartesian3
      viewer.scene.preRender.addEventListener(onPreRender)
      return true
    }
    instance.unmount = async () => {
      const { viewer } = $services
      viewer.scene.preRender.removeEventListener(onPreRender)
      canRender.value = false
      return true
    }
    const onPreRender = () => {
      const { viewer } = $services
      const scratch = new Cesium.Cartesian2()
      const canvasPosition = viewer.scene.cartesianToCanvasCoordinates(position.value, scratch)
      if (Cesium.defined(canvasPosition) && !Cesium.Cartesian2.equals(lastCanvasPosition.value, canvasPosition)) {
        rootStyle.left = canvasPosition.x + offset.value.x + 'px'
        rootStyle.top = canvasPosition.y + offset.value.y + 'px'

        if (props.autoHidden) {
          const cameraPosition = viewer.camera.position
          const cartographicPosition = viewer.scene.globe.ellipsoid.cartesianToCartographic(cameraPosition)
          if (Cesium.defined(cartographicPosition)) {
            let cameraHeight = cartographicPosition.height
            cameraHeight += 1 * viewer.scene.globe.ellipsoid.maximumRadius
            if (Cesium.Cartesian3.distance(cameraPosition, position.value) > cameraHeight) {
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

    // life cycle
    onUnmounted(() => {
      unwatchFns.forEach(item => item())
      unwatchFns = []
    })

    // expose public methods
    Object.assign(instance.proxy, {
      createPromise: commonState.createPromise,
      load: commonState.load,
      unload: commonState.unload,
      reload: commonState.reload,
      cesiumObject: instance.cesiumObject,
      getCesiumObject: () => instance.cesiumObject
    })

    return () => {
      if (canRender.value) {
        return h('div', {
          ref: rootRef,
          class: `vc-html-container${props.customClass ? ' ' + props.customClass : ''}`,
          style: rootStyle
        }, hSlot(ctx.slots.default))
      } else {
        return createCommentVNode('v-if')
      }
    }
  }
})
