import VcScanRadar from './VcScanRadar.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(VcScanRadar.name, VcScanRadar)
}

export default plugin

export {
  VcScanRadar,
  plugin as install
}
