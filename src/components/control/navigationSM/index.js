import VcNavigationSM from './VcNavigationSM.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(VcNavigationSM.name, VcNavigationSM)
}

export default plugin

export {
  VcNavigationSM,
  plugin as install
}
