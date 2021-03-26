// import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import pkg from '../package.json'
const deps = Object.keys(pkg.dependencies)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const vue = require('rollup-plugin-vue')

export default [
  {
    input: path.resolve(__dirname, '../packages/vue-cesium/index.ts'),
    output: {
      format: 'es',
      file: 'lib/index.esm.js',
    },
    plugins: [
      terser(),
      vue({
        target: 'browser',
        css: false,
        exposeFilename: false,
      }),
      nodeResolve(),
      commonjs(),
      typescript({
        tsconfigOverride: {
          'include': [
            'packages/**/*',
            'typings/vue-shim.d.ts',
            'typings/cesium-shim.d.ts',
          ],
          'exclude': [
            'node_modules',
            'packages/**/__tests__/*',
          ],
        },
        abortOnError: false,
      }),
    ],
    external(id) {
      return /^vue/.test(id)
        || deps.some(k => new RegExp('^' + k).test(id))
    },
  },
]
