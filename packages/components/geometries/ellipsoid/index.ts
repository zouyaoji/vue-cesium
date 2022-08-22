/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 10:37:27
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\ellipsoid\index.ts
 */
import { VcComponentInternalInstance, VcComponentPublicInstance, VcPosition, VcReadyObject } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import {
  radii,
  innerRadii,
  minimumClock,
  maximumClock,
  minimumCone,
  maximumCone,
  stackPartitions,
  slicePartitions,
  vertexFormat
} from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const ellipsoidGeometryProps = {
  ...radii,
  ...innerRadii,
  ...minimumClock,
  ...maximumClock,
  ...minimumCone,
  ...maximumCone,
  ...stackPartitions,
  ...slicePartitions,
  ...vertexFormat
}
export default defineComponent({
  name: 'VcGeometryEllipsoid',
  props: ellipsoidGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'EllipsoidGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryEllipsoidProps = {
  /**
   * The radii of the ellipsoid in the x, y, and z directions.
   */
  radii?: VcPosition
  /**
   * The inner radii of the ellipsoid in the x, y, and z directions.
   */
  innerRadii?: VcPosition
  /**
   * The minimum angle lying in the xy-plane measured from the positive x-axis and toward the positive y-axis.
   * Default value: 0.0
   */
  minimumClock?: number
  /**
   * The maximum angle lying in the xy-plane measured from the positive x-axis and toward the positive y-axis.
   * Default value: 2*PI
   */
  maximumClock?: number
  /**
   * The minimum angle measured from the positive z-axis and toward the negative z-axis.
   * Default value: 0.0
   */
  minimumCone?: number
  /**
   * The maximum angle measured from the positive z-axis and toward the negative z-axis.
   * Default value: PI
   */
  maximumCone?: number
  /**
   * The number of times to partition the ellipsoid into stacks.
   * Default value: 64
   */
  stackPartitions?: number
  /**
   * The number of times to partition the ellipsoid into radial slices.
   * Default value: 64
   */
  slicePartitions?: number
  /**
   * The vertex attributes to be computed.
   */
  vertexFormat?: Cesium.VertexFormat
  /**
   * Triggers before the VcGeometryEllipsoid is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometryEllipsoid is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGeometryEllipsoid is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometryEllipsoidRef = VcComponentPublicInstance<VcGeometryEllipsoidProps>
