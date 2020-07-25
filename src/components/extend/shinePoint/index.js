import ShinePoint from './ShinePoint.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(ShinePoint.name, ShinePoint)
}

export default plugin

export {
  ShinePoint,
  plugin as install
}
