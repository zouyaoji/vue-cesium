import VcNavigation from './VcNavigation.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(VcNavigation.name, VcNavigation)
}

export default plugin

export {
  VcNavigation,
  plugin as install
}
