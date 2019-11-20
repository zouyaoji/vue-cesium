import CustomDataSource from './CustomDataSource.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CustomDataSource.name, CustomDataSource)
}

export default plugin

export {
  CustomDataSource,
  plugin as install
}
