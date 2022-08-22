/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-08 13:55:08
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\tile-map-service\index.ts
 */
import type { PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type {
  ProjectionTransforms,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcReadyObject,
  VcRectangle
} from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import {
  fileExtension,
  credit,
  minimumLevel,
  maximumLevel,
  rectangle,
  tilingScheme,
  ellipsoid,
  tileWidth,
  tileHeight,
  projectionTransforms
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const tmsImageryProviderProps = {
  url: [String, Object] as PropType<string | Promise<string> | Promise<Cesium.Resource> | Cesium.Resource>,
  ...fileExtension,
  ...credit,
  ...minimumLevel,
  ...maximumLevel,
  ...rectangle,
  ...tilingScheme,
  ...ellipsoid,
  ...tileWidth,
  ...tileHeight,
  flipXY: Boolean,
  ...projectionTransforms
}
export default defineComponent({
  name: 'VcImageryProviderTms',
  props: tmsImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'TileMapServiceImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcImageryProviderTmsProps = {
  /**
   * Path to image tiles on server.
   * Default value: '.'
   */
  url?: string | Cesium.Resource | Promise<string> | Promise<Cesium.Resource>
  /**
   * The file extension for images on the server.
   * Default value: 'png'
   */
  fileExtension?: string
  /**
   * A credit for the data source, which is displayed on the canvas.
   * Default value: ''
   */
  credit?: string | Cesium.Credit
  /**
   * 	The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems.
   * Default value: 0
   */
  minimumLevel?: number
  /**
   * The maximum level-of-detail supported by the imagery provider, or undefined if there is no limit.
   */
  maximumLevel?: number
  /**
   * The rectangle, in radians, covered by the image.
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
   * Older versions of gdal2tiles.py flipped X and Y values in tilemapresource.xml. Specifying this option will do the same, allowing for loading of these incorrect tilesets.
   */
  flipXY?: boolean
  /**
   * Specify the projection transformation parameters. such as { from: 'BD09', to: 'WGS84' }
   */
  projectionTransforms?: ProjectionTransforms
  /**
   * Triggers before the VcImageryProviderTms is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcImageryProviderTms is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcImageryProviderTms is destroyed.
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

export type VcImageryProviderTmsRef = VcComponentPublicInstance<VcImageryProviderTmsProps>
