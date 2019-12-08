import CorridorGeometry from './CorridorGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CorridorGeometry.name, CorridorGeometry)
}

export default plugin

export {
  CorridorGeometry,
  plugin as install
}
