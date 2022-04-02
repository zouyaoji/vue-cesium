/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 11:42:49
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\polyline-volume-outline\index.ts
 */
import { VcCartesian2Array, VcCartesian3Array, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { polylinePositions, shapePositions, ellipsoid, granularity, cornerType } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const polylineVolumeOutlineGeometryProps = {
  ...polylinePositions,
  ...shapePositions,
  ...ellipsoid,
  ...granularity,
  ...cornerType
}
export default defineComponent({
  name: 'VcGeometryPolylineVolumeOutline',
  props: polylineVolumeOutlineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PolylineVolumeOutlineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryPolylineVolumeOutlineProps = {
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
   * Determines the style of the corners.
   */
  cornerType?: number | Cesium.CornerType
  /**
   * Triggers before the VcGeometryPolylineVolumeOutline is loaded
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometryPolylineVolumeOutline is successfully loaded
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcGeometryPolylineVolumeOutline is destroyed
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometryPolylineVolumeOutlineRef = VcComponentPublicInstance<VcGeometryPolylineVolumeOutlineProps>
