import Polyline from './Polyline.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(Polyline.name, Polyline)
}

export default plugin

export {
  Polyline,
  plugin as install
}
