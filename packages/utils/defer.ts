/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-04-06 16:00:16
 * @LastEditTime: 2022-04-06 16:00:25
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\utils\defer.ts
 */

/**
 * A function used to resolve a promise upon completion .
 * @callback defer.resolve
 *
 * @param {*} value The resulting value.
 */

/**
 * A function used to reject a promise upon failure.
 * @callback defer.reject
 *
 * @param {*} error The error.
 */

/**
 * An object which contains a promise object, and functions to resolve or reject the promise.
 *
 * @typedef {object} defer.deferred
 * @property {defer.resolve} resolve Resolves the promise when called.
 * @property {defer.reject} reject Rejects the promise when called.
 * @property {Promise} promise Promise object.
 */

/**
 * Creates a deferred object, containing a promise object, and functions to resolve or reject the promise.
 * @returns {defer.deferred} An object containing a promise and its resolve and reject functions.
 * @private
 */
function defer() {
  let resolve
  let reject
  const promise = new Promise((res, rej) => {
    resolve = res
    reject = rej
  })

  return {
    resolve,
    reject,
    promise
  }
}

export default defer
