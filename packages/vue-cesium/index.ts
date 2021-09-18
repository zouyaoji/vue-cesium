/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-09-17 14:23:37
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\vue-cesium\index.ts
 */
import installer from './defaults'
export * from '@vue-cesium/components'
export * from '@vue-cesium/directives'
export * from '@vue-cesium/composables'
export * from '@vue-cesium/shared'

export { default as makeInstaller } from './make-installer'
export { default } from './defaults'

export const install = installer.install
export const version = installer.version
