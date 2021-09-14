import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import path from 'path'
import { getPackagesSync } from '@lerna/project'
import pkg from '../package.json'

const noVcPrefixFile = /(composables|controls|datasources|directives|geometries|graphics|locale|overlays|primitive-collections|providers|ui|utils)/
const getOutFile = (name, dir = 'lib') => {
  const compName = name.split('@vue-cesium/')[1]
  if (noVcPrefixFile.test(name)) {
    return `${dir}/${compName}/index.js`
  }
  return `${dir}/vc-${compName}/index.js`
}

const deps = Object.keys(pkg.dependencies)
const inputs = getPackagesSync()
  .map(pkg => pkg.name)
  .filter(name => name.includes('@vue-cesium') && !name.includes('utils'))

export default inputs.map(name => ({
  input: path.resolve(__dirname, `../packages/${name.split('@vue-cesium/')[1]}/index.ts`),
  output: [
    {
      format: 'es',
      file: getOutFile(name, 'es'),
      paths(id) {
        if (/^@vue-cesium/.test(id)) {
          if (noVcPrefixFile.test(id)) return id.replace('@vue-cesium', '..')
          return id.replace('@vue-cesium/', '../vc-')
        }
      }
    },
    {
      format: 'cjs',
      file: getOutFile(name, 'lib'),
      exports: 'named',
      paths(id) {
        if (/^@vue-cesium/.test(id)) {
          if (noVcPrefixFile.test(id)) return id.replace('@vue-cesium', '..')
          return id.replace('@vue-cesium/', '../vc-')
        }
      }
    }
  ],
  plugins: [
    css(),
    vue({
      target: 'browser'
      // css: false,
    }),
    nodeResolve(),
    esbuild()
  ],
  external(id) {
    return /^vue/.test(id) || /^@vue-cesium/.test(id) || deps.some(k => new RegExp('^' + k).test(id))
  }
}))
