/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 11:29:05
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\corridor\index.ts
 */
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import type { ExtractPropTypes } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { positions, width, ellipsoid, granularity, height, extrudedHeight, vertexFormat, cornerType } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const corridorGeometryProps = {
  ...positions,
  ...width,
  ...ellipsoid,
  ...granularity,
  ...height,
  ...extrudedHeight,
  ...vertexFormat,
  ...cornerType
}
export default defineComponent({
  name: 'VcGeometryCorridor',
  props: corridorGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CorridorGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryCorridorProps = ExtractPropTypes<typeof corridorGeometryProps>
