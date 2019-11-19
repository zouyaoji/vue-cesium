import PolygonGeometry from './PolygonGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PolygonGeometry.name, PolygonGeometry)
}

export default plugin

export {
  PolygonGeometry,
  plugin as install
}
