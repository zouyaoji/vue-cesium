/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 11:02:18
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\box\index.ts
 */
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import type { ExtractPropTypes } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { dimensions, vertexFormat } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const boxGeometryProps = {
  ...dimensions,
  ...vertexFormat
}
export default defineComponent({
  name: 'VcGeometryBox',
  props: boxGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'BoxGeometry'
    const geometriesState = useGeometries(props, ctx, instance)

    // methods
    instance.createCesiumObject = async () => {
      const options: any = geometriesState?.transformProps(props)
      return Cesium.BoxGeometry.fromDimensions(options)
    }

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcGeometryBoxProps = ExtractPropTypes<typeof boxGeometryProps>
