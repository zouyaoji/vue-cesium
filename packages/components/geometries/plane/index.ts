/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 11:02:31
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\plane\index.ts
 */
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { useGeometries } from '@vue-cesium/composables'
import { vertexFormat } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

export const planeGeometryProps = {
  ...vertexFormat
}
export default defineComponent({
  name: 'VcGeometryPlane',
  props: planeGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PlaneGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export interface VcGeometryPlaneProps {
  /**
   * The vertex attributes to be computed.
   */
  vertexFormat?: Cesium.VertexFormat
  /**
   * Triggers before the VcGeometryPlane is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometryPlane is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGeometryPlane is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometryPlaneRef = VcComponentPublicInstance<VcGeometryPlaneProps>
