import FrustumOutlineGeometry from './FrustumOutlineGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(FrustumOutlineGeometry.name, FrustumOutlineGeometry)
}

export default plugin

export {
  FrustumOutlineGeometry,
  plugin as install
}
