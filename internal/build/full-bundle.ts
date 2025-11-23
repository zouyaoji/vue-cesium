/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 14:11:08
 * @LastEditTime: 2024-06-14 11:06:58
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\internal\build\full-bundle.ts
 */
import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { rollup } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/rollup'
import vueJsx from '@vitejs/plugin-vue-jsx'
import esbuild, { minify as minifyPlugin } from 'rollup-plugin-esbuild'
import replace from '@rollup/plugin-replace'
import filesize from 'rollup-plugin-filesize'
import { parallel } from 'gulp'
import glob from 'fast-glob'
import { camelCase, capitalize } from 'lodash'
import { version } from '../../packages/vue-cesium/version'
import { reporter } from './plugins/size-reporter'
import { alias } from './plugins/alias'
import { vcRoot, vcOutput, localeRoot } from './utils/paths'
import { formatBundleFilename, generateExternal, writeBundles } from './utils/rollup'
import { withTaskName } from './utils/gulp'
import { PKG_BRAND_NAME, PKG_CAMELCASE_LOCAL_NAME, PKG_CAMELCASE_NAME } from './utils/constants'
import { target } from './build-info'
import { TaskFunction } from 'undertaker'

const banner = `/*! ${PKG_BRAND_NAME} v${version} */\n`

async function buildFullEntry(minify: boolean) {
  const plugins = [
    alias(),
    VueMacros({
      setupComponent: false,
      setupSFC: false,
      plugins: {
        vue: vue({
          isProduction: true
        }),
        vueJsx: vueJsx()
      }
    }),
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.ts']
    }),
    commonjs(),
    esbuild({
      exclude: [],
      sourceMap: minify,
      target,
      loaders: {
        '.vue': 'ts'
      },
      define: {
        'process.env.NODE_ENV': JSON.stringify('production')
      },
      treeShaking: true,
      legalComments: 'eof'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      // options
      preventAssignment: true
    }),
    // filesize()
  ]

  if (minify) {
    plugins.push(
      minifyPlugin({
        target,
        sourceMap: true
      })
    )
  }

  const bundle = await rollup({
    input: path.resolve(vcRoot, 'index.ts'),
    plugins,
    external: await generateExternal({ full: true }),
    treeshake: true
  })
  await writeBundles(bundle, [
    {
      format: 'umd',
      file: path.resolve(vcOutput, 'dist', formatBundleFilename('index.full', minify, 'js')),
      exports: 'named',
      name: PKG_CAMELCASE_NAME,
      globals: {
        vue: 'Vue',
        echarts: 'echarts'
      },
      sourcemap: minify,
      banner
    },
    {
      format: 'esm',
      file: path.resolve(vcOutput, 'dist', formatBundleFilename('index.full', minify, 'mjs')),
      sourcemap: minify,
      banner
    }
  ])
}

async function buildFullLocale(minify: boolean) {
  const files = await glob(`${path.resolve(localeRoot, 'lang')}/*.ts`, {
    absolute: true
  })
  return Promise.all(
    files.map(async file => {
      const filename = path.basename(file, '.ts')
      const name = capitalize(camelCase(filename))

      const bundle = await rollup({
        input: file,
        plugins: [
          esbuild({
            minify,
            sourceMap: minify,
            target
          }),
          // filesize({ reporter })
        ]
      })
      await writeBundles(bundle, [
        {
          format: 'umd',
          file: path.resolve(vcOutput, 'dist/locale', formatBundleFilename(filename, minify, 'js')),
          exports: 'default',
          name: `${PKG_CAMELCASE_LOCAL_NAME}${name}`,
          sourcemap: minify,
          banner
        },
        {
          format: 'esm',
          file: path.resolve(vcOutput, 'dist/locale', formatBundleFilename(filename, minify, 'mjs')),
          sourcemap: minify,
          banner
        }
      ])
    })
  )
}

export const buildFull = (minify: boolean) => async () => Promise.all([buildFullEntry(minify), buildFullLocale(minify)])

export const buildFullBundle = parallel(withTaskName('buildFullMinified', buildFull(true)), withTaskName('buildFull', buildFull(false)))
