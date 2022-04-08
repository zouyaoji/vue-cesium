/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-04 16:58:36
 * @LastEditors: Weibo Cao
 * @Description:
 * @FilePath: \vue-cesium\packages\components\providers\supermap\index.ts
 */
import type { PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { ProjectionTransforms, VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { minimumLevel, maximumLevel, projectionTransforms } from '@vue-cesium/utils/cesium-props'
import SuperMapImageryProvider from './SuperMapImageryProvider'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const supermapImageryProviderProps = {
  url: String,
  ...minimumLevel,
  ...maximumLevel,
  name: String,
  transparent: {
    type: Boolean,
    default: true
  },
  credit: {
    type: [String, Object] as PropType<string | Cesium.Credit>,
    default: 'MapQuest, SuperMap iServer Imagery'
  },
  ...projectionTransforms
}
export default defineComponent({
  name: 'VcImageryProviderSupermap',
  props: supermapImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'SuperMapImageryProvider'
    const providersState = useProviders(props, ctx, instance)

    if (undefined === providersState) {
      return
    }
    // methods
    instance.createCesiumObject = async () => {
      Cesium.SuperMapImageryProvider = Cesium.SuperMapImageryProvider || SuperMapImageryProvider
      if (providersState.unwatchFns.length === 0) {
        providersState.setPropsWatcher(true)
      }
      const options = providersState.transformProps(props)
      return new Cesium.SuperMapImageryProvider(options)
    }
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

// export type VcImageryProviderSupermapProps = ExtractPropTypes<typeof supermapImageryProviderProps>
export type VcImageryProviderSupermapProps = {
  /**
   * The URL of the SuperMap iServer service.
   */
  url: string
  /**
   * The name of the layer.
   */
  name?: string
  /**
   * The minimum tile level to request, or undefined if there is no minimum.
   * Default value: 0
   */
  minimumLevel?: number
  /**
   * The maximum tile level to request, or undefined if there is no maximum.
   * Default value: 20
   */
  maximumLevel?: number
  /**
   * Whether the parameter of the requested map service is transparent.
   * Default value: true
   */
  transparent?: boolean
  /**
   * A credit for the data source, which is displayed on the canvas.
   * Default value: 'MapQuest, SuperMap iServer Imagery'
   */
  credit?: string | Cesium.Credit
  /**
   * Specify the projection transformation parameters. such as { from: 'BD09', to: 'WGS84' }
   */
  projectionTransforms?: ProjectionTransforms
  /**
   * Triggers before the VcImageryProviderSupermap is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcImageryProviderSupermap is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcImageryProviderSupermap is destroyed.
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
