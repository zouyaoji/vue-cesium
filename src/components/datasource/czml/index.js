import CzmlDataSource from './CzmlDataSource.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(CzmlDataSource.name, CzmlDataSource)
}

export default plugin

export {
  CzmlDataSource,
  plugin as install
}
