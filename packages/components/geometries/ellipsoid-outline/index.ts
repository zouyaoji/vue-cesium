/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 13:31:31
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometries\ellipsoid-outline\index.ts
 */
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import type { ExtractPropTypes } from 'vue'
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
  subdivisions
} from '@vue-cesium/utils/cesium-props'
import { commonEmits } from '@vue-cesium/utils/emits'
const ellipsoidOutlineProps = {
  ...radii,
  ...innerRadii,
  ...minimumClock,
  ...maximumClock,
  ...minimumCone,
  ...maximumCone,
  ...stackPartitions,
  ...slicePartitions,
  ...subdivisions
}
export default defineComponent({
  name: 'VcGeometryEllipsoidOutline',
  props: ellipsoidOutlineProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'EllipsoidOutlineGeometry'
    useGeometries(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGeometryEllipsoidOutlineProps = ExtractPropTypes<typeof ellipsoidOutlineProps>
