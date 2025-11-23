import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-08 11:40:59
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\arcgis\terrain.ts
 */
import type { PropType } from 'vue'
import { useProviders } from '@vue-cesium/composables'
import { ellipsoid, token } from '@vue-cesium/utils/cesium-props'
import { providerEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

export const arcgisTerrainProviderProps = {
  url: {
    type: [String, Object] as PropType<string | Cesium.Resource>,
    default: 'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'
  },
  ...ellipsoid,
  ...token
}
export default defineComponent({
  name: 'VcTerrainProviderArcgis',
  props: arcgisTerrainProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'ArcGISTiledElevationTerrainProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export interface VcTerrainProviderArcgisProps {
  /**
   * The URL of the ArcGIS ImageServer service.
   */
  url?: string | Cesium.Resource
  /**
   * The authorization token to use to connect to the service.
   */
  token?: string
  /**
   * The ellipsoid. If the tilingScheme is specified, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * Triggers before the VcTerrainProviderArcgis is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcTerrainProviderArcgis is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcTerrainProviderArcgis is destroyed.
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

export type VcTerrainProviderArcgisRef = VcComponentPublicInstance<VcTerrainProviderArcgisProps>
