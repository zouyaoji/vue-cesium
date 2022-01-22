/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 15:12:42
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\cylinder\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { ExtractPropTypes } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  length,
  topRadius,
  bottomRadius,
  heightReference,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  numberOfVerticalLines,
  slices,
  shadows,
  distanceDisplayCondition
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'
export const cylinderGraphicsProps = {
  ...show,
  ...length,
  ...topRadius,
  ...bottomRadius,
  ...heightReference,
  ...fill,
  ...material,
  ...outline,
  ...outlineColor,
  ...outlineWidth,
  ...numberOfVerticalLines,
  ...slices,
  ...shadows,
  ...distanceDisplayCondition
}
export default defineComponent({
  name: 'VcGraphicsCylinder',
  props: cylinderGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CylinderGraphics'
    useGraphics(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGraphicsCylinderProps = ExtractPropTypes<typeof cylinderGraphicsProps>
