/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-15 11:00:14
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\bingmaps\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { ExtractPropTypes, PropType } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { ellipsoid, tileDiscardPolicy } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const bingImageryProviderProps = {
  url: {
    type: [String, Object] as PropType<string | Cesium.Resource>,
    default: 'https://dev.virtualearth.net'
  },
  bmKey: String,
  tileProtocol: String,
  mapStyle: {
    type: String as PropType<string | Cesium.BingMapsStyle>,
    default: 'Aerial'
  },
  culture: {
    type: String,
    default: ''
  },
  ...ellipsoid,
  ...tileDiscardPolicy
}
export default defineComponent({
  name: 'VcImageryProviderBing',
  props: bingImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'BingMapsImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcImageryProviderBingProps = ExtractPropTypes<typeof bingImageryProviderProps>
