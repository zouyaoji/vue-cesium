/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-06 17:43:48
 * @LastEditTime: 2022-01-18 10:29:45
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\build\plugins\size-reporter.ts
 */
import { cyan, bold, yellow, green } from 'chalk'
import { command } from '../utils/log'
import type { FileSizeReporter } from 'rollup-plugin-filesize'

export const reporter: FileSizeReporter = (opt, outputOptions, info) => {
  return command(`${cyan(bold(info.fileName))}: bundle size ${yellow(info.bundleSize)} -> minified ${green(info.minSize)}`)
}
