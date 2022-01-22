/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 13:29:01
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\ellipsoid\index.ts
 */
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import type { ExtractPropTypes } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import {
  radii,
  innerRadii,
  minimumClock,
  maximumClock,
  minimumCone,
  maximumCone,
  stackPartitions,
  slicePartitions,
  vertexFormat
} from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const ellipsoidGeometryProps = {
  ...radii,
  ...innerRadii,
  ...minimumClock,
  ...maximumClock,
  ...minimumCone,
  ...maximumCone,
  ...stackPartitions,
  ...slicePartitions,
  ...vertexFormat
}
export default defineComponent({
  name: 'VcGeometryEllipsoid',
  props: ellipsoidGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'EllipsoidGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryEllipsoidProps = ExtractPropTypes<typeof ellipsoidGeometryProps>
