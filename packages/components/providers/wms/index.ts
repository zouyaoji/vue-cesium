/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-16 00:39:55
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\wms\index.ts
 */
import type { ExtractPropTypes, PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import {
  url,
  layers,
  enablePickFeatures,
  getFeatureInfoFormats,
  rectangle,
  tilingScheme,
  ellipsoid,
  tileWidth,
  tileHeight,
  minimumLevel,
  maximumLevel,
  credit,
  subdomains,
  clock,
  times
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const wmsImageryProviderProps = {
  ...url,
  ...layers,
  parameters: Object,
  getFeatureInfoParameters: Object,
  ...enablePickFeatures,
  ...getFeatureInfoFormats,
  ...rectangle,
  ...tilingScheme,
  ...ellipsoid,
  ...tileWidth,
  ...tileHeight,
  ...minimumLevel,
  ...maximumLevel,
  crs: String,
  srs: String,
  ...credit,
  ...subdomains,
  ...clock,
  ...times,
  getFeatureInfoUrl: [String, Object] as PropType<string | Cesium.Resource>
}
export default defineComponent({
  name: 'VcImageryProviderWms',
  props: wmsImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'WebMapServiceImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcImageryProviderWmsProps = ExtractPropTypes<typeof wmsImageryProviderProps>
