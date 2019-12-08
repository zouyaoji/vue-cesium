import EllipsoidOutlineGeometry from './EllipsoidOutlineGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(EllipsoidOutlineGeometry.name, EllipsoidOutlineGeometry)
}

export default plugin

export {
  EllipsoidOutlineGeometry,
  plugin as install
}
