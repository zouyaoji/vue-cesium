/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-10-27 15:16:19
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\supermap\index.ts
 */
import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { url, minimumLevel, maximumLevel, projectionTransforms } from '@vue-cesium/utils/cesium-props'
import SuperMapImageryProvider from './SuperMapImageryProvider'
import { kebabCase } from '@vue-cesium/utils/util'

export default defineComponent({
  name: 'VcProviderImagerySupermap',
  props: {
    ...url,
    ...minimumLevel,
    ...maximumLevel,
    name: String,
    transparent: {
      type: Boolean,
      default: true
    },
    credit: {
      type: String,
      default: 'MapQuest, SuperMap iServer Imagery'
    },
    ...projectionTransforms
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'readyPromise'],
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
