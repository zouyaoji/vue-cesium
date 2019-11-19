import TileCoordinatesImageryProvider from './TileCoordinatesImageryProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(TileCoordinatesImageryProvider.name, TileCoordinatesImageryProvider)
}

export default plugin

export {
  TileCoordinatesImageryProvider,
  plugin as install
}
