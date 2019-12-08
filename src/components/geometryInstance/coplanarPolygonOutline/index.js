import CoplanarPolygonOutlineGeometry from './CoplanarPolygonOutlineGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CoplanarPolygonOutlineGeometry.name, CoplanarPolygonOutlineGeometry)
}

export default plugin

export {
  CoplanarPolygonOutlineGeometry,
  plugin as install
}
