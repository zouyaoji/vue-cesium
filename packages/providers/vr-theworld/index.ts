import { createCommentVNode, defineComponent, getCurrentInstance, PropType } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { userProviders } from '@vue-cesium/composables'
import { ellipsoid, credit } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
export default defineComponent({
  name: 'VcProviderTerrainVrTheworld',
  props: {
    url: {
      type: [String, Object] as PropType<string | Promise<string> | Promise<Cesium.Resource> | Cesium.Resource>,
      default: 'https://www.vr-theworld.com/vr-theworld/tiles1.0.0/73/'
    },
    ...ellipsoid,
    ...credit
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'readyPromise'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VRTheWorldTerrainProvider'
    userProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
