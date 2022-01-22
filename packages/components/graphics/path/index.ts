/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-14 15:30:36
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\graphics\path\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { ExtractPropTypes } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useGraphics } from '@vue-cesium/composables'
import { show, width, material, distanceDisplayCondition } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'
export const pathGraphicsProps = {
  ...show,
  leadTime: [Number, Object, Function],
  trailTime: [Number, Object, Function],
  ...width,
  resolution: {
    type: [Number, Object, Function],
    default: 60
  },
  ...material,
  ...distanceDisplayCondition
}
export default defineComponent({
  name: 'VcGraphicsPath',
  props: pathGraphicsProps,
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'PathGraphics'
    useGraphics(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcGraphicsPathProps = ExtractPropTypes<typeof pathGraphicsProps>
