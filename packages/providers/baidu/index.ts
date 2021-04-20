import { createCommentVNode, defineComponent, getCurrentInstance, toRefs } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import BaiduMapImageryProvider from './BaiduMapImageryProvider'
import { useProviders } from '@vue-cesium/composables'
import {
  url,
  rectangle,
  ellipsoid,
  tileDiscardPolicy,
  credit,
  minimumLevel,
  maximumLevel
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'

export default defineComponent({
  name: 'VcProviderImageryBaidumap',
  props: {
    ...url,
    ...rectangle,
    ...ellipsoid,
    ...tileDiscardPolicy,
    ...credit,
    ...minimumLevel,
    ...maximumLevel,
    protocol: {
      type: String,
      default: 'http'
    },
    projectionTransforms: {
      type: [Boolean, Object],
      default: () => {
        return {
          from: 'BD09',
          to: 'WGS84'
        }
      }
    }
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'readyPromise'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'BaiduMapImageryProvider'
    const providersState = useProviders(props, ctx, instance)
    // methods
    instance.createCesiumObject = async () => {
      Cesium.BaiduMapImageryProvider = Cesium.BaiduMapImageryProvider || BaiduMapImageryProvider
      if (providersState.unwatchFns.length === 0) { providersState.setPropsWatcher(true) }
      const options = providersState.transformProps(props)
      return new Cesium.BaiduMapImageryProvider(options)
    }

    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
