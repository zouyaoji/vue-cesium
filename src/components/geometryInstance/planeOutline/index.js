import PlaneOutlineGeometry from './PlaneOutlineGeometry.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(PlaneOutlineGeometry.name, PlaneOutlineGeometry)
}

export default plugin

export {
  PlaneOutlineGeometry,
  plugin as install
}
