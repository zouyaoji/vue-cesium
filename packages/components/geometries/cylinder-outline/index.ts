/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 10:36:33
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\cylinder-outline\index.ts
 */
import { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { length, topRadius, bottomRadius, slices, numberOfVerticalLines } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const cylinderOutlineGeometryProps = {
  ...length,
  ...topRadius,
  ...bottomRadius,
  ...slices,
  ...numberOfVerticalLines
}
export default defineComponent({
  name: 'VcGeometryCylinderOutline',
  props: cylinderOutlineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CylinderOutlineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryCylinderOutlineProps = {
  /**
   * The length of the cylinder.
   */
  length: number
  /**
   * The radius of the top of the cylinder.
   */
  topRadius: number
  /**
   * 	The radius of the bottom of the cylinder.
   */
  bottomRadius: number
  /**
   * The number of edges around the perimeter of the cylinder.
   * Default value: 128
   */
  slices?: number
  /**
   * Number of lines to draw between the top and bottom surfaces of the cylinder.
   *  Default value: 16
   */
  numberOfVerticalLines?: number
  /**
   * Triggers before the VcGeometryCylinderOutline is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometryCylinderOutline is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcGeometryCylinderOutline is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometryCylinderOutlineRef = VcComponentPublicInstance<VcGeometryCylinderOutlineProps>
