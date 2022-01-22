/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 15:23:46
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\label\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { ExtractPropTypes } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  text,
  font,
  labelStyle,
  scale,
  showBackground,
  backgroundColor,
  backgroundPadding,
  pixelOffset,
  eyeOffset,
  horizontalOrigin,
  verticalOrigin,
  heightReference,
  fillColor,
  outlineColor,
  outlineWidth,
  translucencyByDistance,
  pixelOffsetScaleByDistance,
  scaleByDistance,
  distanceDisplayCondition,
  disableDepthTestDistance
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'
export const labelGraphicsProps = {
  ...show,
  ...text,
  ...font,
  ...labelStyle,
  ...scale,
  ...showBackground,
  ...backgroundColor,
  ...backgroundPadding,
  ...pixelOffset,
  ...eyeOffset,
  ...horizontalOrigin,
  ...verticalOrigin,
  ...heightReference,
  ...fillColor,
  ...outlineColor,
  ...outlineWidth,
  ...translucencyByDistance,
  ...pixelOffsetScaleByDistance,
  ...scaleByDistance,
  ...distanceDisplayCondition,
  ...disableDepthTestDistance
}
export default defineComponent({
  name: 'VcGraphicsLabel',
  props: labelGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'LabelGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGraphicsLabelProps = ExtractPropTypes<typeof labelGraphicsProps>
