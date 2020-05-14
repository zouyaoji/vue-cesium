import Viewer from './Viewer.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.prototype._Cesium = () => options
  Vue.component(Viewer.name, Viewer)
}

export default plugin

export {
  Viewer,
  plugin as install
}
