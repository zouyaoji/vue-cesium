/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-16 14:32:48
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitive-collections\polyline\index.ts
 */
import type { ExtractPropTypes } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { usePrimitiveCollectionItems } from '@vue-cesium/composables'
import { distanceDisplayCondition, id, loop, material, positions, show, width, enableMouseEvent } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { primitiveCollectionEmits } from '@vue-cesium/utils/emits'

export const polylineProps = {
  ...distanceDisplayCondition,
  ...id,
  ...loop,
  ...material,
  ...positions,
  ...show,
  ...width,
  ...enableMouseEvent
}
export default defineComponent({
  name: 'VcPolyline',
  props: polylineProps,
  emits: primitiveCollectionEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Polyline'
    usePrimitiveCollectionItems(props, ctx, instance)

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcPolylineProps = ExtractPropTypes<typeof polylineProps>
