import BoxGeometry from './BoxGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(BoxGeometry.name, BoxGeometry)
}

export default plugin

export {
  BoxGeometry,
  plugin as install
}
