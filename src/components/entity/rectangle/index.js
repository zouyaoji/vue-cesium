import RectangleGraphics from './RectangleGraphics.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(RectangleGraphics.name, RectangleGraphics)
}

export default plugin

export {
  RectangleGraphics,
  plugin as install
}
