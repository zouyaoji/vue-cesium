import OpenStreetMapImageryProvider from './OpenStreetMapImageryProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(OpenStreetMapImageryProvider.name, OpenStreetMapImageryProvider)
}

export default plugin

export {
  OpenStreetMapImageryProvider,
  plugin as install
}
