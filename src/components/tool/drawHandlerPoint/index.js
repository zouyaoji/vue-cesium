import VcDrawHandlerPoint from './VcDrawHandlerPoint.vue'
// 按需引入该组件时自动引入下面组件才能正常工作
import * as PointPrimitiveCollection from '../../primitiveCollection/pointCollection'
import * as PointPrimitive from '../../primitive/point'
function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.use(PointPrimitiveCollection)
  Vue.use(PointPrimitive)

  Vue.component(VcDrawHandlerPoint.name, VcDrawHandlerPoint)
}

export default plugin

export {
  VcDrawHandlerPoint,
  plugin as install
}
