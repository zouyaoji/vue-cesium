import BillboardGraphics from './BillboardGraphics.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.component(BillboardGraphics.name, BillboardGraphics)
}

export default plugin

export {
  BillboardGraphics,
  plugin as install
}
