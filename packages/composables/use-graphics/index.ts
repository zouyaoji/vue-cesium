import { EntityEmitType, VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { useCommon } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'

export default function(props, ctx, vcInstance: VcComponentInternalInstance) {
  // state
  const commonState = useCommon(props, ctx, vcInstance)
  const { $services } = commonState
  // methods
  vcInstance.mount = async () => {
    const { cesiumObject } = vcInstance
    const { entityViewModel } = $services
    const cmpNameArr = kebabCase(vcInstance.proxy.$options.name).split('-')
    const emitType = (cmpNameArr.length === 3 ? `update:${cmpNameArr[2]}` : 'update:polylineVolume') as EntityEmitType
    return entityViewModel && entityViewModel.__updateGraphics(cesiumObject, emitType)
  }
  vcInstance.unmount = async () => {
    const { entityViewModel } = $services
    const cmpNameArr = kebabCase(vcInstance.proxy.$options.name).split('-')
    const emitType = (cmpNameArr.length === 3 ? `update:${cmpNameArr[2]}` : 'update:polylineVolume') as EntityEmitType
    return (
      entityViewModel && entityViewModel.__updateGraphics(undefined, emitType)
    )
  }

  return {
    createPromise: commonState.createPromise,
    load: commonState.load,
    unload: commonState.unload,
    reload: commonState.reload,
    getCesiumObject: () => vcInstance.cesiumObject,
  }
}
