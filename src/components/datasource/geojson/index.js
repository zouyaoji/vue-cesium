import GeoJsonDataSource from './GeoJsonDataSource.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(GeoJsonDataSource.name, GeoJsonDataSource)
}

export default plugin

export {
  GeoJsonDataSource,
  plugin as install
}
