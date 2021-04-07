import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { makeCartesian2 } from '@vue-cesium/utils/cesium-helpers'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  shadows,
  distanceDisplayCondition,
  plane
} from '@vue-cesium/utils/cesium-props'

export default defineComponent({
  name: 'VcGraphicsPlane',
  props: {
    ...show,
    ...plane,
    // 和 BoxGraphics.dimensions 区分
    dimensions: {
      type: [Object, Array, Function],
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian2
      }
    },
    ...fill,
    ...material,
    ...outline,
    ...outlineColor,
    ...outlineWidth,
    ...shadows,
    ...distanceDisplayCondition
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PlaneGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
