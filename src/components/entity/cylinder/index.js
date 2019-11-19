import CylinderGraphics from './CylinderGraphics.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CylinderGraphics.name, CylinderGraphics)
}

export default plugin

export {
  CylinderGraphics,
  plugin as install
}
