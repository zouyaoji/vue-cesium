import { App } from 'vue'
import VcGraphicsBillboard from './billboard'
import VcGraphicsBox from './box'
import VcGraphicsCorridor from './corridor'
import VcGraphicsCylinder from './cylinder'
import VcGraphicsEllipse from './ellipse'
import VcGraphicsEllipsoid from './ellipsoid'
import VcGraphicsLabel from './label'
import VcGraphicsModel from './model'
import VcGraphicsPath from './path'
import VcGraphicsPlane from './plane'
import VcGraphicsPoint from './point'
import VcGraphicsPolygon from './polygon'
import VcGraphicsPolyline from './polyline'
import VcGraphicsPolylineVolume from './polylineVolume'
import VcGraphicsRectangle from './rectangle'
import VcGraphicsTileset from './tileset'
import VcGraphicsWall from './wall'

const components = [
  VcGraphicsBillboard,
  VcGraphicsBox,
  VcGraphicsCorridor,
  VcGraphicsCylinder,
  VcGraphicsEllipse,
  VcGraphicsEllipsoid,
  VcGraphicsLabel,
  VcGraphicsModel,
  VcGraphicsPath,
  VcGraphicsPlane,
  VcGraphicsPoint,
  VcGraphicsPolygon,
  VcGraphicsPolyline,
  VcGraphicsPolylineVolume,
  VcGraphicsRectangle,
  VcGraphicsTileset,
  VcGraphicsWall
]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export {
  VcGraphicsBillboard,
  VcGraphicsBox,
  VcGraphicsCorridor,
  VcGraphicsCylinder,
  VcGraphicsEllipse,
  VcGraphicsEllipsoid,
  VcGraphicsLabel,
  VcGraphicsModel,
  VcGraphicsPath,
  VcGraphicsPlane,
  VcGraphicsPoint,
  VcGraphicsPolygon,
  VcGraphicsPolyline,
  VcGraphicsPolylineVolume,
  VcGraphicsRectangle,
  VcGraphicsTileset,
  VcGraphicsWall
}

export default {
  install
}
