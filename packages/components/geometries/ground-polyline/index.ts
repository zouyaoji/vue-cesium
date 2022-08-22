/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 11:00:34
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\ground-polyline\index.ts
 */
import { VcCartesian3Array, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { positions, width, granularity, loop, arcType } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const groundPolylineGeometryProps = {
  ...positions,
  ...width,
  ...granularity,
  ...loop,
  ...arcType
}
export default defineComponent({
  name: 'VcGeometryGroundPolyline',
  props: groundPolylineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'GroundPolylineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryGroundPolylineProps = {
  /**
   * An array of Cartesian3 defining the polyline's points. Heights above the ellipsoid will be ignored.
   */
  positions: VcCartesian3Array
  /**
   * The screen space width in pixels.
   */
  width?: number
  /**
   * The distance interval in meters used for interpolating options.points. Defaults to 9999.0 meters. Zero indicates no interpolation.
   */
  granularity?: number
  /**
   * Whether during geometry creation a line segment will be added between the last and first line positions to make this Polyline a loop.
   * Defalut value: false
   */
  loop?: boolean
  /**
   * The type of line the polyline segments must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB.
   */
  arcType?: number | Cesium.ArcType
  /**
   * Triggers before the VcGeometryGroundPolyline is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometryGroundPolyline is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGeometryGroundPolyline is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometryGroundPolylineRef = VcComponentPublicInstance<VcGeometryGroundPolylineProps>
