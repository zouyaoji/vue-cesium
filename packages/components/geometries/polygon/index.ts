/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 14:07:15
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\polygon\index.ts
 */
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import type { ExtractPropTypes } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import {
  polygonHierarchy,
  height,
  extrudedHeight,
  vertexFormat,
  stRotation,
  ellipsoid,
  granularity,
  perPositionHeight,
  closeTop,
  closeBottom,
  arcType
} from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const polygonGeometryProps = {
  ...polygonHierarchy,
  ...height,
  ...extrudedHeight,
  ...vertexFormat,
  ...stRotation,
  ...ellipsoid,
  ...granularity,
  ...perPositionHeight,
  ...closeTop,
  ...closeBottom,
  ...arcType
}
export default defineComponent({
  name: 'VcGeometryPolygon',
  props: polygonGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PolygonGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryPolygonProps = ExtractPropTypes<typeof polygonGeometryProps>
