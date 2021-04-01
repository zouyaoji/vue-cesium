import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  length,
  topRadius,
  bottomRadius,
  heightReference,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  numberOfVerticalLines,
  slices,
  shadows,
  distanceDisplayCondition
} from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcGraphicsEllipse',
  props: {
    ...show,
    ...length,
    ...topRadius,
    ...bottomRadius,
    ...heightReference,
    ...fill,
    ...material,
    ...outline,
    ...outlineColor,
    ...outlineWidth,
    ...numberOfVerticalLines,
    ...slices,
    ...shadows,
    ...distanceDisplayCondition
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'EllipseGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
