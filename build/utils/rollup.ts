/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 14:11:08
 * @LastEditTime: 2022-01-18 11:32:15
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\build\utils\rollup.ts
 */
import { vcPackage } from './paths'
import { getPackageDependencies } from './pkg'

import type { OutputOptions, RollupBuild } from 'rollup'

export const generateExternal = async (options: { full: boolean }) => {
  return (id: string) => {
    const packages: string[] = ['vue', 'echarts']
    if (!options.full) {
      packages.push('vue-cesium/theme-default')
      // dependencies
      packages.push('@vue', ...getPackageDependencies(vcPackage))
    }

    return [...new Set(packages)].some(pkg => id === pkg || id.startsWith(`${pkg}/`))
  }
}

export function writeBundles(bundle: RollupBuild, options: OutputOptions[]) {
  return Promise.all(options.map(option => bundle.write(option)))
}

export function formatBundleFilename(name: string, minify: boolean, ext: string) {
  return `${name}${minify ? '.min' : ''}.${ext}`
}
