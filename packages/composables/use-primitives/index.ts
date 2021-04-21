/**
 * for
 * ClassificationPrimitive
 * GroundPolylinePrimitive
 * GroundPrimitive
 * Model
 * Cesium3DTileset
 * Primitive
 * ParticleSystem
 */
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import useCommon from '../use-common'
import { mergeDescriptors } from '@vue-cesium/utils/merge-descriptors'
import { provide, ref, reactive } from 'vue'
import { vcKey } from '@vue-cesium/utils/config'
import { getInstanceListener } from '@vue-cesium/utils/private/vm'

export default function (props, ctx, vcInstance: VcComponentInternalInstance) {
  // state
  vcInstance.cesiumEvents = ['readyPromise']
  const commonState = useCommon(props, ctx, vcInstance)
  const childCount = ref(0)
  const instances = ref([])
  // methods
  vcInstance.mount = async () => {
    const primitives = commonState.$services.primitives
    const primitive = vcInstance.cesiumObject as Cesium.Primitive
    primitive.readyPromise && primitive.readyPromise.then(e => {
      const listener = getInstanceListener(vcInstance, 'readyPromise')
      listener && ctx.emit('readyPromise', e)
    })
    const object = primitives && primitives.add(primitive)
    return Cesium.defined(object)
  }
  vcInstance.unmount = async () => {
    childCount.value = 0
    instances.value = []
    const primitives = commonState.$services.primitives
    const primitive = vcInstance.cesiumObject as Cesium.Primitive
    return primitives && primitives.remove(primitive)
  }

  const updateGeometryInstances = (instance, index) => {
    instances.value.push(instance)
    if (index === childCount.value - 1) {
      const listener = getInstanceListener(vcInstance, 'update:geometryInstances')
      if (listener) {
        this.$emit('update:geometryInstances', instances)
      } else {
        const primitive = vcInstance.cesiumObject as Cesium.Primitive
        (primitive as any).geometryInstances = index === 0 ? instance : instances
      }
    }
    return true
  }

  const getServices = () => {
    return mergeDescriptors(commonState.getServices(), {
      get primitive () {
        return vcInstance.cesiumObject as Cesium.Primitive
      }
    })
  }

  // provide
  provide(vcKey, getServices())

  // expose public methods
  Object.assign(vcInstance.proxy, {
    createPromise: commonState.createPromise,
    load: commonState.load,
    unload: commonState.unload,
    reload: commonState.reload,
    getCesiumObject: () => vcInstance.cesiumObject,

    // private but needed by VcGeometryXXX
    __updateGeometryInstances: updateGeometryInstances
  })

  return {
    transformProps: commonState.transformProps,
    unwatchFns: commonState.unwatchFns,
    setPropsWatcher: commonState.setPropsWatcher
  }
}
