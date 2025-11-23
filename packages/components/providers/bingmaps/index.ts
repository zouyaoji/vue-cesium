import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import type { PropType } from 'vue'
import { useProviders } from '@vue-cesium/composables'
import { ellipsoid, tileDiscardPolicy } from '@vue-cesium/utils/cesium-props'
import { providerEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-08 11:49:52
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\bingmaps\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

export const bingImageryProviderProps = {
  url: {
    type: [String, Object] as PropType<string | Cesium.Resource>,
    default: 'https://dev.virtualearth.net'
  },
  bmKey: String,
  tileProtocol: String,
  mapStyle: {
    type: String as PropType<string | Cesium.BingMapsStyle>,
    default: 'Aerial'
  },
  culture: {
    type: String,
    default: ''
  },
  ...ellipsoid,
  ...tileDiscardPolicy
}
export default defineComponent({
  name: 'VcImageryProviderBing',
  props: bingImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'BingMapsImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export interface VcImageryProviderBingProps {
  /**
   * The url of the Bing Maps server hosting the imagery.
   */
  url: string
  /**
   * The Bing Maps key for your application, which can be created at https://www.bingmapsportal.com/. Note that it is bmKey
   */
  bmKey?: string
  /**
   * The protocol to use when loading tiles, e.g. 'http:' or 'https:'. By default, tiles are loaded using the same protocol as the page.
   */
  tileProtocol?: string
  /**
   * The type of Bing Maps imagery to load.
   * Default value: 'Aerial'
   */
  mapStyle?: 'Aerial' | 'AerialWithLabels' | 'AerialWithLabelsOnDemand' | 'CanvasDark' | 'CanvasGray' | 'CanvasLight'
  /**
   * The culture to use when requesting Bing Maps imagery. Not all cultures are supported. See http://msdn.microsoft.com/en-us/library/hh441729.aspx for information on the supported cultures.
   */
  culture?: string
  /**
   * The ellipsoid. If not specified, the WGS84 ellipsoid is used.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * The policy that determines if a tile is invalid and should be discarded. By default, a DiscardEmptyTileImagePolicy will be used, with the expectation that the Bing Maps server will send a zero-length response for missing tiles. To ensure that no tiles are discarded, construct and pass a NeverTileDiscardPolicy for this parameter.
   */
  tileDiscardPolicy?: Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy
  /**
   * Triggers before the VcImageryProviderBing is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcImageryProviderBing is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcImageryProviderBing is destroyed.
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

export type VcImageryProviderBingRef = VcComponentPublicInstance<VcImageryProviderBingProps>
