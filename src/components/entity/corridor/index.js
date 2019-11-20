import CorridorGraphics from './CorridorGraphics.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CorridorGraphics.name, CorridorGraphics)
}

export default plugin

export {
  CorridorGraphics,
  plugin as install
}
