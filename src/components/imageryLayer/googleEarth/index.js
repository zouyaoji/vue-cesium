
import GoogleEarthEnterpriseImageryProvider from './GoogleEarthEnterpriseImageryProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(GoogleEarthEnterpriseImageryProvider.name, GoogleEarthEnterpriseImageryProvider)
}

export default plugin

export {
  GoogleEarthEnterpriseImageryProvider,
  plugin as install
}
