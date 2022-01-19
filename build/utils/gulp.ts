/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 14:11:08
 * @LastEditTime: 2022-01-17 23:23:02
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\build\utils\gulp.ts
 */
import { run } from './process'
import type { TaskFunction } from 'gulp'

export const withTaskName = <T extends TaskFunction>(name: string, fn: T) => Object.assign(fn, { displayName: name })

export const runTask = (name: string) => withTaskName(name, () => run(`pnpm run build ${name}`))
