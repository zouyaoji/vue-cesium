import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { userProviders } from '@vue-cesium/composables'
import {
  url,
  rectangle,
  credit,
  ellipsoid,
} from '@vue-cesium/utils/cesium-props'

export default defineComponent({
  name: 'VcProviderImageryTileSingle',
  props: {
    ...url,
    ...rectangle,
    ...credit,
    ...ellipsoid,
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'SingleTileImageryProvider'
    userProviders(props, ctx, instance)
    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
