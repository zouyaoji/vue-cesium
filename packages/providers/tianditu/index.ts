import { createCommentVNode, defineComponent, getCurrentInstance } from 'vue'
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { userProviders } from '@vue-cesium/composables'
import { minimumLevel, maximumLevel, rectangle } from '@vue-cesium/utils/cesium-props'
import TiandituImageryProvider from './TiandituImageryProvider'
import { kebabCase } from '@vue-cesium/utils/util'

export default defineComponent({
  name: 'VcProviderImageryTianditu',
  props: {
    ...minimumLevel,
    ...maximumLevel,
    ...rectangle,
    mapStyle: String,
    token: String,
    protocol: {
      type: String,
      default: 'https'
    }
  },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup (props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'TiandituImageryProvider'
    const providersState = userProviders(props, ctx, instance)
    // methods
    instance.createCesiumObject = async () => {
      Cesium.TiandituImageryProvider = Cesium.TiandituImageryProvider || TiandituImageryProvider
      if (providersState.unwatchFns.length === 0) { providersState.setPropsWatcher(true) }
      const options = providersState.transformProps(props)
      return new Cesium.TiandituImageryProvider(options)
    }
    return () => createCommentVNode(kebabCase(instance.proxy.$options.name))
  }
})
