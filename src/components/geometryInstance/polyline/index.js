
import PolylineGeometry from './PolylineGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PolylineGeometry.name, PolylineGeometry)
}

export default plugin

export {
  PolylineGeometry,
  plugin as install
}
