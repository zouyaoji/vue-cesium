/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-15 22:07:06
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\mapbox-style\index.ts
 */
import type { ExtractPropTypes, PropType } from 'vue'
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { accessToken, ellipsoid, minimumLevel, maximumLevel, rectangle, credit } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
import { providerEmits } from '@vue-cesium/utils/emits'

export const mapboxImageryProviderProps = {
  url: {
    type: [String, Object] as PropType<string | Cesium.Resource>,
    default: 'https://api.mapbox.com/styles/v1/'
  },
  username: {
    type: String,
    default: 'mapbox'
  },
  styleId: String,
  ...accessToken,
  tilesize: {
    type: Number,
    default: 512
  },
  scaleFactor: Boolean,
  ...ellipsoid,
  ...minimumLevel,
  ...maximumLevel,
  ...rectangle,
  ...credit
}
export default defineComponent({
  name: 'VcImageryProviderMapbox',
  props: mapboxImageryProviderProps,
  emits: providerEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'MapboxStyleImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy?.$options.name || ''))
  }
})

export type VcImageryProviderMapboxProps = ExtractPropTypes<typeof mapboxImageryProviderProps>
