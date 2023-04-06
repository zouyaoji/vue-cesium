/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-08 18:37:31
 * @LastEditTime: 2022-04-11 23:02:05
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\utils\platform.ts
 */
export function platform() {
  const ua = navigator.userAgent
  const isWindowsPhone = /(?:Windows Phone)/.test(ua)
  const isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone
  const isAndroid = /(?:Android)/.test(ua)
  const isFireFox = /(?:Firefox)/.test(ua)
  const isChrome = /(?:Chrome|CriOS)/.test(ua)
  const isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua))
  const isPhone = /(?:iPhone)/.test(ua) && !isTablet
  const isPc = !isPhone && !isAndroid && !isSymbian
  const isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  return {
    isTablet: isTablet,
    isPhone: isPhone,
    isAndroid: isAndroid,
    isPc: isPc,
    isFireFox: isFireFox,
    isChrome: isChrome,
    isIOS,
    hasTouch: 'ontouchstart' in window || window.navigator.maxTouchPoints > 0
  }
}
