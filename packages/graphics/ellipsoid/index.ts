import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  radii,
  innerRadii,
  minimumClock,
  maximumClock,
  minimumCone,
  maximumCone,
  heightReference,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  stackPartitions,
  slicePartitions,
  subdivisions,
  shadows,
  distanceDisplayCondition,
} from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcGraphicsEllipsoid',
  props: {
    ...show,
    ...radii,
    ...innerRadii,
    ...minimumClock,
    ...maximumClock,
    ...minimumCone,
    ...maximumCone,
    ...heightReference,
    ...fill,
    ...material,
    ...outline,
    ...outlineColor,
    ...outlineWidth,
    ...stackPartitions,
    ...slicePartitions,
    ...subdivisions,
    ...shadows,
    ...distanceDisplayCondition
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'EllipsoidGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
