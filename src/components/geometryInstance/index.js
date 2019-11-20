
import GeometryInstance from './GeometryInstance.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(GeometryInstance.name, GeometryInstance)
}

export default plugin

export {
  GeometryInstance,
  plugin as install
}
