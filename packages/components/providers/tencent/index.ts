/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-03-31 11:14:52
 * @LastEditTime: 2022-05-13 14:26:33
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\tencent\index.ts
 */
import type { PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type {
  ProjectionTransforms,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcImageryProvider,
  VcReadyObject,
  VcRectangle
} from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { url, credit, minimumLevel, maximumLevel, rectangle, tilingScheme, projectionTransforms } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'
import TencentImageryProvider from './TencentImageryProvider'

export const tencentImageryProviderProps = {
  ...url,
  subdomains: {
    type: Array as PropType<string[]>,
    default: () => ['1', '2', '3']
  },
  mapStyle: {
    type: String as PropType<'img' | 'terrain' | 'vector'>,
    default: 'vector'
  },
  styleId: {
    // 1: 经典; 2: 标签; 3: 标签; 4: 墨渊; 8: 白浅; 9: 灰色;
    type: String,
    default: '1'
  },
  protocol: String as PropType<'http' | 'https'>,
  ...credit,
  ...minimumLevel,
  ...maximumLevel,
  ...rectangle,
  ...tilingScheme,
  ...projectionTransforms
}
export default defineComponent({
  name: 'VcImageryProviderTencent',
  props: tencentImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'TencentImageryProvider'
    const providersState = useProviders(props, ctx, instance)

    if (undefined === providersState) {
      return
    }
    // methods
    instance.createCesiumObject = async () => {
      Cesium.TencentImageryProvider = Cesium.TencentImageryProvider || TencentImageryProvider
      if (providersState.unwatchFns.length === 0) {
        providersState.setPropsWatcher(true)
      }
      const options = providersState.transformProps(props)
      return new Cesium.TencentImageryProvider(options)
    }
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export interface VcImageryProviderTencentProps {
  /**
   * Specify the URL template.
   */
  url?: string
  /**
   * Specify the service polling parameters.
   * Default value: ['1', '2', '3']
   */
  subdomains?: string[]
  /**
   * Specify the map style type of the tencent service.
   * Default value: vector
   */
  mapStyle?: 'img' | 'terrain' | 'vector'
  /**
   * Specify the map style type of the tencent service. Valid when mapStyle is vector. 1: Classic; 2: Label; 3: Label; 4: Mo Yuan; 8: White Light; 9: Gray
   * Default value: 1
   */
  styleId?: string
  /**
   * Specify protocol of service.
   */
  protocol?: 'https' | 'http'
  /**
   * A credit for the data source, which is displayed on the canvas.
   */
  credit?: string | Cesium.Credit
  /**
   * The minimum level-of-detail supported by the imagery provider.
   * Default value: 0
   */
  minimumLevel?: number
  /**
   * The maximum level-of-detail supported by the imagery provider.
   * Default value: 20
   */
  maximumLevel?: number
  /**
   * The rectangle, in radians, covered by the image.
   */
  rectangle?: VcRectangle
  /**
   * The tiling scheme specifying how the ellipsoidal surface is broken into tiles.
   */
  tilingScheme?: Cesium.GeographicTilingScheme | Cesium.WebMercatorTilingScheme
  /**
   * Specify the projection transformation parameters.
   */
  projectionTransforms?: false | ProjectionTransforms
  /**
   * Triggers before the VcImageryProviderTencent is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcImageryProviderTencent is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcImageryProviderTencent is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the imagery provider encounters an asynchronous error.
   */
  errorEvent?: (evt: Cesium.TileProviderError) => void
  /**
   * Triggers when the provider is ready for use.
   */
  readyPromise?: (provider: VcImageryProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => void
}

export type VcImageryProviderTencentRef = VcComponentPublicInstance<VcImageryProviderTencentProps>
