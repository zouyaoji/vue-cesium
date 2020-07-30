import VcShinePoint from './VcShinePoint.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(VcShinePoint.name, VcShinePoint)
}

export default plugin

export {
  VcShinePoint,
  plugin as install
}
