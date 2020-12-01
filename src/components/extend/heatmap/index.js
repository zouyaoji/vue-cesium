import VcHeatMap from './VcHeatMap.vue'
// 按需引入该组件时自动引入下面组件才能正常工作
import * as Entity from '../../entity'
import * as RectangleGraphics from '../../entity/rectangle'
import * as GroundPrimitive from '../../primitive/ground'
import * as GeometryInstance from '../../geometryInstance'
import * as RectangleGeometry from '../../geometryInstance/rectangle'
import * as ImageryLayer from '../../imageryLayer'
import * as SingleTileImageryProvider from '../../imageryLayer/singleTile'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }

  Vue.use(Entity)
  Vue.use(RectangleGraphics)
  Vue.use(GroundPrimitive)
  Vue.use(GeometryInstance)
  Vue.use(RectangleGeometry)
  Vue.use(ImageryLayer)
  Vue.use(SingleTileImageryProvider)

  plugin.installed = true
  Vue.component(VcHeatMap.name, VcHeatMap)
}

export default plugin

export {
  VcHeatMap,
  plugin as install
}
