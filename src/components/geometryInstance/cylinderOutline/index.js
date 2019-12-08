import CylinderOutlineGeometry from './CylinderOutlineGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CylinderOutlineGeometry.name, CylinderOutlineGeometry)
}

export default plugin

export {
  CylinderOutlineGeometry,
  plugin as install
}
