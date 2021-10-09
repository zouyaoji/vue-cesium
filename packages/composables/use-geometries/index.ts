/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-06-01 18:06:23
 * @LastEditTime: 2021-10-02 11:00:04
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-geometries\index.ts
 */
import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import useCommon from '../use-common'
import { getVcParentInstance } from '@vue-cesium/utils/private/vm'

export default function (props, ctx, vcInstance: VcComponentInternalInstance) {
  // state
  vcInstance.cesiumEvents = []
  vcInstance.renderByParent = true
  const commonState = useCommon(props, ctx, vcInstance)

  if (commonState === void 0) {
    return
  }

  // methods
  vcInstance.mount = async () => {
    const geometry = vcInstance.cesiumObject as Cesium.Geometry
    const parentVM = getVcParentInstance(vcInstance).proxy as VcComponentPublicInstance
    return parentVM.__updateGeometry?.(geometry)
  }

  return {
    transformProps: commonState.transformProps,
    unwatchFns: commonState.unwatchFns,
    setPropsWatcher: commonState.setPropsWatcher
  }
}
