import IonImageryProvider from './IonImageryProvider.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(IonImageryProvider.name, IonImageryProvider)
}

export default plugin

export {
  IonImageryProvider,
  plugin as install
}
