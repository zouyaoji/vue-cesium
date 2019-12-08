import VcDrawHandlerPolyline from './VcDrawHandlerPolyline.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(VcDrawHandlerPolyline.name, VcDrawHandlerPolyline)
}

export default plugin

export {
  VcDrawHandlerPolyline,
  plugin as install
}
