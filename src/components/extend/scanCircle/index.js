import ScanCircle from './ScanCircle.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(ScanCircle.name, ScanCircle)
}

export default plugin

export {
  ScanCircle,
  plugin as install
}
