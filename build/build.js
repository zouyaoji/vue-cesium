/* eslint-disable */
const pkg = require('../package.json')
const path = require('path')
const css = require('rollup-plugin-css-only')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const vue = require('rollup-plugin-vue')
const rollup = require('rollup')
const typescript = require('rollup-plugin-typescript2')
const { noVcPrefixFile } = require('./common');

const deps = Object.keys(pkg.dependencies)

const root = path.resolve(__dirname, '..');

const defaultOpts = {
  plugins: [
    nodeResolve(),
    css(),
    vue({
      target: 'browser',
      css: false,
    }),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: false,
        },
        'exclude': [
          'node_modules',
          '__tests__',
        ],
      },
      abortOnError: false,
    }),
  ],
  external(id) {
    return /^vue/.test(id)
      || /^@vue-cesium/.test(id)
      || deps.some(k => new RegExp('^' + k).test(id))
  },
}

const isPkg = (id) => {
  return id.startsWith('@vue-cesium')
}

const isExcluded = (id) => {
  return noVcPrefixFile.test(id)
}

const replacePrefix = (prefix, target) => {
  return prefix + target.slice(12) // @vue-cesium/.length = 12
}

const run = async (name, input, isRoot = false) => {
  const inputPath = `${path.resolve(root, input)}/index.ts`
  defaultOpts.input = inputPath

  const getPaths = (id) => {
    if (isPkg(id)) {
      if (isExcluded(id)) return replacePrefix(isRoot ? './' : '../', id)
      return replacePrefix(isRoot ? './vc-' : '../vc-', id)
    }
  }
  const esm = {
    format: 'es',
    file: `es/${name}`,
    paths: getPaths,
  };
  const cjs = {
    format: 'cjs',
    file: `lib/${name}`,
    paths: getPaths,
    exports: 'named',
  };
  const bundle = await rollup.rollup(defaultOpts);
  await Promise.all([bundle.write(esm), bundle.write(cjs)])
  console.log(name, 'build finished');
}

module.exports = run;
