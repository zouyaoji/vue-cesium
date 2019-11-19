import Primitive from './Primitive.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(Primitive.name, Primitive)
}

export default plugin

export {
  Primitive,
  plugin as install
}
