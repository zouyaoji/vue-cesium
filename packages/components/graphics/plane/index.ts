/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 15:34:32
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\plane\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { ExtractPropTypes } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { makeCartesian2 } from '@vue-cesium/utils/cesium-helpers'
import { useGraphics } from '@vue-cesium/composables'
import { show, fill, material, outline, outlineColor, outlineWidth, shadows, distanceDisplayCondition, plane } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'
export const planeGraphicsProps = {
  ...show,
  ...plane,
  // 和 BoxGraphics.dimensions 区分
  dimensions: {
    type: [Object, Array, Function],
    watcherOptions: {
      cesiumObjectBuilder: makeCartesian2
    }
  },
  ...fill,
  ...material,
  ...outline,
  ...outlineColor,
  ...outlineWidth,
  ...shadows,
  ...distanceDisplayCondition
}
export default defineComponent({
  name: 'VcGraphicsPlane',
  props: planeGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PlaneGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || 'v-if'))
  }
})

export type VcGraphicsPlaneProps = ExtractPropTypes<typeof planeGraphicsProps>
