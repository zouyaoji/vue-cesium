import DoubleCircleRipple from './DoubleCircleRipple.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(DoubleCircleRipple.name, DoubleCircleRipple)
}

export default plugin

export {
  DoubleCircleRipple,
  plugin as install
}
