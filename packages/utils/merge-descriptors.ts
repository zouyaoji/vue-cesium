/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:21:02
 * @LastEditTime: 2021-10-02 23:27:05
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\utils\merge-descriptors.ts
 */
/*!
 * merge-descriptors
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module variables.
 * @private
 */

const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Merge the property descriptors of `src` into `dest`
 *
 * @param {object} dest Object to add descriptors to
 * @param {object} src Object to clone descriptors from
 * @param {boolean} [redefine=true] Redefine `dest` properties with `src` properties
 * @returns {object} Reference to dest
 * @public
 */

function merge(dest, src, redefine) {
  if (!dest) {
    throw new TypeError('argument dest is required')
  }

  if (!src) {
    throw new TypeError('argument src is required')
  }

  if (redefine === undefined) {
    // Default to true
    redefine = true
  }

  Object.getOwnPropertyNames(src).forEach((name) => {
    if (!redefine && hasOwnProperty.call(dest, name)) {
      // Skip desriptor
      return
    }

    // Copy descriptor
    const descriptor = Object.getOwnPropertyDescriptor(src, name)
    Object.defineProperty(dest, name, descriptor!)
  })

  return dest
}

/**
 * @param {...object} args
 * @returns {object}
 */
export function mergeDescriptors(...args: any[]) {
  let redefine: boolean
  if (typeof args[args.length - 1] !== 'object') {
    redefine = args.pop()
  }

  return args.slice(1).reduce((dest, src, i) => merge(dest, src, redefine), args[0])
}
