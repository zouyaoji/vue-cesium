import Label from './Label.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(Label.name, Label)
}

export default plugin

export {
  Label,
  plugin as install
}
