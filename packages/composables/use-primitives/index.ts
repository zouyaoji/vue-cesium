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
import type { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import useCommon from '../use-common'
import { mergeDescriptors } from '@vue-cesium/utils/merge-descriptors'
import { provide, ref } from 'vue'
import { vcKey } from '@vue-cesium/utils/config'
import { getInstanceListener } from '@vue-cesium/utils/private/vm'
import { isArray } from '@vue-cesium/utils/util'
import { compareCesiumVersion } from '@vue-cesium/utils/cesium-helpers'

export default function (props, ctx, vcInstance: VcComponentInternalInstance) {
  // state
  const commonState = useCommon(props, ctx, vcInstance)
  if (commonState === void 0) {
    return
  }

  const { emit } = ctx
  const childCount = ref(0)
  const instances = ref<Array<Cesium.GeometryInstance>>([])
  // methods
  vcInstance.createCesiumObject = async () => {
    const options = commonState.transformProps(props)
    if (!options.asynchronous) {
      await Cesium[vcInstance.cesiumClass].initializeTerrainHeights?.()
    }
    if (props.geometryInstances) {
      if (isArray(props.geometryInstances)) {
        instances.value.push(...props.geometryInstances)
        childCount.value += props.geometryInstances.length
      } else {
        childCount.value += 1
        instances.value.push(props.geometryInstances)
      }
    }

    if (
      (vcInstance.cesiumClass === 'Cesium3DTileset' || vcInstance.cesiumClass === 'I3SDataProvider') &&
      compareCesiumVersion(Cesium.VERSION, '1.104')
    ) {
      try {
        if (Cesium.defined(props.assetId) && vcInstance.cesiumClass === 'Cesium3DTileset') {
          return await Cesium[vcInstance.cesiumClass].fromIonAssetId(props.assetId, options)
        } else {
          return await Cesium[vcInstance.cesiumClass].fromUrl(props.url, options)
        }
      } catch (error) {
        commonState.logger.error(`Failed to load tileset: ${error}`)
      }
    } else {
      return new Cesium[vcInstance.cesiumClass](options)
    }
  }

  vcInstance.mount = async () => {
    const primitives = commonState.$services.primitives
    const primitive = vcInstance.cesiumObject as Cesium.Primitive
    // // TODO: 1.104+ 版本废弃了 readyPromise
    primitive?.readyPromise?.then(e => {
      const listener = getInstanceListener(vcInstance, 'readyPromise')
      listener && emit('readyPromise', e, commonState.$services.viewer, vcInstance.proxy as VcComponentPublicInstance)
    })
    ;(primitive as any)._vcParent = primitives
    const object = primitives && primitives.add(primitive)
    if (vcInstance.cesiumClass === 'ParticleSystem') {
      const intervalId = setInterval(() => {
        if (Cesium.defined(object._billboardCollection)) {
          object._billboardCollection._vcParent = object
          clearInterval(intervalId)
        }
      }, 500)
    }
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
    // Todo 同时改 geometry 的多个属性导致 bug
    // 如可视域分析创建 VcGeometryEllipsoidOutline 修改 radii 和 innerRadii 有问题
    instances.value.push(instance)
    if (index === childCount.value - 1) {
      const listener = getInstanceListener(vcInstance, 'update:geometryInstances')
      if (listener) {
        ctx.emit('update:geometryInstances', instances.value)
      } else {
        const primitive = vcInstance.cesiumObject as Cesium.Primitive
        ;(primitive as any).geometryInstances = index === 0 ? instance : instances.value
      }
    }
    return true
  }

  const removeGeometryInstances = instance => {
    const index = instances.value.indexOf(instance)
    instances.value.splice(index, 1)
    return true
  }

  const getServices = () => {
    return mergeDescriptors(commonState.getServices(), {
      get primitive() {
        return vcInstance.cesiumObject as Cesium.Primitive
      }
    })
  }

  // provide
  provide(vcKey, getServices())

  // expose public methods
  Object.assign(vcInstance.proxy, {
    // private but needed by VcGeometryInstance
    __updateGeometryInstances: updateGeometryInstances,
    __removeGeometryInstances: removeGeometryInstances,
    __childCount: childCount
  })

  return {
    transformProps: commonState.transformProps,
    transformProp: commonState.transformProp,
    unwatchFns: commonState.unwatchFns,
    setPropsWatcher: commonState.setPropsWatcher,
    $services: commonState.$services
  }
}
