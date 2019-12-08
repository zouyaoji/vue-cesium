import BoxOutlineGeometry from './BoxOutlineGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(BoxOutlineGeometry.name, BoxOutlineGeometry)
}

export default plugin

export {
  BoxOutlineGeometry,
  plugin as install
}
