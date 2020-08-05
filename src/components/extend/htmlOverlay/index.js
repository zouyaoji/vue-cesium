import VcHTMLOverlay from './VcHTMLOverlay.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(VcHTMLOverlay.name, VcHTMLOverlay)
}

export default plugin

export {
  VcHTMLOverlay,
  plugin as install
}
