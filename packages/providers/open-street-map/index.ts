import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { userProviders } from '@vue-cesium/composables'
import {
  fileExtension,
  rectangle,
  minimumLevel,
  maximumLevel,
  ellipsoid
} from '@vue-cesium/utils/cesium-props'

export default defineComponent({
  name: 'VcProviderImageryOpenstreetmap',
  props: {
    url: {
      type: String,
      default: 'https://a.tile.openstreetmap.org'
    },
    ...fileExtension,
    ...rectangle,
    ...minimumLevel,
    ...maximumLevel,
    ...ellipsoid,
    credit: {
      type: [String, Object],
      default: 'MapQuest, Open Street Map and contributors, CC-BY-SA'
    },
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'OpenStreetMapImageryProvider'
    userProviders(props, ctx, instance)
    return () => createCommentVNode(instance.proxy.$options.name)
  }
})
