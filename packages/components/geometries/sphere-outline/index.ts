/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 13:21:07
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\sphere-outline\index.ts
 */
import { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { radius, stackPartitions, slicePartitions, subdivisions } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const sphereGeometryOutlineProps = {
  ...radius,
  ...stackPartitions,
  ...slicePartitions,
  ...subdivisions
}
export default defineComponent({
  name: 'VcGeometrySphereOutline',
  props: sphereGeometryOutlineProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'SphereOutlineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometrySphereOutlineProps = {
  /**
   * The radius of the sphere.
   */
  radius?: number
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
   * The number of points per line, determining the granularity of the curvature .
   * Default value: 128
   */
  subdivisions?: number
  /**
   * Triggers before the VcGeometrySphereOutline is loaded
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometrySphereOutline is successfully loaded
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcGeometrySphereOutline is destroyed
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometrySphereOutlineRef = VcComponentPublicInstance<VcGeometrySphereOutlineProps>
