/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 10:32:22
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\circle-outline\index.ts
 */
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcPosition, VcReadyObject } from '@vue-cesium/utils/types'
import { useGeometries } from '@vue-cesium/composables'
import { center, ellipsoid, extrudedHeight, granularity, height, numberOfVerticalLines, radius } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

export const circleOutlineGeometryProps = {
  ...center,
  ...radius,
  ...ellipsoid,
  ...height,
  ...granularity,
  ...extrudedHeight,
  ...numberOfVerticalLines
}
export default defineComponent({
  name: 'VcGeometryCircleOutline',
  props: circleOutlineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CircleOutlineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export interface VcGeometryCircleOutlineProps {
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
   * The distance in meters between the circle's extruded face and the ellipsoid surface.
   */
  extrudedHeight?: number
  /**
   * Number of lines to draw between the top and bottom of an extruded circle.
   * Default value: 16
   */
  numberOfVerticalLines?: number
  /**
   * Triggers before the VcGeometryCircleOutline is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometryCircleOutline is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGeometryCircleOutline is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometryCircleOutlineRef = VcComponentPublicInstance<VcGeometryCircleOutlineProps>
