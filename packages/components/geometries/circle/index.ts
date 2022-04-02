/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 13:28:51
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\circle\index.ts
 */
import { VcComponentInternalInstance, VcComponentPublicInstance, VcPosition, VcReadyObject } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { center, radius, ellipsoid, height, granularity, vertexFormat, extrudedHeight, stRotation } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const circleGeometryProps = {
  ...center,
  ...radius,
  ...ellipsoid,
  ...height,
  ...granularity,
  ...vertexFormat,
  ...extrudedHeight,
  ...stRotation
}
export default defineComponent({
  name: 'VcGeometryCircle',
  props: circleGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CircleGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryCircleProps = {
  /**
   * The circle's center point in the fixed frame.
   */
  center: VcPosition
  /**
   * The radius in meters.
   */
  radius?: number
  /**
   * The ellipsoid the circle will be on.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * The distance in meters between the circle and the ellipsoid surface.
   */
  height?: number
  /**
   * The angular distance between points on the circle in radians.
   */
  granularity?: number
  /**
   * The vertex attributes to be computed.
   */
  vertexFormat?: Cesium.VertexFormat
  /**
   * The distance in meters between the circle's extruded face and the ellipsoid surface.
   */
  extrudedHeight?: number
  /**
   * The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise.
   */
  stRotation?: number
  /**
   * Triggers before the VcCircleGeometry is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcCircleGeometry is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcCircleGeometry is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometryCircleRef = VcComponentPublicInstance<VcGeometryCircleProps>
