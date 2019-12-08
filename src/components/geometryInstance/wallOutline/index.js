import WallOutlineGeometry from './WallOutlineGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(WallOutlineGeometry.name, WallOutlineGeometry)
}

export default plugin

export {
  WallOutlineGeometry,
  plugin as install
}
