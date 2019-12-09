import VcDrawHandlerPoint from './VcDrawHandlerPoint.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(VcDrawHandlerPoint.name, VcDrawHandlerPoint)
}

export default plugin

export {
  VcDrawHandlerPoint,
  plugin as install
}
