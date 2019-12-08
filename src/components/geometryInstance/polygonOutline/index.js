import PolygonOutlineGeometry from './PolygonOutlineGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PolygonOutlineGeometry.name, PolygonOutlineGeometry)
}

export default plugin

export {
  PolygonOutlineGeometry,
  plugin as install
}
