import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { userProviders } from '@vue-cesium/composables'
import {
  url,
  layers,
  enablePickFeatures,
  getFeatureInfoFormats,
  rectangle,
  tilingScheme,
  ellipsoid,
  tileWidth,
  tileHeight,
  minimumLevel,
  maximumLevel,
  credit,
  subdomains,
  clock,
  times
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'

export default defineComponent({
  name: 'VcProviderImageryWms',
  props: {
    ...url,
    ...layers,
    parameters: Object,
    getFeatureInfoParameters: Object,
    ...enablePickFeatures,
    ...getFeatureInfoFormats,
    ...rectangle,
    ...tilingScheme,
    ...ellipsoid,
    ...tileWidth,
    ...tileHeight,
    ...minimumLevel,
    ...maximumLevel,
    crs: String,
    srs: String,
    ...credit,
    ...subdomains,
    ...clock,
    ...times,
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'readyPromise'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'WebMapServiceImageryProvider'
    userProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
