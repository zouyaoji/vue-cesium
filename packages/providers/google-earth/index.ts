import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { userProviders } from '@vue-cesium/composables'
import {
  url,
  ellipsoid,
  tileDiscardPolicy,
  credit
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
export default defineComponent({
  name: 'VcProviderImageryGoogleearthEnterprise',
  props: {
    ...url,
    ...ellipsoid,
    ...tileDiscardPolicy,
    ...credit,
    metadata: Object
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'readyPromise'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'GoogleEarthEnterpriseImageryProvider'
    userProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
