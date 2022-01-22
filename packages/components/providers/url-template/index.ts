/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-16 00:28:41
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\url-template\index.ts
 */
import type { ExtractPropTypes, PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import {
  url,
  subdomains,
  credit,
  minimumLevel,
  maximumLevel,
  rectangle,
  tilingScheme,
  ellipsoid,
  tileWidth,
  tileHeight,
  getFeatureInfoFormats,
  enablePickFeatures,
  projectionTransforms
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const urltemplateImageryProviderProps = {
  ...url,
  pickFeaturesUrl: [String, Object] as PropType<string | Cesium.Resource>,
  urlSchemeZeroPadding: Object,
  ...subdomains,
  ...credit,
  ...minimumLevel,
  ...maximumLevel,
  ...rectangle,
  ...tilingScheme,
  ...ellipsoid,
  ...tileWidth,
  ...tileHeight,
  hasAlphaChannel: {
    type: Boolean,
    default: true
  },
  ...getFeatureInfoFormats,
  ...enablePickFeatures,
  customTags: Object,
  ...projectionTransforms
}
export default defineComponent({
  name: 'VcImageryProviderUrltemplate',
  props: urltemplateImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'UrlTemplateImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcImageryProviderUrltemplateProps = ExtractPropTypes<typeof urltemplateImageryProviderProps>
