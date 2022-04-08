/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-08 13:43:58
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\osm\index.ts
 */
import type { PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject, VcRectangle } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { fileExtension, rectangle, minimumLevel, maximumLevel, ellipsoid } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const osmImageryProviderProps = {
  url: {
    type: String,
    default: 'https://a.tile.openstreetmap.org'
  },
  ...fileExtension,
  ...rectangle,
  ...minimumLevel,
  ...maximumLevel,
  ...ellipsoid,
  credit: {
    type: [String, Object] as PropType<string | Cesium.Credit>,
    default: 'MapQuest, Open Street Map and contributors, CC-BY-SA'
  }
}
export default defineComponent({
  name: 'VcImageryProviderOsm',
  props: osmImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'OpenStreetMapImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcImageryProviderOsmProps = {
  /**
   * The OpenStreetMap server url.
   * Default value: 'https://a.tile.openstreetmap.org'
   */
  url?: string
  /**
   * The file extension for images on the server.
   * Default value: 'png'
   */
  fileExtension?: string
  /**
   * The rectangle of the layer.
   */
  rectangle?: VcRectangle
  /**
   * The minimum level-of-detail supported by the imagery provider.
   * Default value: 0
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
   * Default value: 'MapQuest, Open Street Map and contributors, CC-BY-SA'
   */
  credit?: string | Cesium.Credit
  /**
   * Triggers before the VcImageryProviderOsm is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcImageryProviderOsm is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcImageryProviderOsm is destroyed.
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

export type VcImageryProviderOsmRef = VcComponentPublicInstance<VcImageryProviderOsmProps>
