import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitives } from '@vue-cesium/composables'
import {
  geometryInstances,
  appearance,
  show,
  interleave,
  compressVertices,
  releaseGeometryInstances,
  allowPicking,
  asynchronous,
  classificationType,
  debugShowBoundingVolume,
  debugShowShadowVolume,
  enableMouseEvent
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'

export default defineComponent({
  name: 'VcPrimitivePolylineGround',
  props: {
    ...geometryInstances,
    ...appearance,
    ...show,
    ...interleave,
    ...compressVertices,
    ...releaseGeometryInstances,
    ...allowPicking,
    ...asynchronous,
    ...classificationType,
    ...debugShowBoundingVolume,
    ...debugShowShadowVolume,
    ...enableMouseEvent
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'readyPromise', 'update:geometryInstances'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'GroundPolylinePrimitive'
    usePrimitives(props, ctx, instance)

    return () =>
      ctx.slots.default
        ? h(
            'i',
            {
              class: kebabCase(instance.proxy.$options.name),
              style: { display: 'none !important' }
            },
            hSlot(ctx.slots.default)
          )
        : createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
