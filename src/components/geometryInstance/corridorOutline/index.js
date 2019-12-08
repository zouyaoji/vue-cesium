import CorridorOutlineGeometry from './CorridorOutlineGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CorridorOutlineGeometry.name, CorridorOutlineGeometry)
}

export default plugin

export {
  CorridorOutlineGeometry,
  plugin as install
}
