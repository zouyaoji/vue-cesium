/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 15:36:29
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\point\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { ExtractPropTypes } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  pixelSize,
  heightReference,
  color,
  outlineColor,
  outlineWidth,
  scaleByDistance,
  translucencyByDistance,
  distanceDisplayCondition,
  disableDepthTestDistance
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'
export const pointGraphicsProps = {
  ...show,
  ...pixelSize,
  ...heightReference,
  ...color,
  ...outlineColor,
  ...outlineWidth,
  ...scaleByDistance,
  ...translucencyByDistance,
  ...distanceDisplayCondition,
  ...disableDepthTestDistance
}
export default defineComponent({
  name: 'VcGraphicsPoint',
  props: pointGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PointGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGraphicsPointProps = ExtractPropTypes<typeof pointGraphicsProps>
