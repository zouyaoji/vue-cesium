import PolygonGraphics from './PolygonGraphics.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PolygonGraphics.name, PolygonGraphics)
}

export default plugin

export {
  PolygonGraphics,
  plugin as install
}
