/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-17 00:02:39
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitives\primitive\index.ts
 */
import type { ExtractPropTypes } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitives } from '@vue-cesium/composables'
import {
  geometryInstances,
  appearance,
  depthFailAppearance,
  show,
  modelMatrix,
  vertexCacheOptimize,
  interleave,
  compressVertices,
  releaseGeometryInstances,
  allowPicking,
  asynchronous,
  debugShowBoundingVolume,
  shadows,
  enableMouseEvent
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { hSlot } from '@vue-cesium/utils/private/render'
import { primitiveEmits } from '@vue-cesium/utils/emits'

export const primitiveProps = {
  ...geometryInstances,
  ...appearance,
  ...depthFailAppearance,
  ...show,
  ...modelMatrix,
  ...vertexCacheOptimize,
  ...interleave,
  ...compressVertices,
  ...releaseGeometryInstances,
  ...allowPicking,
  cull: {
    type: Boolean,
    default: true
  },
  ...asynchronous,
  ...debugShowBoundingVolume,
  ...shadows,
  ...enableMouseEvent
}
export default defineComponent({
  name: 'VcPrimitive',
  props: primitiveProps,
  emits: primitiveEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Primitive'
    usePrimitives(props, ctx, instance)

    const name = instance.proxy?.$options.name || ''
    return () =>
      ctx.slots.default
        ? h(
            'i',
            {
              class: kebabCase(name),
              style: { display: 'none !important' }
            },
            hSlot(ctx.slots.default)
          )
        : createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcPrimitiveProps = ExtractPropTypes<typeof primitiveProps>
