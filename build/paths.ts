import path from 'path'

export const projRoot = path.resolve(__dirname, '../')
export const pkgRoot = path.resolve(projRoot, './packages')
export const compRoot = path.resolve(pkgRoot, './components')
export const composablesRoot = path.resolve(pkgRoot, './composables')
export const directiveRoot = path.resolve(pkgRoot, './directives')
export const localeRoot = path.resolve(pkgRoot, './locale')
export const sharedRoot = path.resolve(pkgRoot, './shared')
export const themeRoot = path.resolve(pkgRoot, './theme-default')
export const utilRoot = path.resolve(pkgRoot, './utils')
export const vcRoot = path.resolve(pkgRoot, './vue-cesium')
export const buildOutput = path.resolve(projRoot, './dist')
