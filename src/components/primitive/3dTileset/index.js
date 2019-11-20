import Cesium3DTileset from './Cesium3DTileset.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(Cesium3DTileset.name, Cesium3DTileset)
}

export default plugin

export {
  Cesium3DTileset,
  plugin as install
}
