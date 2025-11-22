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
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject, VcRectangle } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { url, ellipsoid, credit, tileWidth, tileHeight, minimumLevel, maximumLevel, rectangle } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const googleImageryProviderProps = {
  key: String,
  session: String,
  ...url,
  ...tileWidth,
  ...tileHeight,
  ...ellipsoid,
  ...minimumLevel,
  ...maximumLevel,
  ...credit,
  ...rectangle,
  metadata: Object as PropType<Cesium.GoogleEarthEnterpriseMetadata>
}
export default defineComponent({
  name: 'VcImageryProviderGoogle2D',
  props: googleImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Google2DImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcImageryProviderGoogle2DProps = {
  /**
   * The Google api key to send with tile requests.
   */
  key: string
  /**
   * 	The Google session token that tracks the current state of your map and viewport.
   */
  session: string
  /**
   * 	The Google 2D maps endpoint.
   */
  url: string | Cesium.Resource
  /**
   * The width of each tile in pixels.
   */
  tileWidth: number
    /**
   * T	The height of each tile in pixels.
   */
  tileHeight: number
  /**
   * The ellipsoid. If not specified, the default ellipsoid is used.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * TThe minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems.
   */
  minimumLevel?: number
  /**
   * The maximum level-of-detail supported by the imagery provider.
   */
  maximumLevel?: number
  /**
   * The rectangle, in radians, covered by the image.
   */
  rectangle?: VcRectangle
  /**
   * Triggers before the VcImageryProviderGoogle is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcImageryProviderGoogle is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
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

export type VcImageryProviderGoogle2DRef = VcComponentPublicInstance<VcImageryProviderGoogle2DProps>
