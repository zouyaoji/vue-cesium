/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 13:20:19
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\sphere\index.ts
 */
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { useGeometries } from '@vue-cesium/composables'
import { radius, slicePartitions, stackPartitions, vertexFormat } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

export const sphereGeometryProps = {
  ...radius,
  ...stackPartitions,
  ...slicePartitions,
  ...vertexFormat
}
export default defineComponent({
  name: 'VcGeometrySphere',
  props: sphereGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'SphereGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export interface VcGeometrySphereProps {
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
   * The vertex attributes to be computed.
   */
  vertexFormat?: Cesium.VertexFormat
  /**
   * Triggers before the VcGeometrySphere is loaded
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometrySphere is successfully loaded
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGeometrySphere is destroyed
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometrySphereRef = VcComponentPublicInstance<VcGeometrySphereProps>
