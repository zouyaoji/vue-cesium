
import MapboxStyleImageryProvider from './MapboxStyleImageryProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(MapboxStyleImageryProvider.name, MapboxStyleImageryProvider)
}

export default plugin

export {
  MapboxStyleImageryProvider,
  plugin as install
}
