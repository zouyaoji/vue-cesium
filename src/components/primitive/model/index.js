import Model from './Model.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(Model.name, Model)
}

export default plugin

export {
  Model,
  plugin as install
}
