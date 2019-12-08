import SphereOutlineGeometry from './SphereOutlineGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(SphereOutlineGeometry.name, SphereOutlineGeometry)
}

export default plugin

export {
  SphereOutlineGeometry,
  plugin as install
}
