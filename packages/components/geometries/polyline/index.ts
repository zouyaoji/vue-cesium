/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 11:40:46
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\polyline\index.ts
 */
import type { VcCartesian3Array, VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { useGeometries } from '@vue-cesium/composables'
import { arcType, colors, ellipsoid, granularity, positions, vertexFormat, width } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

export const polylineGeometryProps = {
  ...positions,
  ...width,
  ...colors,
  colorsPerVertex: {
    type: Boolean,
    default: false
  },
  ...arcType,
  ...granularity,
  ...vertexFormat,
  ...ellipsoid
}
export default defineComponent({
  name: 'VcGeometryPolyline',
  props: polylineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PolylineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export interface VcGeometryPolylineProps {
  /**
   * An array of VcCartesian3Array defining the positions in the polyline as a line strip
   */
  positions?: VcCartesian3Array
  /**
   * The width in pixels
   * Default value: 1.0
   */
  width?: number
  /**
   * An Array of VcColor defining the per vertex or per segment colors
   */
  colors?: Array<VcColor>
  /**
   * A boolean that determines whether the colors will be flat across each segment of the line or interpolated across the vertices
   * Default value: false
   */
  colorsPerVertex?: boolean
  /**
   * The type of line the polyline segments must follow
   * Default value: 1 - Cesium.ArcType.GEODESIC
   */
  arcType?: Cesium.ArcType | number
  /**
   * The distance, in radians, between each latitude and longitude if options.arcType is not ArcType.NONE. Determines the number of positions in the buffer
   */
  granularity?: number
  /**
   * The vertex attributes to be computed.
   */
  vertexFormat?: Cesium.VertexFormat
  /**
   * The ellipsoid to be used as a reference.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * Triggers before the VcGeometryPolyline is loaded
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometryPolyline is successfully loaded
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGeometryPolyline is destroyed
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometryPolylineRef = VcComponentPublicInstance<VcGeometryPolylineProps>
