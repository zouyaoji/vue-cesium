
import CesiumHeatMap from './VcHeatMap.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.prototype._Cesium = () => options
  Vue.component(CesiumHeatMap.name, CesiumHeatMap, options)
}

export default plugin

export {
  CesiumHeatMap,
  plugin as install
}
