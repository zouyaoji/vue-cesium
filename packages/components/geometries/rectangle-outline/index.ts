/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 14:15:04
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\rectangle-outline\index.ts
 */
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import type { ExtractPropTypes } from 'babel-preset-vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { rectangle, ellipsoid, granularity, height, rotation, extrudedHeight } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const rectangleOutlineGeometryProps = {
  ...rectangle,
  ...ellipsoid,
  ...granularity,
  ...height,
  ...rotation,
  ...extrudedHeight
}
export default defineComponent({
  name: 'VcGeometryRectangleOutline',
  props: rectangleOutlineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'RectangleOutlineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryRectangleOutlineProps = ExtractPropTypes<typeof rectangleOutlineGeometryProps>
