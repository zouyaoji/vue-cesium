import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  text,
  font,
  labelStyle,
  scale,
  showBackground,
  backgroundColor,
  backgroundPadding,
  pixelOffset,
  eyeOffset,
  horizontalOrigin,
  verticalOrigin,
  heightReference,
  fillColor,
  outlineColor,
  outlineWidth,
  translucencyByDistance,
  pixelOffsetScaleByDistance,
  scaleByDistance,
  distanceDisplayCondition,
  disableDepthTestDistance
} from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcGraphicsLabel',
  props: {
    ...show,
    ...text,
    ...font,
    ...labelStyle,
    ...scale,
    ...showBackground,
    ...backgroundColor,
    ...backgroundPadding,
    ...pixelOffset,
    ...eyeOffset,
    ...horizontalOrigin,
    ...verticalOrigin,
    ...heightReference,
    ...fillColor,
    ...outlineColor,
    ...outlineWidth,
    ...translucencyByDistance,
    ...pixelOffsetScaleByDistance,
    ...scaleByDistance,
    ...distanceDisplayCondition,
    ...disableDepthTestDistance
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'LabelGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
