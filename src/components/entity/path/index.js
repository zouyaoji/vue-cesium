import PathGraphics from './PathGraphics.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PathGraphics.name, PathGraphics)
}

export default plugin

export {
  PathGraphics,
  plugin as install
}
