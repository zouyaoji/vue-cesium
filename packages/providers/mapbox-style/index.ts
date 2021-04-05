import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { userProviders } from '@vue-cesium/composables'
import { accessToken, ellipsoid, minimumLevel, maximumLevel, rectangle, credit } from '@vue-cesium/utils/cesium-props'

export default defineComponent({
  name: 'VcProviderImageryStyleMapbox',
  props: {
    url: {
      type: String,
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
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'MapboxStyleImageryProvider'
    userProviders(props, ctx, instance)
    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
