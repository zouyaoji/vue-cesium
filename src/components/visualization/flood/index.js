
import CesiumFlood from './VcFlood.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.prototype._Cesium = () => options
  Vue.component(CesiumFlood.name, CesiumFlood, options)
}

export default plugin

export {
  CesiumFlood,
  plugin as install
}
