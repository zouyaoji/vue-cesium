import PointGraphics from './PointGraphics.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PointGraphics.name, PointGraphics)
}

export default plugin

export {
  PointGraphics,
  plugin as install
}
