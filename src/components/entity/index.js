
import Entity from './Entity.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(Entity.name, Entity)
}

export default plugin

export {
  Entity,
  plugin as install
}
