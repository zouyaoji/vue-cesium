import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2023-04-13 22:33:41
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\packages\components\providers\ion\index.ts
 */
import type { PropType } from 'vue'
import { useProviders } from '@vue-cesium/composables'
import { compareCesiumVersion } from '@vue-cesium/utils/cesium-helpers'
import { accessToken } from '@vue-cesium/utils/cesium-props'
import { providerEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'

export const ionImageryProviderProps = {}
export default defineComponent({
  name: 'VcImageryProviderIon',
  props: {
    assetId: Number,
    ...accessToken,
    server: [String, Object] as PropType<string | Cesium.Resource>
  },
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'IonImageryProvider'
    const providersState = useProviders(props, ctx, instance)

    if (undefined === providersState) {
      return
    }
    // methods
    instance.createCesiumObject = async () => {
      const options = providersState.transformProps(props)
      if (compareCesiumVersion(Cesium.VERSION, '1.104') && typeof Cesium[instance.cesiumClass].fromAssetId === 'function') {
        return await Cesium.IonImageryProvider.fromAssetId(options.assetId, options)
      }
      else {
        return new Cesium.IonImageryProvider(options)
      }
    }

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export interface VcImageryProviderIonProps {
  /**
   * An ion imagery asset ID.
   */
  assetId: number
  /**
   * The access token to use.
   */
  accessToken?: string
  /**
   * The resource to the Cesium ion API server.
   */
  server?: string | Cesium.Resource
  /**
   * Triggers before the VcImageryProviderArcgis is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcImageryProviderArcgis is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcImageryProviderArcgis is destroyed.
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

export type VcImageryProviderIonRef = VcComponentPublicInstance<VcImageryProviderIonProps>
