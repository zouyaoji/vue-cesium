import LabelCollection from './LabelCollection.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(LabelCollection.name, LabelCollection)
}

export default plugin

export {
  LabelCollection,
  plugin as install
}
