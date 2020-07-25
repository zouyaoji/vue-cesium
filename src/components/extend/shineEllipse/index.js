import ShineEllipse from './ShineEllipse.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(ShineEllipse.name, ShineEllipse)
}

export default plugin

export {
  ShineEllipse,
  plugin as install
}
