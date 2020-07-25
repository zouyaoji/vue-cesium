
import VcKrigingMap from './VcKrigingMap.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.component(VcKrigingMap.name, VcKrigingMap)
}

export default plugin

export {
  VcKrigingMap,
  plugin as install
}
