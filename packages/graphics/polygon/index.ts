import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  hierarchy,
  height,
  heightReference,
  extrudedHeight,
  extrudedHeightReference,
  stRotation,
  granularity,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  perPositionHeight,
  closeTop,
  closeBottom,
  arcType,
  shadows,
  distanceDisplayCondition,
  classificationType,
  zIndex
} from '@vue-cesium/utils/cesium-props'

export default defineComponent({
  name: 'VcGraphicsPolygon',
  props: {
    ...show,
    ...hierarchy,
    ...height,
    ...heightReference,
    ...extrudedHeight,
    ...extrudedHeightReference,
    ...stRotation,
    ...granularity,
    ...fill,
    ...material,
    ...outline,
    ...outlineColor,
    ...outlineWidth,
    ...perPositionHeight,
    ...closeTop,
    ...closeBottom,
    ...arcType,
    ...shadows,
    ...distanceDisplayCondition,
    ...classificationType,
    ...zIndex
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PolygonGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
