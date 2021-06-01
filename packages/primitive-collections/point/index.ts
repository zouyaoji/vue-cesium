import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitiveCollectionItems } from '@vue-cesium/composables'
import {
  color,
  disableDepthTestDistance,
  distanceDisplayCondition,
  id,
  outlineColor,
  outlineWidth,
  pixelSize,
  position,
  scaleByDistance,
  show,
  translucencyByDistance,
  enableMouseEvent
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'

export default defineComponent({
  name: 'VcPoint',
  props: {
    ...color,
    ...disableDepthTestDistance,
    ...distanceDisplayCondition,
    ...id,
    ...outlineColor,
    ...outlineWidth,
    ...pixelSize,
    ...position,
    ...scaleByDistance,
    ...show,
    ...translucencyByDistance,
    ...enableMouseEvent
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PointPrimitive'
    usePrimitiveCollectionItems(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
