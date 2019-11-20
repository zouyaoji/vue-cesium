import VcMeasureDistance from './VcMeasureDistance.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(VcMeasureDistance.name, VcMeasureDistance)
}

export default plugin

export {
  VcMeasureDistance,
  plugin as install
}
