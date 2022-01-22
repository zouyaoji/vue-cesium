/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-20 22:48:35
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\polyline\index.ts
 */
import { VcCartesian3Array, VcColor, VcComponentInternalInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import type { ExtractPropTypes } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { positions, width, colors, arcType, granularity, vertexFormat, ellipsoid } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
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

// export type VcGeometryPolylineProps = ExtractPropTypes<typeof polylineGeometryProps>
export type VcGeometryPolylineProps = {
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
   * Triggers before the VcPoint is loaded
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcPoint is successfully loaded
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcPoint is destroyed
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}
