
import VcPolylineTrail from './VcPolylineTrail.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.component(VcPolylineTrail.name, VcPolylineTrail)
}

export default plugin

export {
  VcPolylineTrail,
  plugin as install
}
