import GridImageryProvider from './GridImageryProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(GridImageryProvider.name, GridImageryProvider)
}

export default plugin

export {
  GridImageryProvider,
  plugin as install
}
