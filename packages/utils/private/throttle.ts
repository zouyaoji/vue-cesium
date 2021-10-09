/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:21:02
 * @LastEditTime: 2021-10-02 23:16:17
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\utils\private\throttle.ts
 */
export default function (fn, limit = 250) {
  let wait = false,
    result

  return function (this /* ...args */) {
    if (wait === false) {
      wait = true
      setTimeout(() => {
        wait = false
      }, limit)
      // eslint-disable-next-line prefer-rest-params
      result = fn.apply(this, arguments)
    }

    return result
  }
}
