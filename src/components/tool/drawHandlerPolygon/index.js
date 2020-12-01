import VcDrawHandlerPolygon from './VcDrawHandlerPolygon.vue'
// 按需引入该组件时自动引入下面组件才能正常工作
import * as PrimitiveCollection from '../../primitiveCollection'
import * as GroundPrimitive from '../../primitive/ground'
import * as GeometryInstance from '../../geometryInstance'
import * as PolygonGeometry from '../../geometryInstance/polygon'
import * as Primitive from '../../primitive'
import * as GroundPolylinePrimitive from '../../primitive/groundPolyline'
import * as GroundPolylineGeometry from '../../geometryInstance/groundPolyline'
import * as PolylineCollection from '../../primitiveCollection/polylineCollection'
import * as Polyline from '../../primitive/polyline'
import * as PointPrimitiveCollection from '../../primitiveCollection/pointCollection'
import * as PointPrimitive from '../../primitive/point'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.use(PrimitiveCollection)
  Vue.use(GroundPrimitive)
  Vue.use(GeometryInstance)
  Vue.use(PolygonGeometry)
  Vue.use(Primitive)
  Vue.use(GroundPolylinePrimitive)
  Vue.use(GroundPolylineGeometry)
  Vue.use(PolylineCollection)
  Vue.use(Polyline)
  Vue.use(PointPrimitiveCollection)
  Vue.use(PointPrimitive)

  Vue.component(VcDrawHandlerPolygon.name, VcDrawHandlerPolygon)
}

export default plugin

export {
  VcDrawHandlerPolygon,
  plugin as install
}
