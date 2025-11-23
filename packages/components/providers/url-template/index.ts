import type {
  AnyObject,
  ProjectionTransforms,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcReadyObject,
  VcRectangle
} from '@vue-cesium/utils/types'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-08 14:36:51
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\url-template\index.ts
 */
import type { PropType } from 'vue'
import { useProviders } from '@vue-cesium/composables'
import {
  credit,
  ellipsoid,
  enablePickFeatures,
  getFeatureInfoFormats,
  maximumLevel,
  minimumLevel,
  projectionTransforms,
  rectangle,
  subdomains,
  tileHeight,
  tileWidth,
  tilingScheme,
  url
} from '@vue-cesium/utils/cesium-props'
import { providerEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

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

export interface VcImageryProviderUrltemplateProps {
  /**
   * The URL template to use to request tiles.
   */
  url: string | Cesium.Resource
  /**
   * The URL template to use to pick features. If this property is not specified, UrlTemplateImageryProvider#pickFeatures will immediately returned undefined, indicating no features picked.
   */
  pickFeaturesUrl?: string | Cesium.Resource
  /**
   * Gets the URL scheme zero padding for each tile coordinate. The format is '000' where each coordinate will be padded on the left with zeros to match the width of the passed string of zeros. e.g. Setting: urlSchemeZeroPadding : { '{x}' : '0000'} will cause an 'x' value of 12 to return the string '0012' for {x} in the generated URL.
   */
  urlSchemeZeroPadding?: AnyObject
  /**
   * The subdomains to use for the {s} placeholder in the URL template. If this parameter is a single string, each character in the string is a subdomain. If it is an array, each element in the array is a subdomain.
   */
  subdomains?: string | string[]
  /**
   * A credit for the data source, which is displayed on the canvas.
   * Default value: ''
   */
  credit?: Cesium.Credit | string
  /**
   * The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems.
   * Default value: 0
   */
  minimumLevel?: number
  /**
   * The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit.
   */
  maximumLevel?: number
  /**
   * The VcRectangle, covered by the image.
   */
  rectangle?: VcRectangle
  /**
   * The tiling scheme specifying how the ellipsoidal surface is broken into tiles. If this parameter is not provided, a WebMercatorTilingScheme is used.
   */
  tilingScheme?: Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme
  /**
   * The ellipsoid. If the tilingScheme is specified, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * Pixel width of image tiles.
   * Default value: 256
   */
  tileWidth?: number
  /**
   * Pixel height of image tiles.
   * Default value: 256
   */
  tileHeight?: number
  /**
   * true if the images provided by this imagery provider include an alpha channel; otherwise, false. If this property is false, an alpha channel, if present, will be ignored. If this property is true, any images without an alpha channel will be treated as if their alpha is 1.0 everywhere. When this property is false, memory usage and texture upload time are potentially reduced.
   * Default value: true
   */
  hasAlphaChannel?: boolean
  /**
   * The formats in which to get feature information at a specific location when UrlTemplateImageryProvider#pickFeatures is invoked. If this parameter is not specified, feature picking is disabled.
   */
  getFeatureInfoFormats?: Array<Cesium.GetFeatureInfoFormat>
  /**
   * If true, UrlTemplateImageryProvider#pickFeatures will request the pickFeaturesUrl and attempt to interpret the features included in the response. If false, UrlTemplateImageryProvider#pickFeatures will immediately return undefined (indicating no pickable features) without communicating with the server. Set this property to false if you know your data source does not support picking features or if you don't want this provider's features to be pickable. Note that this can be dynamically overridden by modifying the UriTemplateImageryProvider#enablePickFeatures property.
   * Default value: true
   */
  enablePickFeatures?: boolean
  /**
   * Allow to replace custom keywords in the URL template. The object must have strings as keys and functions as values.
   */
  customTags?: AnyObject
  /**
   * Specify the projection transformation parameters.
   * Default value: false
   */
  projectionTransforms?: ProjectionTransforms
  /**
   * Triggers before the VcImageryProviderUrltemplate is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcImageryProviderUrltemplate is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcImageryProviderUrltemplate is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the imagery provider encounters an asynchronous error.
   */
  onErrorEvent?: (evt: Cesium.TileProviderError) => void
  /**
   * Triggers when the provider is ready for use.
   */
  onReadyPromise?: (evt: boolean, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => void
}

export type VcImageryProviderUrltemplateRef = VcComponentPublicInstance<VcImageryProviderUrltemplateProps>
