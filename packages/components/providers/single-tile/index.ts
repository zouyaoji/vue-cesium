import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject, VcRectangle } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { credit, ellipsoid, rectangle, tileHeight, tileWidth, url } from '@vue-cesium/utils/cesium-props'
import { providerEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2023-07-25 10:30:37
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\single-tile\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

export const singletileImageryProviderProps = {
  ...url,
  ...rectangle,
  ...credit,
  ...ellipsoid,
  ...tileWidth,
  ...tileHeight
}
export default defineComponent({
  name: 'VcImageryProviderSingletile',
  props: singletileImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'SingleTileImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export interface VcImageryProviderSingletileProps {
  /**
   * The url for the tile
   */
  url: string | Cesium.Resource
  /**
   * The rectangle, in radians, covered by the image.
   */
  rectangle?: VcRectangle
  /**
   * A credit for the data source, which is displayed on the canvas.
   */
  credit?: string | Cesium.Credit
  /**
   * The ellipsoid. If not specified, the WGS84 ellipsoid is used.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * The width of the tile, in pixels.
   */
  tileWidth?: number
  /**
   * The height of the tile, in pixels.
   */
  tileHeight?: number
  /**
   * Triggers before the VcImageryProviderSingletile is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcImageryProviderSingletile is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcImageryProviderSingletile is destroyed.
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

export type VcImageryProviderSingletileRef = VcComponentPublicInstance<VcImageryProviderSingletileProps>
