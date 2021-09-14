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
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
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
    useGraphics(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
