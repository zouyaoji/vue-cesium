import type {
  ProjectionTransforms,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcImageryProvider,
  VcReadyObject,
  VcRectangle
} from '@vue-cesium/utils/types'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-03-30 15:40:44
 * @LastEditTime: 2022-05-26 22:10:39
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\amap\index.ts
 */
import type { PropType } from 'vue'
import { useProviders } from '@vue-cesium/composables'
import { credit, maximumLevel, minimumLevel, projectionTransforms, rectangle, tilingScheme } from '@vue-cesium/utils/cesium-props'
import { providerEmits } from '@vue-cesium/utils/emits'
import { kebabCase } from '@vue-cesium/utils/util'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import AMapImageryProvider from './AMapImageryProvider'

export const amapImageryProviderProps = {
  url: {
    type: String,
    default: 'https://{domain}{s}.is.autonavi.com/appmaptile?lang={lang}&size=1&style={style}&scl={scl}&ltype={ltype}&x={x}&y={y}&z={z}'
  },
  subdomains: {
    type: Array as PropType<string[]>,
    default: () => ['01', '02', '03', '04']
  },
  domain: {
    type: String as PropType<'webrd' | 'webst'>,
    default: 'webst'
  },
  lang: {
    type: String as PropType<'zh_cn' | 'en'>,
    default: 'zh_cn'
  },
  mapStyle: {
    // 地图类型控制，6卫星图（st），7简图（st rd），8详图（不透明rd，透明图st）
    type: String as PropType<'6' | '7' | '8'>,
    default: '6'
  },
  scl: {
    // 尺寸控制，1=256,2=512
    type: String as PropType<'1' | '2'>,
    default: '1'
  },
  ltype: {
    // 线性控制，只对地图要素进行控制，没有文字注记，要素多少，是否透明
    // 纯道路 ltype=11 mapStyle=8
    // 纯地标  ltype=4 mapStyle=8
    // 道路标注 ltype=0 mapStyle=8
    type: String,
    default: '0'
  },
  ...credit,
  ...minimumLevel,
  ...maximumLevel,
  ...rectangle,
  ...tilingScheme,
  ...projectionTransforms
}
export default defineComponent({
  name: 'VcImageryProviderAmap',
  props: amapImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'AMapImageryProvider'
    const providersState = useProviders(props, ctx, instance)

    if (undefined === providersState) {
      return
    }
    // methods
    instance.createCesiumObject = async () => {
      Cesium.AMapImageryProvider = Cesium.AMapImageryProvider || AMapImageryProvider
      if (providersState.unwatchFns.length === 0) {
        providersState.setPropsWatcher(true)
      }
      const options = providersState.transformProps(props)
      return new Cesium.AMapImageryProvider(options)
    }
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export interface VcImageryProviderAmapProps {
  /**
   * Specify the URL template.
   * Default value: https://{domain}{s}.is.autonavi.com/appmaptile?lang={lang}&size=1&style={style}&scl={scl}&ltype={ltype}&x={x}&y={y}&z={z}
   */
  url?: string
  /**
   * Specify the domain name.
   * Default value: webst
   */
  domain?: 'webrd' | 'webst'
  /**
   * Specify the service polling parameters.
   * Default value: ['01', '02', '03', '04']
   */
  subdomains?: string[]
  /**
   * Specify the language.
   * Default value: zh_cn
   */
  lang?: 'zh_cn' | 'en'
  /**
   * Specify the map style type of the amap service. '6': satellite image; '7': road map; '8': road map (with transparent background).
   * Default value: 6
   */
  mapStyle?: '6' | '7' | '8'
  /**
   * Specify size control parameters. '1': 256*256; '2': 512*512
   * Default value: 1
   */
  scl?: '1' | '2'
  /**
   * Specify the type parameter. '0': default; '4': only annotations; '8': only roads
   * Default value: 0
   */
  ltype?: string
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
   * Triggers before the VcImageryProviderAmap is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcImageryProviderAmap is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcImageryProviderAmap is destroyed.
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

export type VcImageryProviderAmapRef = VcComponentPublicInstance<VcImageryProviderAmapProps>
