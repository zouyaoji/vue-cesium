import EllipsoidGeometry from './EllipsoidGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(EllipsoidGeometry.name, EllipsoidGeometry)
}

export default plugin

export {
  EllipsoidGeometry,
  plugin as install
}
