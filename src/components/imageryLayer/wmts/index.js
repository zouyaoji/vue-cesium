import WebMapTileServiceImageryProvider from './WebMapTileServiceImageryProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(WebMapTileServiceImageryProvider.name, WebMapTileServiceImageryProvider)
}

export default plugin

export {
  WebMapTileServiceImageryProvider,
  plugin as install
}
