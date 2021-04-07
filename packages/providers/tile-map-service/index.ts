import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { userProviders } from '@vue-cesium/composables'
import {
  url,
  fileExtension,
  credit,
  minimumLevel,
  maximumLevel,
  rectangle,
  tilingScheme,
  ellipsoid,
  tileWidth,
  tileHeight
} from '@vue-cesium/utils/cesium-props'

export default defineComponent({
  name: 'VcProviderImageryTileMapservice',
  props: {
    ...url,
    ...fileExtension,
    ...credit,
    ...minimumLevel,
    ...maximumLevel,
    ...rectangle,
    ...tilingScheme,
    ...ellipsoid,
    ...tileWidth,
    ...tileHeight,
    flipXY: Boolean
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'TileMapServiceImageryProvider'
    userProviders(props, ctx, instance)
    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
