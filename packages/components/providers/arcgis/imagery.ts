/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-02-18 17:34:41
 * @LastEditors: Weibo Cao
 * @Description:
 * @FilePath: \vue-cesium\packages\components\providers\arcgis\imagery.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { PropType } from 'vue'
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcImageryProvider, VcReadyObject, VcRectangle } from '@vue-cesium/utils/types'
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

// export type VcImageryProviderArcgisProps = ExtractPropTypes<typeof arcgisImageryProviderProps>
export type VcImageryProviderArcgisProps = {
  /**
   * The URL of the ArcGIS MapServer service.
   */
  url?: string | Cesium.Resource
  /**
   * The ArcGIS token used to authenticate with the ArcGIS MapServer service.
   */
  token?: string
  /**
   * The policy that determines if a tile is invalid and should be discarded. If this value is not specified, a default DiscardMissingTileImagePolicy is used for tiled map servers, and a NeverTileDiscardPolicy is used for non-tiled map servers. In the former case, we request tile 0,0 at the maximum tile level and check pixels (0,0), (200,20), (20,200), (80,110), and (160, 130). If all of these pixels are transparent, the discard check is disabled and no tiles are discarded. If any of them have a non-transparent color, any tile that has the same values in these pixel locations is discarded. The end result of these defaults should be correct tile discarding for a standard ArcGIS Server. To ensure that no tiles are discarded, construct and pass a NeverTileDiscardPolicy for this parameter.
   */
  tileDiscardPolicy?: Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy
  /**
   * If true, the server's pre-cached tiles are used if they are available. If false, any pre-cached tiles are ignored and the 'export' service is used.
   * Default value: true
   */
  usePreCachedTilesIfAvailable?: boolean
  /**
   * A comma-separated list of the layers to show, or undefined if all layers should be shown.
   */
  layers?: string
  /**
   * If true, ArcGisMapServerImageryProvider#pickFeatures will invoke the Identify service on the MapServer and return the features included in the response. If false, ArcGisMapServerImageryProvider#pickFeatures will immediately return undefined (indicating no pickable features) without communicating with the server. Set this property to false if you don't want this provider's features to be pickable. Can be overridden by setting the ArcGisMapServerImageryProvider#enablePickFeatures property on the object.
   * Default value: true
   */
  enablePickFeatures?: boolean
  /**
   * The rectangle of the layer. This parameter is ignored when accessing a tiled layer.
   */
  rectangle?: VcRectangle
  /**
   * The tiling scheme to use to divide the world into tiles. This parameter is ignored when accessing a tiled server.
   */
  tilingScheme?: Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme
  /**
   * The ellipsoid. If the tilingScheme is specified and used, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * A credit for the data source, which is displayed on the canvas. This parameter is ignored when accessing a tiled server.
   */
  credit?: string | Cesium.Credit
  /**
   * The width of each tile in pixels. This parameter is ignored when accessing a tiled server.
   * Default value: 256
   */
  tileWidth?: number
  /**
   * The height of each tile in pixels. This parameter is ignored when accessing a tiled server.
   * Default value: 256
   */
  tileHeight?: number
  /**
   * The maximum tile level to request, or undefined if there is no maximum. This parameter is ignored when accessing a tiled server.
   */
  maximumLevel?: number
  /**
   * Triggers before the VcImageryProviderArcgis is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcImageryProviderArcgis is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcImageryProviderArcgis is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the imagery provider encounters an asynchronous error.
   */
  onErrorEvent?: (evt: Cesium.TileProviderError) => void
  /**
   * Triggers when the provider is ready for use.
   */
  onReadyPromise?: (provider: VcImageryProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => void
}
