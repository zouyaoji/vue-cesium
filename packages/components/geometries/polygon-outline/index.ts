/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 11:36:10
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\polygon-outline\index.ts
 */
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcPolygonHierarchy, VcReadyObject } from '@vue-cesium/utils/types'
import { useGeometries } from '@vue-cesium/composables'
import {
  arcType,
  ellipsoid,
  extrudedHeight,
  granularity,
  height,
  perPositionHeight,
  polygonHierarchy,
  vertexFormat
} from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

export const polygonOutlineGeometryProps = {
  ...polygonHierarchy,
  ...height,
  ...extrudedHeight,
  ...vertexFormat,
  ...ellipsoid,
  ...granularity,
  ...perPositionHeight,
  ...arcType
}
export default defineComponent({
  name: 'VcGeometryPolygonOutline',
  props: polygonOutlineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PolygonOutlineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export interface VcGeometryPolygonOutlineProps {
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
   * The type of line the polygon edges must follow. Valid options are ArcType.GEODESIC and ArcType.RHUMB.
   */
  arcType?: number | Cesium.ArcType
  /**
   * Triggers before the VcGeometryPolygonOutline is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometryPolygonOutline is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGeometryPolygonOutline is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometryPolygonOutlineRef = VcComponentPublicInstance<VcGeometryPolygonOutlineProps>
