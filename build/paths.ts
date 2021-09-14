import path from 'path'

const projRoot = path.resolve(__dirname, '../')
const pkgRoot = path.resolve(projRoot, './packages')
const compRoot = path.resolve(pkgRoot, './components')
const themeRoot = path.resolve(pkgRoot, './theme-default')
const hookRoot = path.resolve(pkgRoot, './composables')
const localeRoot = path.resolve(pkgRoot, './locale')
const directiveRoot = path.resolve(pkgRoot, './directives')
const vcRoot = path.resolve(pkgRoot, './vue-cesium')
const utilRoot = path.resolve(pkgRoot, './utils')
const buildOutput = path.resolve(projRoot, './dist')

export { projRoot, pkgRoot, compRoot, themeRoot, hookRoot, directiveRoot, localeRoot, vcRoot, utilRoot, buildOutput }
