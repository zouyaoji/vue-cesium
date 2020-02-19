import CesiumWindMap from './VcWindMap.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.component(CesiumWindMap.name, CesiumWindMap)
}

export default plugin

export {
  CesiumWindMap,
  plugin as install
}
