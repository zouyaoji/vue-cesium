import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { userProviders } from '@vue-cesium/composables'
import {
  tilingScheme,
  ellipsoid,
  tileWidth,
  tileHeight
} from '@vue-cesium/utils/cesium-props'

export default defineComponent({
  name: 'VcProviderImageryTileCoordinates',
  props: {
    ...tilingScheme,
    ...ellipsoid,
    color: {
      type: [Object, String, Array],
      default: 'YELLOW'
    },
    ...tileWidth,
    ...tileHeight,

  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'TileCoordinatesImageryProvider'
    userProviders(props, ctx, instance)
    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
