import VcDrawHandlerPolygon from './VcDrawHandlerPolygon.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(VcDrawHandlerPolygon.name, VcDrawHandlerPolygon)
}

export default plugin

export {
  VcDrawHandlerPolygon,
  plugin as install
}
