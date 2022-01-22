/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 15:40:07
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\polyline\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { ExtractPropTypes } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  positions,
  width,
  granularity,
  material,
  depthFailMaterial,
  arcType,
  clampToGround,
  shadows,
  distanceDisplayCondition,
  classificationType,
  zIndex
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'
export const polylineGraphicsProps = {
  ...show,
  ...positions,
  ...width,
  ...granularity,
  ...material,
  ...depthFailMaterial,
  ...arcType,
  ...clampToGround,
  ...shadows,
  ...distanceDisplayCondition,
  ...classificationType,
  ...zIndex
}
export default defineComponent({
  name: 'VcGraphicsPolyline',
  props: polylineGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PolylineGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})
export type VcGraphicsPolylineProps = ExtractPropTypes<typeof polylineGraphicsProps>
