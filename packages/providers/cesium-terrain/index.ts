import { createCommentVNode, defineComponent, getCurrentInstance, PropType } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { userProviders } from '@vue-cesium/composables'
import { ellipsoid, credit } from '@vue-cesium/utils/cesium-props'
import { kebabCase } from '@vue-cesium/utils/util'
export default defineComponent({
  name: 'VcProviderTerrainCesium',
  props: {
    url: [String, Object] as PropType<string | Promise<string> | Promise<Cesium.Resource> | Cesium.Resource>,
    requestVertexNormals: {
      type: Boolean,
      default: false
    },
    requestWaterMask: {
      type: Boolean,
      default: false
    },
    requestMetadata: {
      type: Boolean,
      default: true
    },
    ...ellipsoid,
    ...credit
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'readyPromise'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'CesiumTerrainProvider'
    const providersState = userProviders(props, ctx, instance)
    // methods
    instance.createCesiumObject = async () => {
      if (providersState.unwatchFns.length === 0) {
        providersState.setPropsWatcher(true)
      }
      const options = providersState.transformProps(props)
      return Cesium.defined(options.url)
        ? new Cesium.CesiumTerrainProvider(options as any)
        : Cesium.createWorldTerrain({ requestVertexNormals: options.requestVertexNormals, requestWaterMask: options.requestWaterMask })
    }
    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
