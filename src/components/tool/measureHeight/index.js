import VcMeasureHeight from './VcMeasureHeight.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(VcMeasureHeight.name, VcMeasureHeight)
}

export default plugin

export {
  VcMeasureHeight,
  plugin as install
}
