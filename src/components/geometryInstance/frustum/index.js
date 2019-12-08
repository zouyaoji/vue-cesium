import FrustumGeometry from './FrustumGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(FrustumGeometry.name, FrustumGeometry)
}

export default plugin

export {
  FrustumGeometry,
  plugin as install
}
