import CesiumWindMap from './VcWindMap.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.prototype._Cesium = () => options
  Vue.component(CesiumWindMap.name, CesiumWindMap, options)
}

export default plugin

export {
  CesiumWindMap,
  plugin as install
}
