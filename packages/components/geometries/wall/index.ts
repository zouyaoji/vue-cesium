/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 13:24:28
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\wall\index.ts
 */
import { VcCartesian3Array, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { positions, granularity, maximumHeights, minimumHeights, ellipsoid, vertexFormat } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const wallGeometryProps = {
  ...positions,
  ...granularity,
  ...maximumHeights,
  ...minimumHeights,
  ...ellipsoid,
  ...vertexFormat
}
export default defineComponent({
  name: 'VcGeometryWall',
  props: wallGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'WallGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryWallProps = {
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
   * The vertex attributes to be computed.
   */
  vertexFormat?: Cesium.VertexFormat
  /**
   * Triggers before the VcGeometryWall is loaded
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometryWall is successfully loaded
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcGeometryWall is destroyed
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometryWallRef = VcComponentPublicInstance<VcGeometryWallProps>
