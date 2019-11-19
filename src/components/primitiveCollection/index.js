import PrimitiveCollection from './PrimitiveCollection.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PrimitiveCollection.name, PrimitiveCollection)
}

export default plugin

export {
  PrimitiveCollection,
  plugin as install
}
