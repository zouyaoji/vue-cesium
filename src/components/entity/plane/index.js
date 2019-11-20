import PlaneGraphics from './PlaneGraphics.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PlaneGraphics.name, PlaneGraphics)
}

export default plugin

export {
  PlaneGraphics,
  plugin as install
}
