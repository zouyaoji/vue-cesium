import WebMapServiceImageryProvider from './WebMapServiceImageryProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(WebMapServiceImageryProvider.name, WebMapServiceImageryProvider)
}

export default plugin

export {
  WebMapServiceImageryProvider,
  plugin as install
}
