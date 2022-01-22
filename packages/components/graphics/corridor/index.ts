/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 15:10:57
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\corridor\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import type { ExtractPropTypes } from 'vue'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  positions,
  width,
  height,
  heightReference,
  extrudedHeight,
  extrudedHeightReference,
  cornerType,
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
const corridorGraphicsProps = {
  ...show,
  ...positions,
  ...width,
  ...height,
  ...heightReference,
  ...extrudedHeight,
  ...extrudedHeightReference,
  ...cornerType,
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
  name: 'VcGraphicsCorridor',
  props: corridorGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CorridorGraphics'
    useGraphics(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGraphicsCorridorProps = ExtractPropTypes<typeof corridorGraphicsProps>
