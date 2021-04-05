import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { userProviders } from '@vue-cesium/composables'
import {
  url,
  ellipsoid,
  tileDiscardPolicy
} from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcProviderImageryBingmaps',
  props: {
    url: {
      type: String,
      default: 'https://dev.virtualearth.net'
    },
    bmKey: String,
    tileProtocol: String,
    mapStyle: {
      type: String,
      default: 'Aerial'
    },
    culture: {
      type: String,
      default: ''
    },
    ...ellipsoid,
    ...tileDiscardPolicy
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'BingMapsImageryProvider'
    userProviders(props, ctx, instance)
    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
