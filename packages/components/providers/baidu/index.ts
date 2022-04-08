/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-04 17:31:15
 * @LastEditors: Weibo Cao
 * @Description:
 * @FilePath: \vue-cesium\packages\components\providers\baidu\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { PropType } from 'vue'
import type {
  ProjectionTransforms,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcImageryProvider,
  VcReadyObject,
  VcRectangle
} from '@vue-cesium/utils/types'
import BaiduMapImageryProvider from './BaiduMapImageryProvider'
import { useProviders } from '@vue-cesium/composables'
import { url, rectangle, ellipsoid, tileDiscardPolicy, credit, minimumLevel, maximumLevel } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const baiduImageryProviderProps = {
  ...url,
  ...rectangle,
  ...ellipsoid,
  ...tileDiscardPolicy,
  ...credit,
  ...minimumLevel,
  ...maximumLevel,
  protocol: {
    type: String,
    default: 'https'
  },
  projectionTransforms: {
    type: [Boolean, Object] as PropType<ProjectionTransforms>,
    default: () => {
      return {
        from: 'BD09',
        to: 'WGS84'
      }
    }
  },
  scale: {
    type: Number,
    default: 1
  },
  ak: {
    type: String,
    default: 'E4805d16520de693a3fe707cdc962045'
  },
  // https://lbsyun.baidu.com/custom/list.htm
  customid: {
    type: String as PropType<
      | 'img'
      | 'vec'
      | 'traffic'
      | 'normal'
      | 'light'
      | 'dark'
      | 'redalert'
      | 'googlelite'
      | 'grassgreen'
      | 'midnight'
      | 'pink'
      | 'darkgreen'
      | 'bluish'
      | 'grayscale'
      | 'hardedge'
    >,
    default: 'normal' // img vec traffic normal light dark redalert googlelite grassgreen midnight pink darkgreen bluish grayscale hardedge
  }
}
export default defineComponent({
  name: 'VcImageryProviderBaidu',
  props: baiduImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'BaiduMapImageryProvider'
    const providersState = useProviders(props, ctx, instance)

    if (undefined === providersState) {
      return
    }
    // methods
    instance.createCesiumObject = async () => {
      Cesium.BaiduMapImageryProvider = Cesium.BaiduMapImageryProvider || BaiduMapImageryProvider
      if (providersState.unwatchFns.length === 0) {
        providersState.setPropsWatcher(true)
      }
      const options = providersState.transformProps(props)
      return new Cesium.BaiduMapImageryProvider(options)
    }

    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

// export type VcImageryProviderBaiduProps = ExtractPropTypes<typeof baiduImageryProviderProps>
export type VcImageryProviderBaiduProps = {
  /**
   * The URL of the Baidu Imagery service.
   */
  url?: string | Cesium.Resource
  /**
   * The rectangle of the layer. This parameter is ignored when accessing a tiled layer.
   */
  rectangle?: VcRectangle
  /**
   * The ellipsoid. If the tilingScheme is specified and used, this parameter is ignored and the tiling scheme's ellipsoid is used instead. If neither parameter is specified, the WGS84 ellipsoid is used.
   */
  ellipsoid?: Cesium.Ellipsoid
  /**
   * The policy that determines if a tile is invalid and should be discarded. If this value is not specified, a default DiscardMissingTileImagePolicy is used for tiled map servers, and a NeverTileDiscardPolicy is used for non-tiled map servers. In the former case, we request tile 0,0 at the maximum tile level and check pixels (0,0), (200,20), (20,200), (80,110), and (160, 130). If all of these pixels are transparent, the discard check is disabled and no tiles are discarded. If any of them have a non-transparent color, any tile that has the same values in these pixel locations is discarded. The end result of these defaults should be correct tile discarding for a standard ArcGIS Server. To ensure that no tiles are discarded, construct and pass a NeverTileDiscardPolicy for this parameter.
   */
  tileDiscardPolicy?: Cesium.DiscardMissingTileImagePolicy | Cesium.NeverTileDiscardPolicy
  /**
   * A credit for the data source, which is displayed on the canvas. This parameter is ignored when accessing a tiled server.
   */
  credit?: string | Cesium.Credit
  /**
   * The minimumLevel tile level to request, or undefined if there is no minimumLevel. This parameter is ignored when accessing a tiled server.
   */
  minimumLevel?: number
  /**
   * The maximum tile level to request, or undefined if there is no maximum. This parameter is ignored when accessing a tiled server.
   */
  maximumLevel?: number
  /**
   * Specify protocol of service.
   * Default value: https
   */
  protocol?: string
  /**
   * Specify the scale
   */
  scale?: number
  /**
   * Specify the baidumap key
   */
  ak?: string
  /**
   * Specify the customid
   */
  customid?: string
  /**
   * Specify the projection transformation parameters. such as { from: 'BD09', to: 'WGS84' }
   */
  projectionTransforms?: ProjectionTransforms
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
  onReadyPromise?: (evt: boolean | VcImageryProvider, viewer: Cesium.Viewer, instance: VcComponentPublicInstance) => void
}
