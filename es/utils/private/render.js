import { h, withDirectives } from 'vue';

function hSlot(slot, otherwise) {
    return slot !== void 0 ? slot() : otherwise;
}
function hUniqueSlot(slot, otherwise) {
    return slot !== void 0 ? slot().slice() : otherwise;
}
function hMergeSlot(slot, source) {
    return slot !== void 0 ? source.concat(slot()) : source;
}
function hMergeSlotSafely(slot, source) {
    if (slot === void 0) {
        return source;
    }
    return source !== void 0 ? source.concat(slot()) : slot();
}
function hDir(tag, data, children, key, condition, getDirsFn) {
    data.key = key + condition;
    const vnode = h(tag, data, children);
    return condition === true ? withDirectives(vnode, getDirsFn()) : vnode;
}

export { hDir, hMergeSlot, hMergeSlotSafely, hSlot, hUniqueSlot };
