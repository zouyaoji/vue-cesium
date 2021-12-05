/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 10:47:28
 * @LastEditTime: 2021-12-05 09:46:35
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\build\utils\paths.ts
 */
import { resolve } from 'path'

export const projRoot = resolve(__dirname, '..', '..').replace(/\\/g, '/')
export const pkgRoot = resolve(projRoot, 'packages').replace(/\\/g, '/')
export const vcRoot = resolve(pkgRoot, 'vue-cesium').replace(/\\/g, '/')
export const compRoot = resolve(pkgRoot, 'components').replace(/\\/g, '/')
export const composableRoot = resolve(pkgRoot, 'composables').replace(/\\/g, '/')
export const directiveRoot = resolve(pkgRoot, 'directives').replace(/\\/g, '/')
export const localeRoot = resolve(pkgRoot, 'locale').replace(/\\/g, '/')
export const sharedRoot = resolve(pkgRoot, 'shared').replace(/\\/g, '/')
export const themeRoot = resolve(pkgRoot, 'theme-default').replace(/\\/g, '/')
export const utilRoot = resolve(pkgRoot, 'utils').replace(/\\/g, '/')
export const docRoot = resolve(projRoot, 'docs').replace(/\\/g, '/')

/** dist */
export const buildOutput = resolve(projRoot, 'dist').replace(/\\/g, '/')
/** dist/element-plus */
export const vcOutput = resolve(buildOutput, 'vue-cesium').replace(/\\/g, '/')

export const projPackage = resolve(projRoot, 'package.json').replace(/\\/g, '/')
export const compPackage = resolve(compRoot, 'package.json').replace(/\\/g, '/')
export const themePackage = resolve(themeRoot, 'package.json').replace(/\\/g, '/')
export const composablePackage = resolve(composableRoot, 'package.json').replace(/\\/g, '/')
export const localePackage = resolve(localeRoot, 'package.json').replace(/\\/g, '/')
export const directivePackage = resolve(directiveRoot, 'package.json').replace(/\\/g, '/')
export const vcPackage = resolve(vcRoot, 'package.json').replace(/\\/g, '/')
export const utilPackage = resolve(utilRoot, 'package.json').replace(/\\/g, '/')
export const docPackage = resolve(docRoot, 'package.json').replace(/\\/g, '/')
