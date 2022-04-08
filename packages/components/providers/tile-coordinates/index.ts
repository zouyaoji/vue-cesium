/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-08 13:54:36
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\tile-coordinates\index.ts
 */
import type { PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { tilingScheme, ellipsoid, tileWidth, tileHeight } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const tileCoordinatesImageryProviderProps = {
  ...tilingScheme,
  ...ellipsoid,
  color: {
    type: [Object, String, Array] as PropType<VcColor>,
    default: 'YELLOW'
  },
  ...tileWidth,
  ...tileHeight
}
export default defineComponent({
  name: 'VcImageryProviderTileCoordinates',
  props: tileCoordinatesImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'TileCoordinatesImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcImageryProviderTileCoordinatesProps = {
  /**
   * The tiling scheme to use to divide the world into tiles. This parameter is ignored when accessing a tiled server.
   */
  tileScheme?: Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme
  /**
   * The ellipsoid. If the tilingScheme is specified and used, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * The color to draw the tile box and label.
   * Default value: 'YELLOW'
   */
  color?: VcColor
  /**
   * The width of the tile for level-of-detail selection purposes.
   * Default value: 256
   */
  tileWidth?: number
  /**
   * The height of the tile for level-of-detail selection purposes.
   * Default value: 256
   */
  tileHeight?: number
  /**
   * Triggers before the VcImageryProviderTileCoordinates is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcImageryProviderTileCoordinates is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcImageryProviderTileCoordinates is destroyed.
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

export type VcImageryProviderTileCoordinatesRef = VcComponentPublicInstance<VcImageryProviderTileCoordinatesProps>
