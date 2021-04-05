import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { userProviders } from '@vue-cesium/composables'
import {
  token,
  tileDiscardPolicy,
  layers,
  enablePickFeatures,
  rectangle,
  tilingScheme,
  ellipsoid,
  credit,
  tileWidth,
  tileHeight,
  maximumLevel } from '@vue-cesium/utils/cesium-props'
export default defineComponent({
  name: 'VcProviderImageryArcgisMapserver',
  props: {
    url: {
      type: String,
      default: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
    },
    ...token,
    ...tileDiscardPolicy,
    usePreCachedTilesIfAvailable: {
      type: Boolean,
      default: true
    },
    ...layers,
    ...enablePickFeatures,
    ...rectangle,
    ...tilingScheme,
    ...ellipsoid,
    ...credit,
    ...tileWidth,
    ...tileHeight,
    ...maximumLevel
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'ArcGisMapServerImageryProvider'
    userProviders(props, ctx, instance)
    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
