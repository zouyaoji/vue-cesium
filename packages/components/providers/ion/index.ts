/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-04 16:02:35
 * @LastEditors: Weibo Cao
 * @Description:
 * @FilePath: \vue-cesium\packages\components\providers\ion\index.ts
 */
import type { ExtractPropTypes, PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { accessToken } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

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
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

// export type VcImageryProviderIonProps = ExtractPropTypes<typeof ionImageryProviderProps>
export type VcImageryProviderIonProps = {
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
