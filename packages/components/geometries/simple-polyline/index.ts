/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 14:16:50
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\simple-polyline\index.ts
 */
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import type { ExtractPropTypes } from 'vue'
import { useGeometries } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { positions, colors, arcType, granularity, ellipsoid } from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
export const simplePolylineGeometryProps = {
  ...positions,
  ...colors,
  colorsPerVertex: {
    type: Boolean,
    default: false
  },
  ...arcType,
  ...granularity,
  ...ellipsoid
}
export default defineComponent({
  name: 'VcGeometrySimplePolyline',
  props: simplePolylineGeometryProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'SimplePolylineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometrySimplePolylineProps = ExtractPropTypes<typeof simplePolylineGeometryProps>
