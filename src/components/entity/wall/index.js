import WallGraphics from './WallGraphics.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(WallGraphics.name, WallGraphics)
}

export default plugin

export {
  WallGraphics,
  plugin as install
}
