/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-08 14:46:48
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\wms\index.ts
 */
import type { PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { AnyObject, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject, VcRectangle } from '@vue-cesium/utils/types'
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

export type VcImageryProviderWmsProps = {
  /**
   * The URL of the WMS service. The URL supports the same keywords as the UrlTemplateImageryProvider.
   */
  url: string | Cesium.Resource
  /**
   * The layers to include, separated by commas.
   */
  layers: string
  /**
   * Additional parameters to pass to the WMS server in the GetMap URL.
   */
  parameters?: AnyObject
  /**
   * Additional parameters to pass to the WMS server in the GetFeatureInfo URL.
   */
  getFeatureInfoParameters?: AnyObject
  /**
   * If true, WebMapServiceImageryProvider#pickFeatures will invoke the GetFeatureInfo operation on the WMS server and return the features included in the response. If false, WebMapServiceImageryProvider#pickFeatures will immediately return undefined (indicating no pickable features) without communicating with the server. Set this property to false if you know your WMS server does not support GetFeatureInfo or if you don't want this provider's features to be pickable. Note that this can be dynamically overridden by modifying the WebMapServiceImageryProvider#enablePickFeatures property.
   * Default value: true
   */
  enablePickFeatures?: boolean
  /**
   * The formats in which to try WMS GetFeatureInfo requests.
   */
  getFeatureInfoFormats?: Array<Cesium.GetFeatureInfoFormat>
  /**
   * The rectangle, in radians, covered by the image.
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
   * The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems.
   */
  minimumLevel?: number
  /**
   * The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit.
   */
  maximumLevel?: number
  /**
   * CRS specification, for use with WMS specification >= 1.3.0.
   */
  crs?: string
  /**
   * SRS specification, for use with WMS specification 1.1.0 or 1.1.1
   */
  srs?: string
  /**
   * A credit for the data source, which is displayed on the canvas.
   */
  credit?: Cesium.Credit | string
  /**
   * The subdomains to use for the {s} placeholder in the URL template. If this parameter is a single string, each character in the string is a subdomain. If it is an array, each element in the array is a subdomain.
   */
  subdomains?: string | string[]
  /**
   * A Clock instance that is used when determining the value for the time dimension. Required when `times` is specified.
   */
  clock?: Cesium.Clock
  /**
   * TimeIntervalCollection with its data property being an object containing time dynamic dimension and their values.
   */
  times?: Cesium.TimeIntervalCollection
  /**
   * The getFeatureInfo URL of the WMS service. If the property is not defined then we use the property value of url.
   */
  getFeatureInfoUrl?: string | Cesium.Resource
  /**
   * Triggers before the VcImageryProviderWms is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcImageryProviderWms is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcImageryProviderWms is destroyed.
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

export type VcImageryProviderWmsRef = VcComponentPublicInstance<VcImageryProviderWmsProps>
