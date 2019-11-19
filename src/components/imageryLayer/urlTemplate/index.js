import UrlTemplateImageryProvider from './UrlTemplateImageryProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(UrlTemplateImageryProvider.name, UrlTemplateImageryProvider)
}

export default plugin

export {
  UrlTemplateImageryProvider,
  plugin as install
}
