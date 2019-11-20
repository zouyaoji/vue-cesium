import ArcGISTiledElevationTerrainProvider from './ArcGISTiledElevationTerrainProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(ArcGISTiledElevationTerrainProvider.name, ArcGISTiledElevationTerrainProvider)
}

export default plugin

export {
  ArcGISTiledElevationTerrainProvider,
  plugin as install
}
