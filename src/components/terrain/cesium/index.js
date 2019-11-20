import CesiumTerrainProvider from './CesiumTerrainProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CesiumTerrainProvider.name, CesiumTerrainProvider)
}

export default plugin

export {
  CesiumTerrainProvider,
  plugin as install
}
