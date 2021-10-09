/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-06 09:21:02
 * @LastEditTime: 2021-10-02 23:15:01
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\utils\private\key-composition.ts
 */
let lastKeyCompositionStatus = false

export function onKeyDownComposition(evt) {
  lastKeyCompositionStatus = evt.isComposing === true
}

export function shouldIgnoreKey(evt) {
  return lastKeyCompositionStatus === true || evt !== Object(evt) || evt.isComposing === true || evt.qKeyEvent === true
}

export function isKeyCode(evt, keyCodes) {
  return shouldIgnoreKey(evt) === true ? false : ([] as any).concat(keyCodes).includes(evt.keyCode)
}
