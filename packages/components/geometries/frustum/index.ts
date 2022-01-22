/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 13:32:49
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\frustum\index.ts
 */
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { frustum, origin, orientation, vertexFormat } from '@vue-cesium/utils/cesium-props'
import type { ExtractPropTypes } from 'vue'
import { commonEmits } from '@vue-cesium/utils/emits'
export const frustumGeometryProps = {
  ...frustum,
  ...origin,
  ...orientation,
  ...vertexFormat
}
export default defineComponent({
  name: 'VcGeometryFrustum',
  props: frustumGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'FrustumGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryFrustumProps = ExtractPropTypes<typeof frustumGeometryProps>
