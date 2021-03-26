import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  image,
  scale,
  pixelOffset,
  eyeOffset,
  horizontalOrigin,
  verticalOrigin,
  heightReference,
  color,
  rotation,
  alignedAxis,
  sizeInMeters,
  width,
  height,
  scaleByDistance,
  translucencyByDistance,
  pixelOffsetScaleByDistance,
  disableDepthTestDistance,
  show,
  distanceDisplayCondition,
  imageSubRegion
} from '@vue-cesium/utils/cesiumProps'
export default defineComponent({
  name: 'VcGraphicsBillboard',
  props: {
    ...image,
    ...scale,
    ...pixelOffset,
    ...eyeOffset,
    ...horizontalOrigin,
    ...verticalOrigin,
    ...heightReference,
    ...color,
    ...rotation,
    ...alignedAxis,
    ...sizeInMeters,
    ...width,
    ...height,
    ...scaleByDistance,
    ...translucencyByDistance,
    ...pixelOffsetScaleByDistance,
    ...disableDepthTestDistance,
    ...show,
    ...distanceDisplayCondition,
    ...imageSubRegion
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'BillboardGraphics'
    const graphicsState = useGraphics(props, ctx, instance)
    // expose public methods
    Object.assign(instance.proxy, {
      createPromise: graphicsState.createPromise,
      load: graphicsState.load,
      unload: graphicsState.unload,
      reload: graphicsState.reload,
      getCesiumObject: () => instance.cesiumObject,
    })
    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
