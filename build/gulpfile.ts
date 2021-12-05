/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 14:11:08
 * @LastEditTime: 2021-12-05 22:45:04
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\build\gulpfile.ts
 */
import path from 'path'
import { series, parallel } from 'gulp'
import { run } from './utils/process'
import { withTaskName } from './utils/gulp'
import { buildOutput, vcOutput, vcPackage, projRoot } from './utils/paths'
import { buildConfig } from './build-info'
import type { TaskFunction } from 'gulp'
import type { Module } from './build-info'

const runTask = (name: string) => withTaskName(name, () => run(`pnpm run build ${name}`))

export const copyFiles = () => {
  const copyTypings = async () => {
    const globalDts = path.resolve(projRoot, 'typings', 'global.d.ts')
    await run(`cp ${globalDts} ${vcOutput}`)
    const cesiumDts = path.resolve(projRoot, 'typings', 'Cesium.d.ts')
    await run(`cp ${cesiumDts} ${vcOutput}`)
  }

  return Promise.all([run(`cp ${vcPackage} ${path.join(vcOutput, 'package.json')}`), run(`cp README.md ${vcOutput}`), copyTypings()])
}

export const copyTypesDefinitions: TaskFunction = done => {
  const src = `${buildOutput}/types/`
  const copy = (module: Module) => {
    // windows 平台下 rsync 识别不了盘符，所以要转存相对路径才能正常执行
    const srcRelative = path.relative(projRoot, src).replaceAll('\\', '/')
    const outRelative = path.relative(projRoot, `${buildConfig[module].output.path}/`)
    return withTaskName(`copyTypes:${module}`, () => run(`rsync -a ${srcRelative}/ ${outRelative}`))
  }

  return parallel(copy('esm'), copy('cjs'))(done)
}

export const copyFullStyle = async () => {
  await run(`"mkdir" "-p" "${vcOutput}/dist/"`)
  await run(`cp ${vcOutput}/theme-default/index.css ${vcOutput}/dist/index.css`)
}

export default series(
  withTaskName('clean', () => run('pnpm run clean')),

  parallel(
    runTask('buildModules'),
    runTask('buildFullBundle'),
    runTask('generateTypesDefinitions'),
    runTask('buildHelper'),
    runTask('buildIndices'),
    series(
      withTaskName('buildThemeChalk', () => run('pnpm run -C packages/theme-default build')),
      copyFullStyle
    )
  ),

  parallel(copyTypesDefinitions, copyFiles)
)

export * from './types-definitions'
export * from './modules'
export * from './full-bundle'
export * from './helper'
export * from './indices'
