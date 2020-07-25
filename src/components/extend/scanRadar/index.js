import ScanRadar from './ScanRadar.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(ScanRadar.name, ScanRadar)
}

export default plugin

export {
  ScanRadar,
  plugin as install
}
