import CylinderGeometry from './CylinderGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CylinderGeometry.name, CylinderGeometry)
}

export default plugin

export {
  CylinderGeometry,
  plugin as install
}
