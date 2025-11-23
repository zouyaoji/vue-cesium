import type { VcColor, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-08 13:42:06
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\grid\index.ts
 */
import type { PropType } from 'vue'
import { useProviders } from '@vue-cesium/composables'
import { makeColor } from '@vue-cesium/utils/cesium-helpers'
import { ellipsoid, glowColor, tileHeight, tileWidth, tilingScheme } from '@vue-cesium/utils/cesium-props'
import { providerEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

export const gridImageryProviderProps = {
  ...tilingScheme,
  ...ellipsoid,
  cells: {
    type: Number,
    default: 8
  },
  color: {
    type: [String, Object, Array] as PropType<VcColor>,
    default: () => [1.0, 1.0, 1.0, 0.4],
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  },
  ...glowColor,
  glowWidth: {
    type: Number,
    default: 6
  },
  backgroundColor: {
    type: [String, Array, Object] as PropType<VcColor>,
    default: () => [0.0, 0.5, 0.0, 0.2],
    watcherOptions: {
      cesiumObjectBuilder: makeColor
    }
  },
  ...tileWidth,
  ...tileHeight,
  canvasSize: {
    type: Number,
    default: 256
  }
}
export default defineComponent({
  name: 'VcImageryProviderGrid',
  props: gridImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'GridImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export interface VcImageryProviderGridProps {
  /**
   * The tiling scheme for which to draw tiles.
   */
  tileScheme?: Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme
  /**
   * The ellipsoid. If the tilingScheme is specified, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * The number of grids cells.
   * Default value: 8
   */
  cells?: number
  /**
   * The color to draw grid lines.
   * Default value: [1.0, 1.0, 1.0, 0.4]
   */
  color?: VcColor
  /**
   * The color to draw glow for grid lines.
   * Default value: [0.0, 1.0, 0.0, 0.05]
   */
  glowColor?: VcColor
  /**
   * The width of lines used for rendering the line glow effect.
   * Default value: 6
   */
  glowWidth?: number
  /**
   * Background fill color.
   * Default value: [0.0, 0.5, 0.0, 0.2]
   */
  backgroundColor?: VcColor
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
   * The size of the canvas used for rendering.
   * Default value: 256
   */
  canvasSize?: number
  /**
   * Triggers before the VcImageryProviderGrid is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcImageryProviderGrid is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcImageryProviderGrid is destroyed.
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

export type VcImageryProviderGridRef = VcComponentPublicInstance<VcImageryProviderGridProps>
