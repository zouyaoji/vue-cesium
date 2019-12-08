import EllipseGeometry from './EllipseGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(EllipseGeometry.name, EllipseGeometry)
}

export default plugin

export {
  EllipseGeometry,
  plugin as install
}
