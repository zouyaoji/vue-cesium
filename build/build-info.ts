/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 14:11:08
 * @LastEditTime: 2022-01-17 23:27:09
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\build\build-info.ts
 */
import path from 'path'
import { vcOutput } from './utils/paths'
import { VC_PKG } from './utils/constants'
import type { ModuleFormat } from 'rollup'

export const modules = ['esm', 'cjs'] as const
export type Module = typeof modules[number]
export interface BuildInfo {
  module: 'ESNext' | 'CommonJS'
  format: ModuleFormat
  ext: 'mjs' | 'cjs' | 'js'
  output: {
    /** e.g: `es` */
    name: string
    /** e.g: `dist/vue-cesium/es` */
    path: string
  }

  bundle: {
    /** e.g: `vue-cesium/es` */
    path: string
  }
}

export const buildConfig: Record<Module, BuildInfo> = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    ext: 'mjs',
    output: {
      name: 'es',
      path: path.resolve(vcOutput, 'es')
    },
    bundle: {
      path: `${VC_PKG}/es`
    }
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    ext: 'js',
    output: {
      name: 'lib',
      path: path.resolve(vcOutput, 'lib')
    },
    bundle: {
      path: `${VC_PKG}/lib`
    }
  }
}
export const buildConfigEntries = Object.entries(buildConfig) as BuildConfigEntries

export type BuildConfig = typeof buildConfig
export type BuildConfigEntries = [Module, BuildInfo][]

export const target = 'es2018'
