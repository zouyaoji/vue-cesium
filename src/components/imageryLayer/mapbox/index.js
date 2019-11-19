
import MapboxImageryProvider from './MapboxImageryProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(MapboxImageryProvider.name, MapboxImageryProvider)
}

export default plugin

export {
  MapboxImageryProvider,
  plugin as install
}
