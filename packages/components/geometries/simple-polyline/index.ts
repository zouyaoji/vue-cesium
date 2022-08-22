/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 13:16:28
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\simple-polyline\index.ts
 */
import { VcCartesian3Array, VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { positions, colors, arcType, granularity, ellipsoid } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const simplePolylineGeometryProps = {
  ...positions,
  ...colors,
  colorsPerVertex: {
    type: Boolean,
    default: false
  },
  ...arcType,
  ...granularity,
  ...ellipsoid
}
export default defineComponent({
  name: 'VcGeometrySimplePolyline',
  props: simplePolylineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'SimplePolylineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometrySimplePolylineProps = {
  /**
   * An array of VcCartesian3Array defining the positions in the polyline as a line strip.
   */
  positions: VcCartesian3Array
  /**
   * An Array of VcColor defining the per vertex or per segment colors.
   */
  colors?: Array<VcColor>
  /**
   * A boolean that determines whether the colors will be flat across each segment of the line or interpolated across the vertices.
   * Default value: false
   */
  colorsPerVertex?: boolean
  /**
   * The type of line the polyline segments must follow.
   */
  arcType?: number
  /**
   * The distance, in radians, between each latitude and longitude if options.arcType is not ArcType.NONE. Determines the number of positions in the buffer.
   */
  granularity?: number
  /**
   * The ellipsoid to be used as a reference.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * Triggers before the VcGeometrySimplePolyline is loaded
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometrySimplePolyline is successfully loaded
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGeometrySimplePolyline is destroyed
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometrySimplePolylineRef = VcComponentPublicInstance<VcGeometrySimplePolylineProps>
