/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-15 10:55:34
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\arcgis\imagery.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { ExtractPropTypes, PropType } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import {
  token,
  tileDiscardPolicy,
  layers,
  enablePickFeatures,
  rectangle,
  tilingScheme,
  ellipsoid,
  credit,
  tileWidth,
  tileHeight,
  maximumLevel
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'
export const arcgisImageryProviderProps = {
  url: {
    type: [String, Object] as PropType<string | Cesium.Resource>,
    default: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
  },
  ...token,
  ...tileDiscardPolicy,
  usePreCachedTilesIfAvailable: {
    type: Boolean,
    default: true
  },
  ...layers,
  ...enablePickFeatures,
  ...rectangle,
  ...tilingScheme,
  ...ellipsoid,
  ...credit,
  ...tileWidth,
  ...tileHeight,
  ...maximumLevel
}
export default defineComponent({
  name: 'VcImageryProviderArcgis',
  props: arcgisImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'ArcGisMapServerImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcImageryProviderArcgisProps = ExtractPropTypes<typeof arcgisImageryProviderProps>
