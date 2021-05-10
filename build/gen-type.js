/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const { noVcPrefixFile } = require('./common')

const outsideImport = /import .* from '..\/(.*?)\/src\/.*/

// global.d.ts
const cesiumShimBuffer = fs.readFileSync(path.resolve(__dirname, '../typings/cesium-shim.d.ts'))
const vueShimBuffer = fs.readFileSync(path.resolve(__dirname, '../typings/vue-shim.d.ts'))
const cesiumBuffer = fs.readFileSync(path.resolve(__dirname, '../typings/Cesium.d.ts'))

fs.appendFileSync(path.resolve(__dirname, '../lib/vue-cesium.d.ts'), vueShimBuffer)
fs.appendFileSync(path.resolve(__dirname, '../lib/vue-cesium.d.ts'), cesiumShimBuffer)
fs.appendFileSync(path.resolve(__dirname, '../lib/vue-cesium.d.ts'), cesiumBuffer)
// index.d.ts
const newIndexPath = path.resolve(__dirname, '../lib/index.d.ts')
fs.copyFileSync(path.resolve(__dirname, '../lib/vue-cesium/index.d.ts'), newIndexPath)
const index = fs.readFileSync(newIndexPath)
const newIndex = index
  .toString()
  .replace(/@vue-cesium\//g, './vc-')
  .replace('vc-composables', 'composables')
  .replace('vc-controls', 'controls')
  .replace('vc-datasources', 'datasources')
  .replace('vc-directives', 'directives')
  .replace('vc-geometries', 'geometries')
  .replace('vc-graphics', 'graphics')
  .replace('vc-locale', 'locale')
  .replace('vc-overlays', 'overlays')
  .replace('vc-primitive-collections', 'primitive-collections')
  .replace('vc-providers', 'providers')
  .replace('vc-ui', 'ui')
  .replace('vc-utils', 'utils')
fs.writeFileSync(newIndexPath, newIndex)

// remove ep
fs.rmdirSync(path.resolve(__dirname, '../lib/vue-cesium'), { recursive: true })

// remove test-utils
fs.rmdirSync(path.resolve(__dirname, '../lib/test-utils'), { recursive: true })

// component
const libDirPath = path.resolve(__dirname, '../lib')
fs.readdirSync(libDirPath).forEach(comp => {
  if (!noVcPrefixFile.test(comp)) {
    if (fs.lstatSync(path.resolve(libDirPath, comp)).isDirectory()) {
      // rename
      const newCompName = `vc-${comp}`
      fs.renameSync(path.resolve(libDirPath, comp), path.resolve(libDirPath, newCompName))
      // re-import
      const imp = fs.readFileSync(path.resolve(__dirname, '../lib', newCompName, 'index.d.ts')).toString()
      if (outsideImport.test(imp) || imp.includes('@vue-cesium/')) {
        const newImp = imp
          .replace(outsideImport, (i, c) => {
            return i.replace(`../${c}`, `../vc-${c}`)
          })
          .replace(/@vue-cesium\//g, '../vc-')
          .replace('vc-composables', 'composables')
          .replace('vc-controls', 'controls')
          .replace('vc-datasources', 'datasources')
          .replace('vc-directives', 'directives')
          .replace('vc-geometries', 'geometries')
          .replace('vc-graphics', 'graphics')
          .replace('vc-locale', 'locale')
          .replace('vc-overlays', 'overlays')
          .replace('vc-primitive-collections', 'primitive-collections')
          .replace('vc-providers', 'providers')
          .replace('vc-ui', 'ui')
          .replace('vc-utils', 'utils')
        fs.writeFileSync(path.resolve(__dirname, '../lib', newCompName, 'index.d.ts'), newImp)
      }
    }
  }
})

// after components dir renamed
fs.readdirSync(libDirPath).forEach(comp => {
  // check src/*.d.ts exist
  const srcPath = path.resolve(libDirPath, comp, './src')
  if (fs.existsSync(srcPath)) {
    if (fs.lstatSync(srcPath).isDirectory()) {
      fs.readdir(srcPath, 'utf-8', (err, data) => {
        if (err) return
        // replace all @vue-cesium in src/*.d.ts
        data.forEach(f => {
          if (!fs.lstatSync(path.resolve(srcPath, f)).isDirectory()) {
            const imp = fs.readFileSync(path.resolve(srcPath, f)).toString()
            if (imp.includes('@vue-cesium/')) {
              const newImp = imp.replace(/@vue-cesium\//g, '../../vc-')
              fs.writeFileSync(path.resolve(srcPath, f), newImp)
            }
          }
        })
      })
    }
  }
})
