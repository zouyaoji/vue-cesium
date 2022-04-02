/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 11:45:50
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\rectangle\index.ts
 */
import { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject, VcRectangle } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { rectangle, vertexFormat, ellipsoid, granularity, height, rotation, stRotation, extrudedHeight } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const rectangleGeometryProps = {
  ...rectangle,
  ...vertexFormat,
  ...ellipsoid,
  ...granularity,
  ...height,
  ...rotation,
  ...stRotation,
  ...extrudedHeight
}
export default defineComponent({
  name: 'VcGeometryRectangle',
  props: rectangleGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'RectangleGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryRectangleProps = {
  /**
   * A cartographic rectangle with north, south, east and west properties in radians.
   */
  rectangle: VcRectangle
  /**
   * The vertex attributes to be computed.
   */
  vertexFormat?: Cesium.VertexFormat
  /**
   * The ellipsoid on which the rectangle lies.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer.
   */
  granularity?: number
  /**
   * The distance in meters between the rectangle and the ellipsoid surface.
   */
  height?: number
  /**
   * The rotation of the rectangle, in radians. A positive rotation is counter-clockwise.
   * Default value: 0.0
   */
  rotation?: number
  /**
   * The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise.
   * Default value: 0.0
   */
  stRotation?: number
  /**
   * The distance in meters between the rectangle's extruded face and the ellipsoid surface.
   */
  extrudedHeight: number
  /**
   * Triggers before the VcGeometryRectangle is loaded
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometryRectangle is successfully loaded
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcGeometryRectangle is destroyed
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometryRectangleRef = VcComponentPublicInstance<VcGeometryRectangleProps>
