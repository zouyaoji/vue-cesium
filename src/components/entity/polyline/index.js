import PolylineGraphics from './PolylineGraphics.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PolylineGraphics.name, PolylineGraphics)
}

export default plugin

export {
  PolylineGraphics,
  plugin as install
}
