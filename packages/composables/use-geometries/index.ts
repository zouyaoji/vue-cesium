import { VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import useCommon from '../use-common'
import { getVcParentInstance } from '@vue-cesium/utils/private/vm'

export default function(props, ctx, vcInstance: VcComponentInternalInstance) {
  // state
  vcInstance.cesiumEvents = []
  vcInstance.renderByParent = true
  const commonState = useCommon(props, ctx, vcInstance)

  // methods
  vcInstance.mount = async () => {
    const geometry = vcInstance.cesiumObject as Cesium.Geometry
    const parentVM = getVcParentInstance(vcInstance).proxy as VcComponentPublicInstance
    return parentVM.__updateGeometry(geometry)
  }

  return {
    transformProps: commonState.transformProps,
    unwatchFns: commonState.unwatchFns,
    setPropsWatcher: commonState.setPropsWatcher
  }
}
