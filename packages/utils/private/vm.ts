import { Ref } from 'vue'
import { AnyFunction, VcComponentInternalInstance } from '../types'
import { camelCase, capitalize } from '../util'

// used directly by docs too
export function getParentVm(vm) {
  if (vm.$parent !== void 0 && vm.$parent !== null) {
    return vm.$parent
  }

  vm = vm.$.parent

  while (vm !== void 0 && vm !== null) {
    if (vm.proxy !== void 0 && vm.proxy !== null) {
      return vm.proxy
    }

    vm = vm.parent
  }
}

// vnodes from rendered in advanced slots
export function getNormalizedVNodes(vnodes) {
  const children = new Set()

  vnodes.forEach(vnode => {
    if (typeof vnode.type === 'symbol' && Array.isArray(vnode.children) === true) {
      vnode.children.forEach(child => {
        children.add(child)
      })
    } else {
      children.add(vnode)
    }
  })

  return Array.from(children)
}

export function vmHasRouter(vm) {
  return vm.appContext.config.globalProperties.$router !== void 0
}

export function vmHasListener(vm, listenerName) {
  return vm.vnode.props !== null && vm.vnode.props[listenerName] !== void 0
}

export function getInstanceListener(vcInstance: VcComponentInternalInstance, listenerName: string) {
  const props = vcInstance.vnode.props
  if (props === null) {
    return undefined
  }
  const listener = props[`on${capitalize(listenerName)}`] || props[`on${capitalize(camelCase(listenerName))}`]
  return listener as AnyFunction<any>
}

/**
 * Unwraps refed value
 * @param ref Refed value
 */
export function $<T>(ref: Ref<T>) {
  return ref.value
}

export function getVcParentInstance(instance: VcComponentInternalInstance): VcComponentInternalInstance {
  const parentInstance = instance.parent as VcComponentInternalInstance
  return !parentInstance.cesiumClass && parentInstance.proxy.$options.name !== 'VcViewer' ? getVcParentInstance(parentInstance) : parentInstance
}
