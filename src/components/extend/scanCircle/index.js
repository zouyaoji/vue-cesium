import VcScanCircle from './VcScanCircle.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(VcScanCircle.name, VcScanCircle)
}

export default plugin

export {
  VcScanCircle,
  plugin as install
}
