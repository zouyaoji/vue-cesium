import TiledCacheImageryProvider from './TiledCacheImageryProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(TiledCacheImageryProvider.name, TiledCacheImageryProvider)
}

export default plugin

export {
  TiledCacheImageryProvider,
  plugin as install
}
