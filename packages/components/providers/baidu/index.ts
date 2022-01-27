/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-27 23:20:07
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\baidu\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import type { ExtractPropTypes, PropType } from 'vue'
import type { ProjectionTransforms, VcComponentInternalInstance } from '@vue-cesium/utils/types'
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
    type: String,
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

export type VcImageryProviderBaiduProps = ExtractPropTypes<typeof baiduImageryProviderProps>
