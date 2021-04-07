import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { userProviders } from '@vue-cesium/composables'
import {
  url,
  subdomains,
  credit,
  minimumLevel,
  maximumLevel,
  rectangle,
  tilingScheme,
  ellipsoid,
  tileWidth,
  tileHeight,
  getFeatureInfoFormats,
  enablePickFeatures
} from '@vue-cesium/utils/cesium-props'

export default defineComponent({
  name: 'VcProviderImageryUrltemplate',
  props: {
    ...url,
    pickFeaturesUrl: [String, Object],
    urlSchemeZeroPadding: Object,
    ...subdomains,
    ...credit,
    ...minimumLevel,
    ...maximumLevel,
    ...rectangle,
    ...tilingScheme,
    ...ellipsoid,
    ...tileWidth,
    ...tileHeight,
    hasAlphaChannel: {
      type: Boolean,
      default: true
    },
    ...getFeatureInfoFormats,
    ...enablePickFeatures,
    customTags: Object
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'UrlTemplateImageryProvider'
    userProviders(props, ctx, instance)
    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
