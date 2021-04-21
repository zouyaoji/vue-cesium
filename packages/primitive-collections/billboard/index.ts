import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitiveCollectionItems } from '@vue-cesium/composables'
import {
  alignedAxis,
  color,
  disableDepthTestDistance,
  distanceDisplayCondition,
  eyeOffset,
  height,
  heightReference,
  horizontalOrigin,
  id,
  image,
  pixelOffset,
  pixelOffsetScaleByDistance,
  position,
  rotation,
  scale,
  scaleByDistance,
  show,
  sizeInMeters,
  translucencyByDistance,
  verticalOrigin,
  width,
  enableEvent
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'

export default defineComponent({
  name: 'VcBillboard',
  props: {
    ...alignedAxis,
    ...color,
    ...disableDepthTestDistance,
    ...distanceDisplayCondition,
    ...eyeOffset,
    ...height,
    ...heightReference,
    ...horizontalOrigin,
    ...id,
    ...image,
    ...pixelOffset,
    ...pixelOffsetScaleByDistance,
    ...position,
    ...rotation,
    ...scale,
    ...scaleByDistance,
    ...show,
    ...sizeInMeters,
    ...translucencyByDistance,
    ...verticalOrigin,
    ...width,
    ...enableEvent
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Billboard'
    usePrimitiveCollectionItems(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
