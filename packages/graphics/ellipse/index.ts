import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  distanceDisplayCondition,
  heightReference,
  extrudedHeightReference,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  numberOfVerticalLines,
  classificationType,
  zIndex,
  stRotation,
  shadows,
  semiMajorAxis,
  semiMinorAxis,
  height,
  extrudedHeight,
  rotation,
  granularity
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
export default defineComponent({
  name: 'VcGraphicsEllipse',
  props: {
    ...show,
    ...semiMajorAxis,
    ...semiMinorAxis,
    ...height,
    ...heightReference,
    ...extrudedHeight,
    ...extrudedHeightReference,
    ...rotation,
    ...stRotation,
    ...granularity,
    ...fill,
    ...material,
    ...outline,
    ...outlineColor,
    ...outlineWidth,
    ...numberOfVerticalLines,
    ...shadows,
    ...distanceDisplayCondition,
    ...classificationType,
    ...zIndex
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'EllipseGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
