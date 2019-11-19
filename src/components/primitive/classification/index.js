import ClassificationPrimitive from './ClassificationPrimitive.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(ClassificationPrimitive.name, ClassificationPrimitive)
}

export default plugin

export {
  ClassificationPrimitive,
  plugin as install
}
