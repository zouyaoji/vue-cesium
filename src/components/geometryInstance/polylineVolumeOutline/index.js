import PolylineVolumeOutlineGeometry from './PolylineVolumeOutlineGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PolylineVolumeOutlineGeometry.name, PolylineVolumeOutlineGeometry)
}

export default plugin

export {
  PolylineVolumeOutlineGeometry,
  plugin as install
}
