/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-08 14:54:09
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\wmts\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { AnyObject, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject, VcRectangle } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import {
  url,
  format,
  clock,
  times,
  tileWidth,
  tileHeight,
  tilingScheme,
  rectangle,
  minimumLevel,
  maximumLevel,
  ellipsoid,
  credit,
  subdomains
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const wmtsImageryProviderProps = {
  ...url,
  ...format,
  layer: {
    type: String,
    required: true
  },
  wmtsStyle: {
    type: String,
    required: true
  },
  tileMatrixSetID: {
    type: String,
    required: true
  },
  tileMatrixLabels: Array,
  ...clock,
  ...times,
  dimensions: Object,
  ...tileWidth,
  ...tileHeight,
  ...tilingScheme,
  ...rectangle,
  ...minimumLevel,
  ...maximumLevel,
  ...ellipsoid,
  ...credit,
  ...subdomains
}
export default defineComponent({
  name: 'VcImageryProviderWmts',
  props: wmtsImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'WebMapTileServiceImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcImageryProviderWmtsProps = {
  /**
   * The base URL for the WMTS GetTile operation (for KVP-encoded requests) or the tile-URL template (for RESTful requests). The tile-URL template should contain the following variables: {style}, {TileMatrixSet}, {TileMatrix}, {TileRow}, {TileCol}. The first two are optional if actual values are hardcoded or not required by the server. The {s} keyword may be used to specify subdomains.
   */
  url: string | Cesium.Resource
  /**
   * The MIME type for images to retrieve from the server.
   * Default value: 'image/jpeg'
   */
  format?: string
  /**
   * The layer name for WMTS requests.
   */
  layer: string
  /**
   * The style name for WMTS requests.
   */
  wmtsStyle: string
  /**
   * The identifier of the TileMatrixSet to use for WMTS requests.
   */
  tileMatrixSetID: string
  /**
   * A list of identifiers in the TileMatrix to use for WMTS requests, one per TileMatrix level.
   */
  tileMatrixLabels: Array<any>
  /**
   * A Clock instance that is used when determining the value for the time dimension. Required when `times` is specified.
   */
  clock?: Cesium.Clock
  /**
   * TimeIntervalCollection with its data property being an object containing time dynamic dimension and their values.
   */
  times?: Cesium.TimeIntervalCollection
  /**
   * A object containing static dimensions and their values.
   */
  dimensions?: AnyObject
  /**
   * The tile width in pixels.
   * Default value: 256
   */
  tileWidth?: number
  /**
   * The tile height in pixels.
   * Default value: 256
   */
  tileHeight?: number
  /**
   * The tiling scheme corresponding to the organization of the tiles in the TileMatrixSet.
   */
  tilingScheme?: Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme
  /**
   * The rectangle covered by the layer.
   */
  rectangle?: VcRectangle
  /**
   * The minimum level-of-detail supported by the imagery provider.
   */
  minimumLevel?: number
  /**
   * The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit.
   */
  maximumLevel?: number
  /**
   * The ellipsoid. If not specified, the WGS84 ellipsoid is used.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * A credit for the data source, which is displayed on the canvas.
   */
  credit?: Cesium.Credit | string
  /**
   * The subdomains to use for the {s} placeholder in the URL template. If this parameter is a single string, each character in the string is a subdomain. If it is an array, each element in the array is a subdomain.
   */
  subdomains?: string | string[]
  /**
   * Triggers before the VcImageryProviderWmts is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcImageryProviderWmts is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcImageryProviderWmts is destroyed.
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

export type VcImageryProviderWmtsRef = VcComponentPublicInstance<VcImageryProviderWmtsProps>
