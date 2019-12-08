import RectangleOutlineGeometry from './RectangleOutlineGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(RectangleOutlineGeometry.name, RectangleOutlineGeometry)
}

export default plugin

export {
  RectangleOutlineGeometry,
  plugin as install
}
