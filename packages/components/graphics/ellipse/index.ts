/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 15:19:07
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\ellipse\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { ExtractPropTypes } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  distanceDisplayCondition,
  heightReference,
  extrudedHeightReference,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  numberOfVerticalLines,
  classificationType,
  zIndex,
  stRotation,
  shadows,
  semiMajorAxis,
  semiMinorAxis,
  height,
  extrudedHeight,
  rotation,
  granularity
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'
export const ellipseGraphicsProps = {
  ...show,
  ...semiMajorAxis,
  ...semiMinorAxis,
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
  ...numberOfVerticalLines,
  ...shadows,
  ...distanceDisplayCondition,
  ...classificationType,
  ...zIndex
}
export default defineComponent({
  name: 'VcGraphicsEllipse',
  props: ellipseGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'EllipseGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGraphicsEllipseProps = ExtractPropTypes<typeof ellipseGraphicsProps>
