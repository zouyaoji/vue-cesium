/**
 * for
 * Billboard
 * Label
 * PointPrimitive
 * Polyline
 */

import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import useCommon from '../use-common'

export type CollectionItem = Cesium.Billboard | Cesium.Label | Cesium.PointPrimitive | Cesium.Polyline

export default function(props, ctx, vcInstance: VcComponentInternalInstance) {
  // state
  const commonState = useCommon(props, ctx, vcInstance)
  // methods
  vcInstance.createCesiumObject = async () => {
    const options = commonState.transformProps(props)
    const primitives = commonState.$services.primitives
    return primitives && primitives.add(options)
  }

  vcInstance.mount = async () => {
    const primitives = commonState.$services.primitives
    const collectionItem = vcInstance.cesiumObject as CollectionItem
    return primitives && primitives.contains(collectionItem)
  }
  vcInstance.unmount = async () => {
    const primitives = commonState.$services.primitives
    const collectionItem = vcInstance.cesiumObject as CollectionItem
    return primitives && !primitives.isDestroyed() && primitives.remove(collectionItem)
  }

  // expose public methods
  Object.assign(vcInstance.proxy, {
    createPromise: commonState.createPromise,
    load: commonState.load,
    unload: commonState.unload,
    reload: commonState.reload,
    getCesiumObject: () => vcInstance.cesiumObject
  })

  return {
    transformProps: commonState.transformProps,
    unwatchFns: commonState.unwatchFns,
    setPropsWatcher: commonState.setPropsWatcher
  }
}
