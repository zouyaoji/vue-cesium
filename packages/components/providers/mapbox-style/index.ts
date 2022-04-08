/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-08 13:43:39
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\mapbox-style\index.ts
 */
import type { PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject, VcRectangle } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { accessToken, ellipsoid, minimumLevel, maximumLevel, rectangle, credit } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const mapboxImageryProviderProps = {
  url: {
    type: [String, Object] as PropType<string | Cesium.Resource>,
    default: 'https://api.mapbox.com/styles/v1/'
  },
  username: {
    type: String,
    default: 'mapbox'
  },
  styleId: String,
  ...accessToken,
  tilesize: {
    type: Number,
    default: 512
  },
  scaleFactor: Boolean,
  ...ellipsoid,
  ...minimumLevel,
  ...maximumLevel,
  ...rectangle,
  ...credit
}
export default defineComponent({
  name: 'VcImageryProviderMapbox',
  props: mapboxImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'MapboxStyleImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcImageryProviderMapboxProps = {
  /**
   * The Mapbox server url.
   * Default value: 'https://api.mapbox.com/v4/'
   */
  url?: string | Cesium.Resource
  /**
   * The username of the map account.
   * Default value: 'mapbox'
   */
  username?: string
  /**
   * The Mapbox Style ID.
   */
  styleId?: string
  /**
   * The public access token for the imagery.
   */
  accessToken?: string
  /**
   * The size of the image tiles.
   * Default value: 512
   */
  tilesize?: number
  /**
   * Determines if tiles are rendered at a @2x scale factor.
   */
  scaleFactor?: boolean
  /**
   * The ellipsoid. If not specified, the WGS84 ellipsoid is used.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * The minimum level-of-detail supported by the imagery provider. Take care when specifying this that the number of tiles at the minimum level is small, such as four or less. A larger number is likely to result in rendering problems.
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
   * A credit for the data source, which is displayed on the canvas.
   */
  credit?: string
  /**
   * Triggers before the VcImageryProviderMapbox is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcImageryProviderMapbox is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcImageryProviderMapbox is destroyed.
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

export type VcImageryProviderMapboxRef = VcComponentPublicInstance<VcImageryProviderMapboxProps>
