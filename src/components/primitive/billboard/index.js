import Billboard from './Billboard.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(Billboard.name, Billboard)
}

export default plugin

export {
  Billboard,
  plugin as install
}
