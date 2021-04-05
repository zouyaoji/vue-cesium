import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { userProviders } from '@vue-cesium/composables'
import {
  url,
  ellipsoid,
  tileDiscardPolicy,
  credit
} from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcProviderImageryGoogleearthEnterprise',
  props: {
    ...url,
    ...ellipsoid,
    ...tileDiscardPolicy,
    ...credit,
    metadata: Object
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'GoogleEarthEnterpriseImageryProvider'
    userProviders(props, ctx, instance)
    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
