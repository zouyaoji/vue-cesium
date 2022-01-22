/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-19 14:57:52
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\billboard\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { ExtractPropTypes } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  image,
  scale,
  pixelOffset,
  eyeOffset,
  horizontalOrigin,
  verticalOrigin,
  heightReference,
  color,
  rotation,
  alignedAxis,
  sizeInMeters,
  width,
  height,
  scaleByDistance,
  translucencyByDistance,
  pixelOffsetScaleByDistance,
  imageSubRegion,
  distanceDisplayCondition,
  disableDepthTestDistance
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'
export const billboarGraphicsProps = {
  ...image,
  ...scale,
  ...pixelOffset,
  ...eyeOffset,
  ...horizontalOrigin,
  ...verticalOrigin,
  ...heightReference,
  ...color,
  ...rotation,
  ...alignedAxis,
  ...sizeInMeters,
  ...width,
  ...height,
  ...scaleByDistance,
  ...translucencyByDistance,
  ...pixelOffsetScaleByDistance,
  ...disableDepthTestDistance,
  ...show,
  ...distanceDisplayCondition,
  ...imageSubRegion
}
export default defineComponent({
  name: 'VcGraphicsBillboard',
  props: billboarGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'BillboardGraphics'
    useGraphics(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGraphicsBillboardProps = ExtractPropTypes<typeof billboarGraphicsProps>
