/*!
 * merge-descriptors
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
const hasOwnProperty = Object.prototype.hasOwnProperty;
function merge(dest, src, redefine) {
    if (!dest) {
        throw new TypeError('argument dest is required');
    }
    if (!src) {
        throw new TypeError('argument src is required');
    }
    if (redefine === undefined) {
        redefine = true;
    }
    Object.getOwnPropertyNames(src).forEach(function forEachOwnPropertyName(name) {
        if (!redefine && hasOwnProperty.call(dest, name)) {
            return;
        }
        const descriptor = Object.getOwnPropertyDescriptor(src, name);
        Object.defineProperty(dest, name, descriptor);
    });
    return dest;
}
function mergeDescriptors(...args) {
    let redefine;
    if (typeof args[args.length - 1] !== 'object') {
        redefine = args.pop();
    }
    return args.slice(1).reduce((dest, src, i) => merge(dest, src, redefine), args[0]);
}

export { mergeDescriptors };
