import VcOverviewMap from './VcOverviewMap.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(VcOverviewMap.name, VcOverviewMap)
}

export default plugin

export {
  VcOverviewMap,
  plugin as install
}
