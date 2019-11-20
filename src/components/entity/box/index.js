import BoxGraphics from './BoxGraphics.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(BoxGraphics.name, BoxGraphics)
}

export default plugin

export {
  BoxGraphics,
  plugin as install
}
