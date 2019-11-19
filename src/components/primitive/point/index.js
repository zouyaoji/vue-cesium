import PointPrimitive from './PointPrimitive.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PointPrimitive.name, PointPrimitive)
}

export default plugin

export {
  PointPrimitive,
  plugin as install
}
