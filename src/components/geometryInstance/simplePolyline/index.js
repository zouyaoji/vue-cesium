import SimplePolylineGeometry from './SimplePolylineGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(SimplePolylineGeometry.name, SimplePolylineGeometry)
}

export default plugin

export {
  SimplePolylineGeometry,
  plugin as install
}
