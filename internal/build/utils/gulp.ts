/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 14:11:08
 * @LastEditTime: 2024-02-05 16:42:56
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\build\utils\gulp.ts
 */
import { run } from './process'
import type { TaskFunction } from 'gulp'

export const withTaskName: any = <T extends TaskFunction>(name: string, fn: T) => Object.assign(fn, { displayName: name })

export const runTask = (name: string) => withTaskName(name, () => run(`pnpm run build ${name}`))
