import PolylineVolumeGraphics from './PolylineVolumeGraphics.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PolylineVolumeGraphics.name, PolylineVolumeGraphics)
}

export default plugin

export {
  PolylineVolumeGraphics,
  plugin as install
}
