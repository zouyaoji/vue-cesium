import 'vue';
import { capitalize } from '@vue/shared';
import 'lodash/isUndefined';
import { camelCase } from 'lodash';

function getParentVm(vm) {
    if (vm.$parent !== void 0 && vm.$parent !== null) {
        return vm.$parent;
    }
    vm = vm.$.parent;
    while (vm !== void 0 && vm !== null) {
        if (vm.proxy !== void 0 && vm.proxy !== null) {
            return vm.proxy;
        }
        vm = vm.parent;
    }
}
function getNormalizedVNodes(vnodes) {
    const children = new Set();
    vnodes.forEach(vnode => {
        if (typeof vnode.type === 'symbol' && Array.isArray(vnode.children) === true) {
            vnode.children.forEach(child => {
                children.add(child);
            });
        }
        else {
            children.add(vnode);
        }
    });
    return Array.from(children);
}
function vmHasRouter(vm) {
    return vm.appContext.config.globalProperties.$router !== void 0;
}
function vmHasListener(vm, listenerName) {
    return vm.vnode.props !== null && vm.vnode.props[listenerName] !== void 0;
}
function getInstanceListener(vcInstance, listenerName) {
    const props = vcInstance.vnode.props;
    if (props === null) {
        return undefined;
    }
    const listener = props[`on${capitalize(listenerName)}`] || props[`on${capitalize(camelCase(listenerName))}`];
    return listener;
}
function $(ref) {
    return ref.value;
}
function getVcParentInstance(instance) {
    const parentInstance = instance.parent;
    return !parentInstance.cesiumClass && parentInstance.proxy.$options.name !== 'VcViewer'
        ? getVcParentInstance(parentInstance)
        : parentInstance;
}

export { $, getInstanceListener, getNormalizedVNodes, getParentVm, getVcParentInstance, vmHasListener, vmHasRouter };
