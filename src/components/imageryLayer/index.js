import ImageryLayer from './ImageryLayer.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(ImageryLayer.name, ImageryLayer)
}

export default plugin

export {
  ImageryLayer,
  plugin as install
}
