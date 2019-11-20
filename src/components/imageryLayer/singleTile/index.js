import SingleTileImageryProvider from './SingleTileImageryProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(SingleTileImageryProvider.name, SingleTileImageryProvider)
}

export default plugin

export {
  SingleTileImageryProvider,
  plugin as install
}
