
import CesiumHeatMap from './VcHeatMap.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.component(CesiumHeatMap.name, CesiumHeatMap)
}

export default plugin

export {
  CesiumHeatMap,
  plugin as install
}
