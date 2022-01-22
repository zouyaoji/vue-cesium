/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 14:13:41
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\rectangle\index.ts
 */
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import type { ExtractPropTypes } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { rectangle, vertexFormat, ellipsoid, granularity, height, rotation, stRotation, extrudedHeight } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const rectangleGeometryProps = {
  ...rectangle,
  ...vertexFormat,
  ...ellipsoid,
  ...granularity,
  ...height,
  ...rotation,
  ...stRotation,
  ...extrudedHeight
}
export default defineComponent({
  name: 'VcGeometryRectangle',
  props: rectangleGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'RectangleGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryRectangleProps = ExtractPropTypes<typeof rectangleGeometryProps>
