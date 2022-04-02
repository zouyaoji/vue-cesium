/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-30 10:19:25
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\box-outline\index.ts
 */
import { VcComponentInternalInstance, VcComponentPublicInstance, VcPosition, VcReadyObject } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { dimensions } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const boxOutlineGeometryProps = {
  ...dimensions
}
export default defineComponent({
  name: 'VcGeometryBoxOutline',
  props: boxOutlineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'BoxOutlineGeometry'
    const geometriesState = useGeometries(props, ctx, instance)

    // methods
    instance.createCesiumObject = async () => {
      const options: any = geometriesState?.transformProps(props)
      return Cesium.BoxOutlineGeometry.fromDimensions(options)
    }

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryBoxOutlineProps = {
  /**
   * The width, depth, and height of the box stored in the x, y, and z coordinates of the Cartesian3, respectively.
   */
  dimensions: VcPosition
  /**
   * Triggers before the VcGeometryBoxOutline is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcGeometryBoxOutline is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcGeometryBoxOutline is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export type VcGeometryBoxOutlineRef = VcComponentPublicInstance<VcGeometryBoxOutlineProps>
