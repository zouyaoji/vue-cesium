import WallGeometry from './WallGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(WallGeometry.name, WallGeometry)
}

export default plugin

export {
  WallGeometry,
  plugin as install
}
