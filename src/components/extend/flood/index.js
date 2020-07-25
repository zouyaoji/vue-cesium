
import CesiumFlood from './VcFlood.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.component(CesiumFlood.name, CesiumFlood)
}

export default plugin

export {
  CesiumFlood,
  plugin as install
}
