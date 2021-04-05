import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { userProviders } from '@vue-cesium/composables'
import { accessToken } from '@vue-cesium/utils/cesium-props'

export default defineComponent({
  name: 'VcProviderImageryIon',
  props: {
    assetId: Number,
    ...accessToken,
    server: [String, Object]
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'IonImageryProvider'
    userProviders(props, ctx, instance)
    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
