import VcFlood from './VcFlood.vue'
// 按需引入该组件时自动引入下面组件才能正常工作
import * as ClassificationPrimitive from '../../primitive/classification'
import * as GeometryInstance from '../../geometryInstance'
import * as PolygonGeometry from '../../geometryInstance/polygon'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.use(ClassificationPrimitive)
  Vue.use(GeometryInstance)
  Vue.use(PolygonGeometry)

  Vue.component(VcFlood.name, VcFlood)
}

export default plugin

export {
  VcFlood,
  plugin as install
}
