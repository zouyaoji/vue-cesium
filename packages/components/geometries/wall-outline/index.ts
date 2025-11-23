/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 13:25:35
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\wall-outline\index.ts
 */
import type { VcCartesian3Array, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { useGeometries } from '@vue-cesium/composables'
import { ellipsoid, granularity, maximumHeights, minimumHeights, positions } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

export const wallOutlineProps = {
  ...positions,
  ...granularity,
  ...maximumHeights,
  ...minimumHeights,
  ...ellipsoid
}
export default defineComponent({
  name: 'VcGeometryWallOutline',
  props: wallOutlineProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'WallOutlineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export interface VcGeometryWallOutlineProps {
  /**
   * An array of Cartesian objects, which are the points of the wall.
   */
  positions: VcCartesian3Array
  /**
   * The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer.
   */
  granularity?: number
  /**
   * An array parallel to positions that give the maximum height of the wall at positions. If undefined, the height of each position in used.
   */
  maximumHeights?: number[]
  /**
   * An array parallel to positions that give the minimum height of the wall at positions. If undefined, the height at each position is 0.0.
   */
  minimumHeights?: number[]
  /**
   * The ellipsoid for coordinate manipulation.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * Triggers before the VcGeometryWallOutline is loaded
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometryWallOutline is successfully loaded
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGeometryWallOutline is destroyed
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometryWallOutlineRef = VcComponentPublicInstance<VcGeometryWallOutlineProps>
