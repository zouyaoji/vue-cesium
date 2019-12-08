import CircleGeometry from './CircleGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CircleGeometry.name, CircleGeometry)
}

export default plugin

export {
  CircleGeometry,
  plugin as install
}
