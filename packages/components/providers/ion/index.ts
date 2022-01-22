/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-15 22:00:39
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\ion\index.ts
 */
import type { ExtractPropTypes, PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { accessToken } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const ionImageryProviderProps = {}
export default defineComponent({
  name: 'VcImageryProviderIon',
  props: {
    assetId: Number,
    ...accessToken,
    server: [String, Object] as PropType<string | Cesium.Resource>
  },
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'IonImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcImageryProviderIonProps = ExtractPropTypes<typeof ionImageryProviderProps>
