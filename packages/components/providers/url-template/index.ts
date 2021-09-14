import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useProviders } from '@vue-cesium/composables'
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
  enablePickFeatures,
  projectionTransforms
} from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'

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
    customTags: Object,
    ...projectionTransforms
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'readyPromise'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'UrlTemplateImageryProvider'
    useProviders(props, ctx, instance)
    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
