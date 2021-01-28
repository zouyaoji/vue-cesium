import VcDrawHandlerPolyline from './VcDrawHandlerPolyline.vue'
// 按需引入该组件时自动引入下面组件才能正常工作
import * as PrimitiveCollection from '../../primitiveCollection'
import * as GroundPolylinePrimitive from '../../primitive/groundPolyline'
import * as GeometryInstance from '../../geometryInstance'
import * as GroundPolylineGeometry from '../../geometryInstance/groundPolyline'
import * as PolylineCollection from '../../primitiveCollection/polylineCollection'
import * as Polyline from '../../primitive/polyline'
import * as PointPrimitiveCollection from '../../primitiveCollection/pointCollection'
import * as PointPrimitive from '../../primitive/point'
import * as VcHTMLOverlay from '../../extend/htmlOverlay'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.use(PrimitiveCollection)
  Vue.use(GeometryInstance)
  Vue.use(GroundPolylinePrimitive)
  Vue.use(GroundPolylineGeometry)
  Vue.use(PolylineCollection)
  Vue.use(Polyline)
  Vue.use(PointPrimitiveCollection)
  Vue.use(PointPrimitive)
  Vue.use(VcHTMLOverlay)

  Vue.component(VcDrawHandlerPolyline.name, VcDrawHandlerPolyline)
}

export default plugin

export {
  VcDrawHandlerPolyline,
  plugin as install
}
