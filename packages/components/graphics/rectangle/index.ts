/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 15:43:16
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\rectangle\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { ExtractPropTypes } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  coordinates,
  height,
  heightReference,
  extrudedHeight,
  extrudedHeightReference,
  rotation,
  stRotation,
  granularity,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  shadows,
  distanceDisplayCondition,
  classificationType,
  zIndex
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'

export const rectangleGraphicsProps = {
  ...show,
  ...coordinates,
  ...height,
  ...heightReference,
  ...extrudedHeight,
  ...extrudedHeightReference,
  ...rotation,
  ...stRotation,
  ...granularity,
  ...fill,
  ...material,
  ...outline,
  ...outlineColor,
  ...outlineWidth,
  ...shadows,
  ...distanceDisplayCondition,
  ...classificationType,
  ...zIndex
}
export default defineComponent({
  name: 'VcGraphicsRectangle',
  props: rectangleGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'RectangleGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGraphicsRectangleProps = ExtractPropTypes<typeof rectangleGraphicsProps>
