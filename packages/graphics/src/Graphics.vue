<script lang='ts'>
import { Cesium as CesiumNative, VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, inject } from 'vue'
import { useCommon } from '@vue-cesium/composables'
export default defineComponent({
  name: 'VcGraphics',
  props: { },
  emits: ['beforeLoad', 'ready', 'destroyed'],
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcGraphics'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    // methods
    instance.createCesiumObject = async () => {
      return true
    }
    instance.mount = async () => {
      return true
    }
    instance.unmount = async () => {
      return true
    }

    return {
      createPromise: commonState.createPromise,
      load: commonState.load,
      unload: commonState.unload,
      reload: commonState.reload,
      renderVNode: commonState.renderVNode,
      getCesiumObject: () => instance.cesiumObject
    }
  },
  render() {
    return this.renderVNode()
  },
  stubVNode: {
    comment(instance: VcComponentInternalInstance) {
      return instance.proxy.$options.name
    }
  }
})
</script>
