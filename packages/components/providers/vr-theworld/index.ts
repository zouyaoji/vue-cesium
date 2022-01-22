/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-16 00:32:07
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\vr-theworld\index.ts
 */
import type { ExtractPropTypes, PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { ellipsoid, credit } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const vrTheworldImageryProviderProps = {
  url: {
    type: [String, Object] as PropType<string | Promise<string> | Promise<Cesium.Resource> | Cesium.Resource>,
    default: 'https://www.vr-theworld.com/vr-theworld/tiles1.0.0/73/'
  },
  ...ellipsoid,
  ...credit
}
export default defineComponent({
  name: 'VcTerrainProviderVrTheworld',
  props: vrTheworldImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VRTheWorldTerrainProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcTerrainProviderVrTheworldProps = ExtractPropTypes<typeof vrTheworldImageryProviderProps>
