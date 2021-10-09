/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-06-01 18:06:23
 * @LastEditTime: 2021-10-08 11:42:42
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-graphics\index.ts
 */
import { EntityEmitType, VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import useCommon from '../use-common'
import { kebabCase } from '@vue-cesium/utils/util'
import { getVcParentInstance } from '@vue-cesium/utils/private/vm'

export default function (props, ctx, vcInstance: VcComponentInternalInstance) {
  // state
  vcInstance.cesiumEvents = ['definitionChanged']
  const commonState = useCommon(props, ctx, vcInstance)
  // methods
  vcInstance.mount = async () => {
    const { cesiumObject } = vcInstance
    if (cesiumObject === undefined) {
      return false
    }
    const cmpNameArr = kebabCase(vcInstance.proxy?.$options.name || '').split('-')
    const emitType = (cmpNameArr.length === 3 ? `update:${cmpNameArr[2]}` : 'update:polylineVolume') as EntityEmitType
    const parentVM = getVcParentInstance(vcInstance).proxy as VcComponentPublicInstance
    return parentVM && parentVM.__updateGraphics?.(cesiumObject, emitType)
  }
  vcInstance.unmount = async () => {
    const cmpNameArr = kebabCase(vcInstance.proxy?.$options.name || '').split('-')
    const emitType = (cmpNameArr.length === 3 ? `update:${cmpNameArr[2]}` : 'update:polylineVolume') as EntityEmitType
    const parentVM = getVcParentInstance(vcInstance).proxy as VcComponentPublicInstance
    return parentVM && parentVM.__updateGraphics?.(undefined, emitType)
  }
}
