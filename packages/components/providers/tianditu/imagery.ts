/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-04-08 11:35:31
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\tianditu\imagery.ts
 */
import type { PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type {
  ProjectionTransforms,
  VcComponentInternalInstance,
  VcComponentPublicInstance,
  VcReadyObject,
  VcRectangle
} from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { minimumLevel, maximumLevel, rectangle, projectionTransforms } from '@vue-cesium/utils/cesium-props'
import TiandituImageryProvider from './TiandituImageryProvider'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const tiandituImageryProviderProps = {
  ...minimumLevel,
  ...maximumLevel,
  ...rectangle,
  mapStyle: {
    type: String as PropType<
      | 'cia_c'
      | 'cia_w'
      | 'cta_c'
      | 'cta_w'
      | 'cva_c'
      | 'cva_w'
      | 'ela_c'
      | 'ela_w'
      | 'eva_c'
      | 'eva_w'
      | 'img_c'
      | 'img_w'
      | 'ter_c'
      | 'ter_w'
      | 'vec_c'
      | 'vec_w'
      | 'ibo_c'
      | 'ibo_w'
    >,
    default: 'img_w',
    validator: (v: string) =>
      [
        'cia_c',
        'cia_w',
        'cta_c',
        'cta_w',
        'cva_c',
        'cva_w',
        'ela_c',
        'ela_w',
        'eva_c',
        'eva_w',
        'img_c',
        'img_w',
        'ter_c',
        'ter_w',
        'vec_c',
        'vec_w',
        'ibo_c',
        'ibo_w'
      ].includes(v)
  },
  token: String,
  protocol: {
    type: String,
    default: 'https'
  },
  credit: {
    type: [String, Object] as PropType<string | Cesium.Credit>,
    default: '天地图全球影像服务'
  },
  ...projectionTransforms
}
export default defineComponent({
  name: 'VcImageryProviderTianditu',
  props: tiandituImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'TiandituImageryProvider'
    const providersState = useProviders(props, ctx, instance)

    if (undefined === providersState) {
      return
    }
    // methods
    instance.createCesiumObject = async () => {
      Cesium.TiandituImageryProvider = Cesium.TiandituImageryProvider || TiandituImageryProvider
      if (providersState.unwatchFns.length === 0) {
        providersState.setPropsWatcher(true)
      }
      const options = providersState.transformProps(props)
      return new Cesium.TiandituImageryProvider(options)
    }
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

// export type VcImageryProviderTiandituProps = ExtractPropTypes<typeof tiandituImageryProviderProps>
export type VcImageryProviderTiandituProps = {
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
   * The rectangle of the layer. This rectangle can limit the visible portion of the imagery provider.
   */
  rectangle?: VcRectangle
  /**
   * The map type of Tianditu service.
   * Default value: 'img_w'
   */
  mapStyle?:
    | 'cia_c'
    | 'cia_w'
    | 'cta_c'
    | 'cta_w'
    | 'cva_c'
    | 'cva_w'
    | 'ela_c'
    | 'ela_w'
    | 'eva_c'
    | 'eva_w'
    | 'img_c'
    | 'img_w'
    | 'ter_c'
    | 'ter_w'
    | 'vec_c'
    | 'vec_w'
    | 'ibo_c'
    | 'ibo_w'
  /**
   * Tianditu application key.
   */
  token?: string
  /**
   * Specify the request protocol type. Can be https or http.
   * Default value: 'https'
   */
  protocol?: string
  /**
   * A credit for the data source, which is displayed on the canvas.
   */
  credit?: string | Cesium.Credit
  /**
   * Specify the projection transformation parameters.
   * Default value: false
   */
  projectionTransforms?: ProjectionTransforms
  /**
   * Triggers before the VcImageryProviderTianditu is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcImageryProviderTianditu is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcImageryProviderTianditu is destroyed.
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
