import PointPrimitiveCollection from './PointPrimitiveCollection.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PointPrimitiveCollection.name, PointPrimitiveCollection)
}

export default plugin

export {
  PointPrimitiveCollection,
  plugin as install
}
