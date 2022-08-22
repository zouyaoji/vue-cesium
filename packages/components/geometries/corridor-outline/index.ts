/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 10:35:54
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\corridor-outline\index.ts
 */
import { VcCartesian3Array, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { positions, width, ellipsoid, granularity, height, extrudedHeight, cornerType } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const corridorOutlineGeometryProps = {
  ...positions,
  ...width,
  ...ellipsoid,
  ...granularity,
  ...height,
  ...extrudedHeight,
  ...cornerType
}
export default defineComponent({
  name: 'VcGeometryCorridorOutline',
  props: corridorOutlineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CorridorOutlineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryCorridorOutlineProps = {
  /**
   * An array of positions that define the center of the corridor.
   */
  positions: VcCartesian3Array
  /**
   * The distance between the edges of the corridor in meters.
   */
  width: number
  /**
   * The ellipsoid to be used as a reference.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer.
   */
  granularity?: number
  /**
   * The distance in meters between the ellipsoid surface and the positions.
   */
  height?: number
  /**
   * The distance in meters between the ellipsoid surface and the extruded face.
   */
  extrudedHeight?: number
  /**
   * Determines the style of the corners.
   */
  cornerType?: Cesium.CornerType | number
  /**
   * Triggers before the VcGeometryCorridorOutline is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometryCorridorOutline is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGeometryCorridorOutline is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometryCorridorOutlineRef = VcComponentPublicInstance<VcGeometryCorridorOutlineProps>
