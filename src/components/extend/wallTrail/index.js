import VcWallTrail from './VcWallTrail.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.component(VcWallTrail.name, VcWallTrail)
}

export default plugin

export {
  VcWallTrail,
  plugin as install
}
