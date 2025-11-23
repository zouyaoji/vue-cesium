/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-07 23:36:43
 * @LastEditTime: 2021-11-20 16:06:29
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-primitive-collection-items\index.ts
 */
/**
 * for
 * Billboard
 * Label
 * PointPrimitive
 * Polyline
 */

import type { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import useCommon from '../use-common'

export type CollectionItem = Cesium.Billboard | Cesium.Label | Cesium.PointPrimitive | Cesium.Polyline

export default function (props, ctx, vcInstance: VcComponentInternalInstance) {
  // state
  const commonState = useCommon(props, ctx, vcInstance)
  if (commonState === void 0) {
    return
  }
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

  return {
    transformProps: commonState.transformProps,
    unwatchFns: commonState.unwatchFns,
    setPropsWatcher: commonState.setPropsWatcher,
    $services: commonState.$services
  }
}
