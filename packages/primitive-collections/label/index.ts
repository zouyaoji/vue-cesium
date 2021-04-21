import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitiveCollectionItems } from '@vue-cesium/composables'
import {
  backgroundColor,
  backgroundPadding,
  disableDepthTestDistance,
  distanceDisplayCondition,
  eyeOffset,
  fillColor,
  font,
  heightReference,
  horizontalOrigin,
  id,
  outlineColor,
  outlineWidth,
  pixelOffset,
  pixelOffsetScaleByDistance,
  position,
  scale,
  scaleByDistance,
  show,
  showBackground,
  labelStyle,
  text,
  translucencyByDistance,
  verticalOrigin,
  enableEvent
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'

export default defineComponent({
  name: 'VcLabel',
  props: {
    ...backgroundColor,
    ...backgroundPadding,
    ...disableDepthTestDistance,
    ...distanceDisplayCondition,
    ...eyeOffset,
    ...fillColor,
    ...font,
    ...heightReference,
    ...horizontalOrigin,
    ...id,
    ...outlineColor,
    ...outlineWidth,
    ...pixelOffset,
    ...pixelOffsetScaleByDistance,
    ...position,
    ...scale,
    ...scaleByDistance,
    ...show,
    ...showBackground,
    ...labelStyle,
    ...text,
    totalScale: {
      type: Number,
      default: 1.0
    },
    ...translucencyByDistance,
    ...verticalOrigin,
    ...enableEvent
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Label'
    usePrimitiveCollectionItems(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
