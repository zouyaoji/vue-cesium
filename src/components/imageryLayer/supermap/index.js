import SuperMapImageryProvider from './SuperMapImageryProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(SuperMapImageryProvider.name, SuperMapImageryProvider)
}

export default plugin

export {
  SuperMapImageryProvider,
  plugin as install
}
