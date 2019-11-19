import EllipsoidGraphics from './EllipsoidGraphics.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(EllipsoidGraphics.name, EllipsoidGraphics)
}

export default plugin

export {
  EllipsoidGraphics,
  plugin as install
}
