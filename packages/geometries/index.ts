import { App } from 'vue'
import VcGeometryBox from './box'
import VcGeometryBoxOutline from './box-outline'
import VcGeometryCircle from './circle'
import VcGeometryCircleOutline from './circle-outline'
import VcGeometryPolygonCoplanar from './coplanar-polygon'
import VcGeometryPolygonCoplanarOutline from './coplanar-polygon-outline'
import VcGeometryCorridor from './corridor'
import VcGeometryCorridorOutline from './corridor-outline'
import VcGeometryCylinder from './cylinder'
import VcGeometryCylinderOutline from './cylinder-outline'
import VcGeometryEllipse from './ellipse'
import VcGeometryEllipseOutline from './ellipse-outline'
import VcGeometryEllipsoid from './ellipsoid'
import VcGeometryEllipsoidOutline from './ellipsoid-outline'
import VcGeometryFrustum from './frustum'
import VcGeometryFrustumOutline from './frustum-outline'
import VcGeometryPolylineGround from './ground-polyline'
import VcGeometryPlane from './plane'
import VcGeometryPlaneOutline from './plane-outline'
import VcGeometryPolygon from './polygon'
import VcGeometryPolygonOutline from './polygon-outline'
import VcGeometryPolyline from './polyline'
import VcGeometryPolylineVolume from './polyline-volume'
import VcGeometryPolylineVolumeOutline from './polyline-volume-outline'
import VcGeometryRectangle from './rectangle'
import VcGeometryRectangleOutline from './rectangle-outline'
import VcGeometryPolylineSimple from './simple-polyline'
import VcGeometrySphere from './sphere'
import VcGeometrySphereOutline from './sphere-outline'
import VcGeometryWall from './wall'
import VcGeometryWallOutline from './wall-outline'

const components = [
  VcGeometryBox,
  VcGeometryBoxOutline,
  VcGeometryCircle,
  VcGeometryCircleOutline,
  VcGeometryPolygonCoplanar,
  VcGeometryPolygonCoplanarOutline,
  VcGeometryCorridor,
  VcGeometryCorridorOutline,
  VcGeometryCylinder,
  VcGeometryCylinderOutline,
  VcGeometryEllipse,
  VcGeometryEllipseOutline,
  VcGeometryEllipsoid,
  VcGeometryEllipsoidOutline,
  VcGeometryFrustum,
  VcGeometryFrustumOutline,
  VcGeometryPolylineGround,
  VcGeometryPlane,
  VcGeometryPlaneOutline,
  VcGeometryPolygon,
  VcGeometryPolygonOutline,
  VcGeometryPolyline,
  VcGeometryPolylineVolume,
  VcGeometryPolylineVolumeOutline,
  VcGeometryRectangle,
  VcGeometryRectangleOutline,
  VcGeometryPolylineSimple,
  VcGeometrySphere,
  VcGeometrySphereOutline,
  VcGeometryWall,
  VcGeometryWallOutline
]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export {
  VcGeometryBox,
  VcGeometryBoxOutline,
  VcGeometryCircle,
  VcGeometryCircleOutline,
  VcGeometryPolygonCoplanar,
  VcGeometryPolygonCoplanarOutline,
  VcGeometryCorridor,
  VcGeometryCorridorOutline,
  VcGeometryCylinder,
  VcGeometryCylinderOutline,
  VcGeometryEllipse,
  VcGeometryEllipseOutline,
  VcGeometryEllipsoid,
  VcGeometryEllipsoidOutline,
  VcGeometryFrustum,
  VcGeometryFrustumOutline,
  VcGeometryPolylineGround,
  VcGeometryPlane,
  VcGeometryPlaneOutline,
  VcGeometryPolygon,
  VcGeometryPolygonOutline,
  VcGeometryPolyline,
  VcGeometryPolylineVolume,
  VcGeometryPolylineVolumeOutline,
  VcGeometryRectangle,
  VcGeometryRectangleOutline,
  VcGeometryPolylineSimple,
  VcGeometrySphere,
  VcGeometrySphereOutline,
  VcGeometryWall,
  VcGeometryWallOutline
}

export default {
  install
}
