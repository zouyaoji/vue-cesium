/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-16 09:43:17
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitives\classification\index.ts
 */
import type { ExtractPropTypes } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance, h } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitives } from '@vue-cesium/composables'
import {
  geometryInstances,
  appearance,
  show,
  vertexCacheOptimize,
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
import { primitiveEmits } from '@vue-cesium/utils/emits'

export const classificationPrimitiveProps = {
  ...geometryInstances,
  ...appearance,
  ...show,
  ...vertexCacheOptimize,
  ...interleave,
  ...compressVertices,
  ...releaseGeometryInstances,
  ...allowPicking,
  ...asynchronous,
  ...classificationType,
  ...debugShowBoundingVolume,
  ...debugShowShadowVolume,
  ...enableMouseEvent
}
export default defineComponent({
  name: 'VcPrimitiveClassification',
  props: classificationPrimitiveProps,
  emits: primitiveEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'ClassificationPrimitive'
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
        : createCommentVNode(kebabCase(name))
  }
})

export type VcPrimitiveClassificationProps = ExtractPropTypes<typeof classificationPrimitiveProps>
