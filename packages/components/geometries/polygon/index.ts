/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 11:34:30
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\polygon\index.ts
 */
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcPolygonHierarchy, VcReadyObject } from '@vue-cesium/utils/types'
import { useGeometries } from '@vue-cesium/composables'
import {
  arcType,
  closeBottom,
  closeTop,
  ellipsoid,
  extrudedHeight,
  granularity,
  height,
  perPositionHeight,
  polygonHierarchy,
  stRotation,
  vertexFormat
} from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

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

export interface VcGeometryPolygonProps {
  /**
   * A polygon hierarchy that can include holes.
   */
  polygonHierarchy: VcPolygonHierarchy
  /**
   * The distance in meters between the polygon and the ellipsoid surface.
   */
  height?: number
  /**
   * The distance in meters between the polygon's extruded face and the ellipsoid surface.
   */
  extrudedHeight?: number
  /**
   * The vertex attributes to be computed.
   */
  vertexFormat?: Cesium.VertexFormat
  /**
   * The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise.
   * Default value: 0.0
   */
  stRotation?: number
  /**
   * The ellipsoid to be used as a reference.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer.
   */
  granularity?: number
  /**
   * Use the height of options.positions for each position instead of using options.height to determine the height.
   * Default value: false
   */
  perPositionHeight?: boolean
  /**
   * When false, leaves off the top of an extruded polygon open.
   * Default value: true
   */
  closeTop?: boolean
  /**
   * When false, leaves off the bottom of an extruded polygon open.
   * Default value: true
   */
  closeBottom?: boolean
  /**
   * The type of line the polygon edges must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB.
   */
  arcType?: number | Cesium.ArcType
  /**
   * Triggers before the VcGeometryPolygon is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometryPolygon is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGeometryPolygon is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometryPolygonRef = VcComponentPublicInstance<VcGeometryPolygonProps>
