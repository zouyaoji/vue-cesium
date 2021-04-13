import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  positions,
  width,
  height,
  heightReference,
  extrudedHeight,
  extrudedHeightReference,
  cornerType,
  granularity,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  shadows,
  distanceDisplayCondition,
  classificationType,
  zIndex,
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
export default defineComponent({
  name: 'VcGraphicsCorridor',
  props: {
    ...show,
    ...positions,
    ...width,
    ...height,
    ...heightReference,
    ...extrudedHeight,
    ...extrudedHeightReference,
    ...cornerType,
    ...granularity,
    ...fill,
    ...material,
    ...outline,
    ...outlineColor,
    ...outlineWidth,
    ...shadows,
    ...distanceDisplayCondition,
    ...classificationType,
    ...zIndex
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CorridorGraphics'
    useGraphics(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
