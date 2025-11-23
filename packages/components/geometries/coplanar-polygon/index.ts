/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 10:34:56
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\coplanar-polygon\index.ts
 */
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcPolygonHierarchy, VcReadyObject } from '@vue-cesium/utils/types'
import { useGeometries } from '@vue-cesium/composables'
import { ellipsoid, polygonHierarchy, stRotation, vertexFormat } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

export const polygonCoplanarProps = {
  ...polygonHierarchy,
  ...ellipsoid,
  ...vertexFormat,
  ...stRotation
}
export default defineComponent({
  name: 'VcGeometryPolygonCoplanar',
  props: polygonCoplanarProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CoplanarPolygonGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export interface VcGeometryPolygonCoplanarProps {
  /**
   * A polygon hierarchy that can include holes.
   */
  polygonHierarchy: VcPolygonHierarchy
  /**
   * The ellipsoid to be used as a reference.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * The vertex attributes to be computed.
   */
  vertexFormat?: Cesium.VertexFormat
  /**
   * The rotation of the texture coordinates, in radians. A positive rotation is counter-clockwise.
   * Default value: 0.0
   */
  stRotation?: number
  /**
   * Triggers before the VcGeometryPolygonCoplanar is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometryPolygonCoplanar is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcGeometryPolygonCoplanar is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometryPolygonCoplanarRef = VcComponentPublicInstance<VcGeometryPolygonCoplanarProps>
