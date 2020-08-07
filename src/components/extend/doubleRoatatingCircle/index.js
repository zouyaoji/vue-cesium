import VcDoubleRotatingCircle from './VcDoubleRotatingCircle.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(VcDoubleRotatingCircle.name, VcDoubleRotatingCircle)
}

export default plugin

export {
  VcDoubleRotatingCircle,
  plugin as install
}
