/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 10:36:17
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\cylinder\index.ts
 */
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { useGeometries } from '@vue-cesium/composables'
import { bottomRadius, length, slices, topRadius, vertexFormat } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

export const cylinderGeometryProps = {
  ...length,
  ...topRadius,
  ...bottomRadius,
  ...slices,
  ...vertexFormat
}
export default defineComponent({
  name: 'VcGeometryCylinder',
  props: cylinderGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CylinderGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export interface VcGeometryCylinderProps {
  /**
   * The length of the cylinder.
   */
  length: number
  /**
   * The radius of the top of the cylinder.
   */
  topRadius: number
  /**
   * The radius of the bottom of the cylinder.
   */
  bottomRadius: number
  /**
   * The number of edges around the perimeter of the cylinder.
   * Default value: 128
   */
  slices?: number
  /**
   * The vertex attributes to be computed.
   */
  vertexFormat?: Cesium.VertexFormat
  /**
   * Triggers before the VcGeometryCylinder is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometryCylinder is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGeometryCylinder is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometryCylinderRef = VcComponentPublicInstance<VcGeometryCylinderProps>
