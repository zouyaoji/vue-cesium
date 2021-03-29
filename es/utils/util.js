import { getCurrentInstance } from 'vue';
import { hyphenate, isFunction, isPlainObject } from '@vue/shared';
export { camelize, capitalize, extend, hasOwn, isArray, isFunction, isObject, isPlainObject, isString, looseEqual } from '@vue/shared';
import isUndefined from 'lodash/isUndefined';
export { default as isUndefined } from 'lodash/isUndefined';
export { camelCase } from 'lodash';

function useGlobalConfig() {
    const vm = getCurrentInstance();
    if ('$VueCesium' in vm.proxy) {
        return vm.proxy.$VueCesium;
    }
    return {};
}
function getFileNameByPath(path) {
    const posStart = path.lastIndexOf('/');
    const posEnd = path.lastIndexOf('.');
    return path.substring(posStart + 1, posEnd);
}
function dirname(path) {
    if (typeof path !== 'string')
        path = path + '';
    if (path.length === 0)
        return '.';
    let code = path.charCodeAt(0);
    const hasRoot = code === 47;
    let end = -1;
    let matchedSlash = true;
    for (let i = path.length - 1; i >= 1; --i) {
        code = path.charCodeAt(i);
        if (code === 47) {
            if (!matchedSlash) {
                end = i;
                break;
            }
        }
        else {
            matchedSlash = false;
        }
    }
    if (end === -1)
        return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) {
        return '/';
    }
    return path.slice(0, end);
}
function removeEmpty(obj) {
    const finalObj = {};
    Object.keys(obj).forEach(key => {
        if (obj[key] && typeof obj[key] === 'object') {
            const nestedObj = removeEmpty(obj[key]);
            if (Object.keys(nestedObj).length) {
                finalObj[key] = nestedObj;
            }
        }
        else if (obj[key] !== '' && obj[key] !== undefined && obj[key] !== null) {
            finalObj[key] = obj[key];
        }
    });
    return finalObj;
}
function isEmptyObj(obj) {
    if (isUndefined(obj)) {
        return true;
    }
    if (obj instanceof Element) {
        return false;
    }
    const arr = Object.keys(obj);
    return arr.length === 0;
}
const kebabCase = hyphenate;
function getObjClassName(obj) {
    if (obj && obj.constructor) {
        const strFun = obj.constructor.toString();
        let className = strFun.substr(0, strFun.indexOf('('));
        className = className.replace('function', '');
        return className.replace(/(^\s*)|(\s*$)/gi, '');
    }
    return typeof obj;
}
function lnglatValidator(longitude, latitude) {
    const longreg = /^(-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,15})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,15}|180)$/;
    if (!longreg.test(longitude.toString())) {
        return false;
    }
    const latreg = /^(-|\+)?([0-8]?\d{1}\.\d{0,15}|90\.0{0,15}|[0-8]?\d{1}|90)$/;
    if (!latreg.test(latitude.toString())) {
        return false;
    }
    return true;
}
const getDefaultOptionByProps = (props, ignores = []) => {
    const defaultOptions = {};
    Object.keys(props).forEach(key => {
        if (ignores.indexOf(key) === -1) {
            const value = props[key];
            defaultOptions[key] = isFunction(value)
                ? undefined
                : isPlainObject(value)
                    ? isFunction(value.default)
                        ? value.default()
                        : value.default
                    : value;
        }
    });
    return defaultOptions;
};

export { dirname, getDefaultOptionByProps, getFileNameByPath, getObjClassName, isEmptyObj, kebabCase, lnglatValidator, removeEmpty, useGlobalConfig };
