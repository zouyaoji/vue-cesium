import EllipseGraphics from './EllipseGraphics.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(EllipseGraphics.name, EllipseGraphics)
}

export default plugin

export {
  EllipseGraphics,
  plugin as install
}
