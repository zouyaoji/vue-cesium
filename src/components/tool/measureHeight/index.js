import VcMeasureHeight from './VcMeasureHeight.vue'
// 按需引入该组件时自动引入下面组件才能正常工作
import * as PolylineCollection from '../../primitiveCollection/polylineCollection'
import * as Polyline from '../../primitive/polyline'
import * as PointPrimitiveCollection from '../../primitiveCollection/pointCollection'
import * as PointPrimitive from '../../primitive/point'
import * as LabelCollection from '../../primitiveCollection/labelCollection'
import * as Label from '../../primitive/label'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.use(PolylineCollection)
  Vue.use(Polyline)
  Vue.use(PointPrimitiveCollection)
  Vue.use(PointPrimitive)
  Vue.use(LabelCollection)
  Vue.use(Label)

  Vue.component(VcMeasureHeight.name, VcMeasureHeight)
}

export default plugin

export {
  VcMeasureHeight,
  plugin as install
}
