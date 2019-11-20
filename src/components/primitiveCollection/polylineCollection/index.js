import PolylineCollection from './PolylineCollection.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PolylineCollection.name, PolylineCollection)
}

export default plugin

export {
  PolylineCollection,
  plugin as install
}
