import CoplanarPolygonGeometry from './CoplanarPolygonGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CoplanarPolygonGeometry.name, CoplanarPolygonGeometry)
}

export default plugin

export {
  CoplanarPolygonGeometry,
  plugin as install
}
