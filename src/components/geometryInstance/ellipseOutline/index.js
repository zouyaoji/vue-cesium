import EllipseOutlineGeometry from './EllipseOutlineGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(EllipseOutlineGeometry.name, EllipseOutlineGeometry)
}

export default plugin

export {
  EllipseOutlineGeometry,
  plugin as install
}
