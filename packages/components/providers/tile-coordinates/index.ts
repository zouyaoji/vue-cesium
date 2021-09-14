import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
import { tilingScheme, ellipsoid, tileWidth, tileHeight } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'

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
    ...tileHeight
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'readyPromise'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'TileCoordinatesImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
