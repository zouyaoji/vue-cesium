/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:21:02
 * @LastEditTime: 2021-10-02 10:54:02
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\utils\private\portal.ts
 */
import { getParentVm } from './vm'

export const portalList: Array<any> = []

export function getPortalVm(el) {
  return portalList.find(vm => vm.__vcPortalInnerRef.value !== null && vm.__vcPortalInnerRef.value.contains(el))
}

export function closePortalMenus(vm, evt) {
  do {
    if (vm.$options.name === 'VcMenu') {
      vm.hide(evt)

      // is this a point of separation?
      if (vm.$props.separateClosePopup === true) {
        return getParentVm(vm)
      }
    } else if (vm.__vcPortalInnerRef !== void 0) {
      // treat it as point of separation if parent is QPopupProxy
      // (so mobile matches desktop behavior)
      // and hide it too
      const parent = getParentVm(vm)

      if (parent !== void 0 && parent.$options.name === 'VcPopupProxy') {
        vm.hide(evt)
        return parent
      } else {
        return vm
      }
    }

    vm = getParentVm(vm)
  } while (vm !== void 0 && vm !== null)
}

export function closePortals(vm, evt, depth) {
  while (depth !== 0 && vm !== void 0 && vm !== null) {
    if (vm.__vcPortalInnerRef !== void 0) {
      depth--

      if (vm.$options.name === 'VcMenu') {
        vm = closePortalMenus(vm, evt)
        continue
      }

      vm.hide(evt)
    }

    vm = getParentVm(vm)
  }
}
