import VcWindMap from './VcWindMap.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.component(VcWindMap.name, VcWindMap)
}

export default plugin

export {
  VcWindMap,
  plugin as install
}
