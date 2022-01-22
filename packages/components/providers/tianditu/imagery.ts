/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-15 23:43:18
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\tianditu\imagery.ts
 */
import type { ExtractPropTypes } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { minimumLevel, maximumLevel, rectangle } from '@vue-cesium/utils/cesium-props'
import TiandituImageryProvider from './TiandituImageryProvider'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const tiandituImageryProviderProps = {
  ...minimumLevel,
  ...maximumLevel,
  ...rectangle,
  mapStyle: {
    type: String,
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
  }
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

export type VcImageryProviderTiandituProps = ExtractPropTypes<typeof tiandituImageryProviderProps>
