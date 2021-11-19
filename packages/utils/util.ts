import { getCurrentInstance } from 'vue'
import { camelize, capitalize, extend, hasOwn, hyphenate, isArray, isObject, isString, looseEqual, isFunction, isPlainObject } from '@vue/shared'
import isUndefined from 'lodash/isUndefined'
import isNull from 'lodash/isNull'
import camelCase from 'lodash/camelCase'
import { AnyFunction, AnyObject } from './types'

export function useGlobalConfig() {
  const vm: any = getCurrentInstance()
  if ('$VueCesium' in vm.proxy) {
    return vm.proxy.$VueCesium
  }
  return {}
}

export function getFileNameByPath(path: string): string {
  const posStart = path.lastIndexOf('/')
  const posEnd = path.lastIndexOf('.')
  return path.substring(posStart + 1, posEnd)
}

export function dirname(path: string): string {
  if (typeof path !== 'string') path = path + ''
  if (path.length === 0) return '.'
  let code = path.charCodeAt(0)
  const hasRoot = code === 47 /* / */
  let end = -1
  let matchedSlash = true
  for (let i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i)
    if (code === 47 /* / */) {
      if (!matchedSlash) {
        end = i
        break
      }
    } else {
      // We saw the first non-path separator
      matchedSlash = false
    }
  }

  if (end === -1) return hasRoot ? '/' : '.'
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/'
  }
  return path.slice(0, end)
}

export function removeEmpty(obj: any): AnyObject {
  const proto = Object.getPrototypeOf(obj)
  const finalObj: AnyObject = {}
  Object.setPrototypeOf(finalObj, proto)
  Object.keys(obj).forEach(key => {
    const className = getObjClassName(obj[key])
    if ((obj[key] && isArray(obj[key])) || obj[key] instanceof Element) {
      finalObj[key] = obj[key]
    } else if (obj[key] && typeof obj[key] === 'object' && !Cesium[className]) {
      // Do not process cesium objects
      const nestedObj = removeEmpty(obj[key])
      if (Object.keys(nestedObj).length) {
        finalObj[key] = nestedObj
      }
    } else if (obj[key] !== '' && obj[key] !== undefined && obj[key] !== null) {
      finalObj[key] = obj[key]
    }
  })
  return finalObj
}

export function isEmptyObj(obj: unknown): boolean {
  if (isUndefined(obj) || isNull(obj)) {
    return true
  }

  if (obj instanceof Element) {
    return false
  }

  const arr = Object.keys(obj as any)
  return arr.length === 0
}

export const kebabCase = hyphenate

export function getObjClassName(obj: AnyObject): string {
  if (obj && obj.constructor) {
    const strFun = obj.constructor.toString()
    let className = strFun.substr(0, strFun.indexOf('('))
    className = className.replace('function', '')
    return className.replace(/(^\s*)|(\s*$)/gi, '')
  }
  return typeof obj
}

/**
 * 验证是否是经纬度。
 * @param {Number} longitude
 * @param {Number} latitude
 * @returns {Boolean}
 */
export function lnglatValidator(longitude: number, latitude: number) {
  // 经度，整数部分为0-180小数部分为0到6位
  const longreg = /^(-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,15})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,15}|180)$/
  if (!longreg.test(longitude.toString())) {
    return false
  } // 纬度,整数部分为0-90小数部分为0到6位
  const latreg = /^(-|\+)?([0-8]?\d{1}\.\d{0,15}|90\.0{0,15}|[0-8]?\d{1}|90)$/
  if (!latreg.test(latitude.toString())) {
    return false
  }
  return true
}

export function defaultValue(a, b) {
  if (a !== undefined && a !== null) {
    return a
  }
  return b
}

export function inherit(base, derived) {
  function F() {
    //
  }
  F.prototype = base.prototype
  derived.prototype = new F()
  derived.prototype.constructor = derived
}

const getDefaultOptionByProps = (props: AnyObject, ignores: Array<string> = []) => {
  const defaultOptions: AnyObject = {}
  Object.keys(props).forEach(key => {
    if (ignores.indexOf(key) === -1) {
      const value: {
        default?: AnyFunction<any> | AnyObject
      } = props[key]
      defaultOptions[key] = isFunction(value)
        ? undefined
        : isPlainObject(value)
        ? isFunction(value.default)
          ? value.default()
          : value.default
        : value
    }
  })

  return defaultOptions
}

const addCustomProperty = (obj, options) => {
  for (const prop in options) {
    if (!obj[prop]) {
      obj[prop] = options[prop]
    }
  }
}

// reexport from lodash & vue shared
export {
  hasOwn,
  // isEmpty,
  // isEqual,
  isObject,
  isPlainObject,
  isArray,
  isString,
  capitalize,
  camelize,
  looseEqual,
  extend,
  isUndefined,
  isFunction,
  camelCase,
  getDefaultOptionByProps,
  addCustomProperty
}
