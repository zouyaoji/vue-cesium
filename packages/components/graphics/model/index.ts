/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 15:25:32
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\model\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { ExtractPropTypes } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import {
  show,
  uri,
  scale,
  minimumPixelSize,
  maximumScale,
  incrementallyLoadTextures,
  runAnimations,
  clampAnimations,
  shadows,
  heightReference,
  silhouetteColor,
  silhouetteSize,
  color,
  colorBlendMode,
  colorBlendAmount,
  imageBasedLightingFactor,
  lightColor,
  distanceDisplayCondition,
  nodeTransformations,
  articulations,
  clippingPlanes
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'
export const modelGraphicsProps = {
  ...show,
  ...uri,
  ...scale,
  ...minimumPixelSize,
  ...maximumScale,
  ...incrementallyLoadTextures,
  ...runAnimations,
  ...clampAnimations,
  ...shadows,
  ...heightReference,
  ...silhouetteColor,
  ...silhouetteSize,
  ...color,
  ...colorBlendMode,
  ...colorBlendAmount,
  ...imageBasedLightingFactor,
  ...lightColor,
  ...distanceDisplayCondition,
  ...nodeTransformations,
  ...articulations,
  ...clippingPlanes
}
export default defineComponent({
  name: 'VcGraphicsModel',
  props: modelGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'ModelGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGraphicsModelProps = ExtractPropTypes<typeof modelGraphicsProps>
