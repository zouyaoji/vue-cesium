import VcMeasureArea from './VcMeasureArea.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(VcMeasureArea.name, VcMeasureArea)
}

export default plugin

export {
  VcMeasureArea,
  plugin as install
}
