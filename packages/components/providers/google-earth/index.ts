/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-15 21:54:20
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\google-earth\index.ts
 */
import type { ExtractPropTypes, PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { url, ellipsoid, tileDiscardPolicy, credit } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const googleImageryProviderProps = {
  ...url,
  ...ellipsoid,
  ...tileDiscardPolicy,
  ...credit,
  metadata: Object as PropType<Cesium.GoogleEarthEnterpriseMetadata>
}
export default defineComponent({
  name: 'VcImageryProviderGoogle',
  props: googleImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'GoogleEarthEnterpriseImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcImageryProviderGoogleProps = ExtractPropTypes<typeof googleImageryProviderProps>
