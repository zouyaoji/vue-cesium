import KmlDataSource from './KmlDataSource.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(KmlDataSource.name, KmlDataSource)
}

export default plugin

export {
  KmlDataSource,
  plugin as install
}
