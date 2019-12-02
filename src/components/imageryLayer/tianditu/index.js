import TiandituImageryProvider from './TiandituImageryProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(TiandituImageryProvider.name, TiandituImageryProvider)
}

export default plugin

export {
  TiandituImageryProvider,
  plugin as install
}
