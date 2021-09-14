import { SFCWithInstall } from '@vue-cesium/utils/types'
import { App } from 'vue'
import GraphicsBillboard from './billboard'
import GraphicsBox from './box'
import GraphicsCorridor from './corridor'
import GraphicsCylinder from './cylinder'
import GraphicsEllipse from './ellipse'
import GraphicsEllipsoid from './ellipsoid'
import GraphicsLabel from './label'
import GraphicsModel from './model'
import GraphicsPath from './path'
import GraphicsPlane from './plane'
import GraphicsPoint from './point'
import GraphicsPolygon from './polygon'
import GraphicsPolyline from './polyline'
import GraphicsPolylineVolume from './polylineVolume'
import GraphicsRectangle from './rectangle'
import GraphicsTileset from './tileset'
import GraphicsWall from './wall'

const components = [
  GraphicsBillboard,
  GraphicsBox,
  GraphicsCorridor,
  GraphicsCylinder,
  GraphicsEllipse,
  GraphicsEllipsoid,
  GraphicsLabel,
  GraphicsModel,
  GraphicsPath,
  GraphicsPlane,
  GraphicsPoint,
  GraphicsPolygon,
  GraphicsPolyline,
  GraphicsPolylineVolume,
  GraphicsRectangle,
  GraphicsTileset,
  GraphicsWall
]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export default {
  install
}

components.forEach(cmp => {
  cmp['install'] = (app: App): void => {
    app.component(cmp.name, cmp)
  }
})

export const VcGraphicsBillboard = GraphicsBillboard as SFCWithInstall<typeof GraphicsBillboard>
export const VcGraphicsBox = GraphicsBox as SFCWithInstall<typeof GraphicsBox>
export const VcGraphicsCorridor = GraphicsCorridor as SFCWithInstall<typeof GraphicsCorridor>
export const VcGraphicsCylinder = GraphicsCylinder as SFCWithInstall<typeof GraphicsCylinder>
export const VcGraphicsEllipse = GraphicsEllipse as SFCWithInstall<typeof GraphicsEllipse>
export const VcGraphicsEllipsoid = GraphicsEllipsoid as SFCWithInstall<typeof GraphicsEllipsoid>
export const VcGraphicsLabel = GraphicsLabel as SFCWithInstall<typeof GraphicsLabel>
export const VcGraphicsModel = GraphicsModel as SFCWithInstall<typeof GraphicsModel>
export const VcGraphicsPath = GraphicsPath as SFCWithInstall<typeof GraphicsPath>
export const VcGraphicsPlane = GraphicsPlane as SFCWithInstall<typeof GraphicsPlane>
export const VcGraphicsPoint = GraphicsPoint as SFCWithInstall<typeof GraphicsPoint>
export const VcGraphicsPolygon = GraphicsPolygon as SFCWithInstall<typeof GraphicsPolygon>
export const VcGraphicsPolyline = GraphicsPolyline as SFCWithInstall<typeof GraphicsPolyline>
export const VcGraphicsPolylineVolume = GraphicsPolylineVolume as SFCWithInstall<typeof GraphicsPolylineVolume>
export const VcGraphicsRectangle = GraphicsRectangle as SFCWithInstall<typeof GraphicsRectangle>
export const VcGraphicsTileset = GraphicsTileset as SFCWithInstall<typeof GraphicsTileset>
export const VcGraphicsWall = GraphicsWall as SFCWithInstall<typeof GraphicsWall>
