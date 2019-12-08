import PlaneGeometry from './PlaneGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PlaneGeometry.name, PlaneGeometry)
}

export default plugin

export {
  PlaneGeometry,
  plugin as install
}
