import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { userProviders } from '@vue-cesium/composables'
import {
  url,
  format,
  clock,
  times,
  tileWidth,
  tileHeight,
  tilingScheme,
  rectangle,
  minimumLevel,
  maximumLevel,
  ellipsoid,
  credit,
  subdomains,
  dimensions
} from '@vue-cesium/utils/cesium-props'

export default defineComponent({
  name: 'VcProviderImageryWmts',
  props: {
    ...url,
    ...format,
    layer: String,
    wmtsStyle: String,
    tileMatrixSetID: String,
    tileMatrixLabels: Array,
    ...clock,
    ...times,
    ...dimensions,
    ...tileWidth,
    ...tileHeight,
    ...tilingScheme,
    ...rectangle,
    ...minimumLevel,
    ...maximumLevel,
    ...ellipsoid,
    ...credit,
    ...subdomains
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'WebMapTileServiceImageryProvider'
    userProviders(props, ctx, instance)
    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
