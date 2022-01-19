/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 14:11:08
 * @LastEditTime: 2022-01-18 14:59:16
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\build\modules.ts
 */
import { rollup } from 'rollup'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import filesize from 'rollup-plugin-filesize'
import glob from 'fast-glob'
import { vcRoot, pkgRoot } from './utils/paths'
import { VueCesiumAlias } from './plugins/vue-cesium-alias'
import { generateExternal, writeBundles } from './utils/rollup'
import { excludeFiles } from './utils/pkg'
import { reporter } from './plugins/size-reporter'
import { buildConfigEntries, target } from './build-info'
import type { OutputOptions } from 'rollup'

export const buildModules = async () => {
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true
    })
  )
  const bundle = await rollup({
    input,
    plugins: [
      VueCesiumAlias(),
      css(),
      vue({ target: 'browser' }),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts']
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target
      }),
      filesize({ reporter })
    ],
    external: await generateExternal({ full: false }),
    treeshake: false
  })
  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        preserveModulesRoot: vcRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`
      }
    })
  )
}
