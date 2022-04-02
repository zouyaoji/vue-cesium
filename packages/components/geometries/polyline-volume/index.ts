/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 11:40:36
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\polyline-volume\index.ts
 */
import { VcCartesian2Array, VcCartesian3Array, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
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

export type VcGeometryPolylineVolumeProps = {
  /**
   * An array of VcCartesian3Array positions that define the center of the polyline volume.
   */
  polylinePositions: VcCartesian3Array
  /**
   * An array of VcCartesian2Array positions that define the shape to be extruded along the polyline.
   */
  shapePositions: VcCartesian2Array
  /**
   * The ellipsoid to be used as a reference.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer.
   */
  granularity?: number
  /**
   * The vertex attributes to be computed.
   */
  vertexFormat: Cesium.VertexFormat
  /**
   * Determines the style of the corners.
   */
  cornerType?: number | Cesium.CornerType
  /**
   * Triggers before the VcGeometryPolylineVolume is loaded
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometryPolylineVolume is successfully loaded
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcGeometryPolylineVolume is destroyed
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometryPolylineVolumeRef = VcComponentPublicInstance<VcGeometryPolylineVolumeProps>
