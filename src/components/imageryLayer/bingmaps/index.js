
import BingMapsImageryProvider from './BingMapsImageryProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(BingMapsImageryProvider.name, BingMapsImageryProvider)
}

export default plugin

export {
  BingMapsImageryProvider,
  plugin as install
}
