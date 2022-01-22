/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-15 23:24:28
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\single-tile\index.ts
 */
import type { ExtractPropTypes } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { url, rectangle, credit, ellipsoid } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const singletileImageryProviderProps = {
  ...url,
  ...rectangle,
  ...credit,
  ...ellipsoid
}
export default defineComponent({
  name: 'VcImageryProviderSingletile',
  props: singletileImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'SingleTileImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcImageryProviderSingletileProps = ExtractPropTypes<typeof singletileImageryProviderProps>
