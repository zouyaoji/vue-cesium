/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-06-01 18:06:23
 * @LastEditTime: 2022-03-06 20:15:51
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-graphics\index.ts
 */
import type { EntityEmitType, VcComponentInternalInstance, VcGraphics } from '@vue-cesium/utils/types'
import useCommon from '../use-common'
import { kebabCase } from '@vue-cesium/utils/util'
import { getVcParentInstance } from '@vue-cesium/utils/private/vm'
import type { VcEntityRef } from '@vue-cesium/components'

export default function (props, ctx, vcInstance: VcComponentInternalInstance) {
  // state
  vcInstance.cesiumEvents = ['definitionChanged']
  const commonState = useCommon(props, ctx, vcInstance)

  if (commonState === void 0) {
    return
  }
  // methods
  vcInstance.mount = async () => {
    const graphics = vcInstance.cesiumObject as VcGraphics

    if (graphics === undefined) {
      return false
    }

    const cmpNameArr = kebabCase(vcInstance.proxy?.$options.name || '').split('-')
    const emitType = (cmpNameArr.length === 3 ? `update:${cmpNameArr[2]}` : 'update:polylineVolume') as EntityEmitType
    const parentVM = getVcParentInstance(vcInstance).proxy as VcEntityRef
    return parentVM && parentVM.__updateGraphics?.(graphics, emitType)
  }
  vcInstance.unmount = async () => {
    const cmpNameArr = kebabCase(vcInstance.proxy?.$options.name || '').split('-')
    const emitType = (cmpNameArr.length === 3 ? `update:${cmpNameArr[2]}` : 'update:polylineVolume') as EntityEmitType
    const parentVM = getVcParentInstance(vcInstance).proxy as VcEntityRef
    return parentVM && parentVM.__updateGraphics?.(undefined, emitType)
  }
}
