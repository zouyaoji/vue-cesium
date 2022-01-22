/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 12:26:47
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\ellipse\index.ts
 */
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import type { ExtractPropTypes } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import {
  center,
  semiMajorAxis,
  semiMinorAxis,
  ellipsoid,
  height,
  extrudedHeight,
  rotation,
  stRotation,
  granularity,
  vertexFormat
} from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const ellipseGeometryProps = {
  ...center,
  ...semiMajorAxis,
  ...semiMinorAxis,
  ...ellipsoid,
  ...height,
  ...extrudedHeight,
  ...rotation,
  ...stRotation,
  ...granularity,
  ...vertexFormat
}
export default defineComponent({
  name: 'VcGeometryEllipse',
  props: ellipseGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'EllipseGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryEllipseProps = ExtractPropTypes<typeof ellipseGeometryProps>
