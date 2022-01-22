/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 14:11:12
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\polyline-volume\index.ts
 */
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import type { ExtractPropTypes } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { polylinePositions, shapePositions, ellipsoid, granularity, vertexFormat, cornerType } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const polylineVolumeGeometryProps = {
  ...polylinePositions,
  ...shapePositions,
  ...ellipsoid,
  ...granularity,
  ...vertexFormat,
  ...cornerType
}
export default defineComponent({
  name: 'VcGeometryPolylineVolume',
  props: polylineVolumeGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PolylineVolumeGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryPolylineVolumeProps = ExtractPropTypes<typeof polylineVolumeGeometryProps>
