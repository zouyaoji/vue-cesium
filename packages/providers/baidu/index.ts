import { createCommentVNode, defineComponent, getCurrentInstance, toRefs } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import BaiduMapImageryProvider from './BaiduMapImageryProvider'
import { userProviders } from '@vue-cesium/composables'
import {
  url,
  rectangle,
  ellipsoid,
  tileDiscardPolicy,
  credit,
  minimumLevel,
  maximumLevel
} from '@vue-cesium/utils/cesium-props'

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
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcBaiduMapImageryProvider'
    userProviders(props, ctx, instance)
    // methods
    instance.createCesiumObject = async () => {
      // if (unwatchFns.length === 0) { setPropWatchers(true) }
      const options = {
        ...props
      }
      return new BaiduMapImageryProvider(options)
    }

    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
