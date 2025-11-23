/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2023-07-28 00:40:54
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\cesium-terrain\index.ts
 */

import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import type { PropType } from 'vue'
import { useProviders } from '@vue-cesium/composables'
import { credit, ellipsoid } from '@vue-cesium/utils/cesium-props'
import { providerEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

export const cesiumTerrainProviderProps = {
  url: [String, Object] as PropType<string | Promise<string> | Promise<Cesium.Resource> | Cesium.Resource>,
  requestVertexNormals: {
    type: Boolean,
    default: false
  },
  requestWaterMask: {
    type: Boolean,
    default: false
  },
  requestMetadata: {
    type: Boolean,
    default: true
  },
  assetId: Number,
  ...ellipsoid,
  ...credit
}

export default defineComponent({
  name: 'VcTerrainProviderCesium',
  props: cesiumTerrainProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CesiumTerrainProvider'
    const providersState = useProviders(props, ctx, instance)

    if (undefined === providersState) {
      return
    }
    // methods
    instance.createCesiumObject = async () => {
      if (providersState.unwatchFns.length === 0) {
        providersState.setPropsWatcher(true)
      }
      const options = providersState.transformProps(props)

      if (Cesium.defined(props.assetId) && typeof Cesium[instance.cesiumClass].fromIonAssetId === 'function') {
        return await Cesium.CesiumTerrainProvider.fromIonAssetId(props.assetId, options)
      }
      else {
        if (typeof Cesium[instance.cesiumClass].fromUrl === 'function') {
          return Cesium.defined(options.url)
            ? await Cesium.CesiumTerrainProvider.fromUrl(options.url, options)
            : await Cesium.createWorldTerrainAsync({ requestVertexNormals: options.requestVertexNormals, requestWaterMask: options.requestWaterMask })
        }
        else {
          return Cesium.defined(options.url)
            ? new Cesium.CesiumTerrainProvider(options as any)
            // eslint-disable-next-line ts/ban-ts-comment
            // @ts-expect-error
            : Cesium.createWorldTerrain({ requestVertexNormals: options.requestVertexNormals, requestWaterMask: options.requestWaterMask })
        }
      }
    }
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export interface VcTerrainProviderCesiumProps {
  /**
   * The URL of the Cesium terrain server.
   */
  url?: string
  /**
   * Flag that indicates if the client should request additional lighting information from the server, in the form of per vertex normals if available.
   * Default value: false
   */
  requestVertexNormals?: boolean
  /**
   * Flag that indicates if the client should request per tile water masks from the server, if available.
   * Default value: false
   */
  requestWaterMask?: boolean
  /**
   * Flag that indicates if the client should request per tile metadata from the server, if available.
   * Default value: true
   */
  requestMetadata?: boolean
  /**
   * The ellipsoid. If not specified, the WGS84 ellipsoid is used.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * A credit for the data source, which is displayed on the canvas.
   */
  credit?: string
  /**
   * The assetId to a terrain from a Cesium ion asset ID.
   */
  assetId?: number
  /**
   * Triggers before the VcTerrainProviderCesium is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcTerrainProviderCesium is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcTerrainProviderCesium is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the terrain provider encounters an asynchronous error.
   */
  onErrorEvent?: (evt: Cesium.TileProviderError) => void
  /**
   * Triggers when the provider is ready for use.
   */
  onReadyPromise?: (evt: boolean, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => void
}

export type VcTerrainProviderCesiumRef = VcComponentPublicInstance<VcTerrainProviderCesiumProps>
