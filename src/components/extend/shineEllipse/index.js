import VcShineEllipse from './VcShineEllipse.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(VcShineEllipse.name, VcShineEllipse)
}

export default plugin

export {
  VcShineEllipse,
  plugin as install
}
