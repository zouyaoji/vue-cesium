import SphereGeometry from './SphereGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(SphereGeometry.name, SphereGeometry)
}

export default plugin

export {
  SphereGeometry,
  plugin as install
}
