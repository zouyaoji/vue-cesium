/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-10-09 17:40:53
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\build\paths.ts
 */
import path from 'path'

export const projRoot = path.resolve(__dirname, '../').replace(/\\/g, '/')
export const pkgRoot = path.resolve(projRoot, './packages').replace(/\\/g, '/')
export const compRoot = path.resolve(pkgRoot, './components').replace(/\\/g, '/')
export const composablesRoot = path.resolve(pkgRoot, './composables').replace(/\\/g, '/')
export const directiveRoot = path.resolve(pkgRoot, './directives').replace(/\\/g, '/')
export const localeRoot = path.resolve(pkgRoot, './locale').replace(/\\/g, '/')
export const sharedRoot = path.resolve(pkgRoot, './shared').replace(/\\/g, '/')
export const themeRoot = path.resolve(pkgRoot, './theme-default').replace(/\\/g, '/')
export const utilRoot = path.resolve(pkgRoot, './utils').replace(/\\/g, '/')
export const vcRoot = path.resolve(pkgRoot, './vue-cesium').replace(/\\/g, '/')
export const buildOutput = path.resolve(projRoot, './dist').replace(/\\/g, '/')
