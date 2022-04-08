/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-08 13:41:28
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\google-earth\index.ts
 */
import type { PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
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

export type VcImageryProviderGoogleProps = {
  /**
   * The url of the Google Earth Enterprise server hosting the imagery.
   */
  url: string | Cesium.Resource
  /**
   * A metadata object that can be used to share metadata requests with a GoogleEarthEnterpriseTerrainProvider.
   */
  metadata: string
  /**
   * The ellipsoid. If not specified, the WGS84 ellipsoid is used.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * The policy that determines if a tile is invalid and should be discarded. If this value is not specified, a default is to discard tiles that fail to download.
   */
  tileDiscardPolicy?: Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy
  /**
   * A credit for the data source, which is displayed on the canvas.
   */
  credit?: Cesium.Credit | string
  /**
   * Triggers before the VcImageryProviderGoogle is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcImageryProviderGoogle is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcImageryProviderGoogle is destroyed.
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

export type VcImageryProviderGoogleRef = VcComponentPublicInstance<VcImageryProviderGoogleProps>
