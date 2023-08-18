// eslint-disable-next-line vue/prefer-import-from-vue
import { camelize, capitalize, extend, hasOwn, hyphenate, isArray, isObject, isString, looseEqual, isFunction, isPlainObject } from '@vue/shared'
import { isUndefined, isNull, camelCase } from 'lodash-unified'
import { AnyFunction, AnyObject } from './types'

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
    const className = getObjClassName(obj[key], true)
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

function myInstanceof(left, right) {
  //基本数据类型直接返回false
  if (typeof left !== 'object' || left === null) return false
  //getProtypeOf是Object对象自带的一个方法，能够拿到参数的原型对象
  let proto = Object.getPrototypeOf(left)
  // eslint-disable-next-line no-constant-condition
  while (true) {
    //查找到尽头，还没找到
    if (proto === null) return false
    //找到相同的原型对象
    if (proto === right?.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}

export function getCesiumClassName(obj) {
  let result = undefined
  const constructorNames = Object.keys(Cesium)
  for (let i = 0; i < constructorNames.length; i++) {
    const className = constructorNames[i]

    if (myInstanceof(obj, Cesium[className])) {
      result = className
      break
    }
  }
  return result
}

export function getObjClassName(obj: AnyObject, findCesiumClass = false): string {
  if (obj && obj.constructor) {
    if (findCesiumClass) {
      const cesiumClassName = getCesiumClassName(obj)

      if (cesiumClassName) {
        return cesiumClassName
      }
    }

    return obj.constructor.name
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

export function getDefaultOptionByProps<T>(props, ignores: Array<string> = []) {
  const defaultOptions: T = {} as T
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

const addCustomProperty = (obj, options, ignores: Array<string> = []) => {
  for (const prop in options) {
    if (!obj[prop] && ignores.indexOf(prop) === -1) {
      obj[prop] = options[prop]
    }
  }
}

export const merge = <T extends Record<string, any>>(a: T, b: T) => {
  const keys = [...new Set([...Object.keys(a), ...Object.keys(b)])] as (keyof T)[]
  const obj = {} as T
  for (const key of keys) {
    obj[key] = b[key] ?? a[key]
  }
  return obj
}

export function isArrayLike(obj) {
  if (Array.isArray(obj)) return true
  if (typeof obj !== 'object' || !obj) return false
  const length = obj.length
  return typeof length === 'number' && length >= 0
}

// 深度合并
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key])
  }
  return src
}

export function isNumber(v) {
  return typeof v === 'number' && isFinite(v)
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
  addCustomProperty
}

export function getCesiumColor(inputColor, fallbackColor, timestamp?) {
  const { JulianDate, Color } = Cesium
  const now = JulianDate.now()
  if (inputColor) {
    if (typeof inputColor.getValue === 'function') {
      inputColor = inputColor.getValue(timestamp || now)
    }
    if (typeof inputColor === 'string') {
      return Color.fromCssColorString(inputColor)
    } else if (typeof inputColor === 'function') {
      return getCesiumColor(inputColor(timestamp), fallbackColor)
    } else {
      return inputColor
    }
  } else {
    return fallbackColor
  }
}

export function getCesiumValue(value, valueType, timestamp) {
  const { JulianDate, Property } = Cesium
  const now = JulianDate.now()
  if (!value) return value
  if (valueType) {
    if (value instanceof valueType) return value
    else {
      if (value instanceof Property && (value as any)._value instanceof valueType) return (value as any)._value
    }
  }
  if (isFunction(value.getValue)) return value.getValue(timestamp || now)
  return value
}
