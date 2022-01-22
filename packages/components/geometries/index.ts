import { SFCWithInstall } from '@vue-cesium/utils/types'
import { App } from 'vue'
import GeometryBox from './box'
import GeometryBoxOutline from './box-outline'
import GeometryCircle from './circle'
import GeometryCircleOutline from './circle-outline'
import GeometryPolygonCoplanar from './coplanar-polygon'
import GeometryPolygonCoplanarOutline from './coplanar-polygon-outline'
import GeometryCorridor from './corridor'
import GeometryCorridorOutline from './corridor-outline'
import GeometryCylinder from './cylinder'
import GeometryCylinderOutline from './cylinder-outline'
import GeometryEllipse from './ellipse'
import GeometryEllipseOutline from './ellipse-outline'
import GeometryEllipsoid from './ellipsoid'
import GeometryEllipsoidOutline from './ellipsoid-outline'
import GeometryFrustum from './frustum'
import GeometryFrustumOutline from './frustum-outline'
import GeometryGroundPolyline from './ground-polyline'
import GeometryPlane from './plane'
import GeometryPlaneOutline from './plane-outline'
import GeometryPolygon from './polygon'
import GeometryPolygonOutline from './polygon-outline'
import GeometryPolyline from './polyline'
import GeometryPolylineVolume from './polyline-volume'
import GeometryPolylineVolumeOutline from './polyline-volume-outline'
import GeometryRectangle from './rectangle'
import GeometryRectangleOutline from './rectangle-outline'
import GeometryPolylineSimple from './simple-polyline'
import GeometrySphere from './sphere'
import GeometrySphereOutline from './sphere-outline'
import GeometryWall from './wall'
import GeometryWallOutline from './wall-outline'

const components = [
  GeometryBox,
  GeometryBoxOutline,
  GeometryCircle,
  GeometryCircleOutline,
  GeometryPolygonCoplanar,
  GeometryPolygonCoplanarOutline,
  GeometryCorridor,
  GeometryCorridorOutline,
  GeometryCylinder,
  GeometryCylinderOutline,
  GeometryEllipse,
  GeometryEllipseOutline,
  GeometryEllipsoid,
  GeometryEllipsoidOutline,
  GeometryFrustum,
  GeometryFrustumOutline,
  GeometryGroundPolyline,
  GeometryPlane,
  GeometryPlaneOutline,
  GeometryPolygon,
  GeometryPolygonOutline,
  GeometryPolyline,
  GeometryPolylineVolume,
  GeometryPolylineVolumeOutline,
  GeometryRectangle,
  GeometryRectangleOutline,
  GeometryPolylineSimple,
  GeometrySphere,
  GeometrySphereOutline,
  GeometryWall,
  GeometryWallOutline
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

export const VcGeometryBox = GeometryBox as SFCWithInstall<typeof GeometryBox>
export const VcGeometryBoxOutline = GeometryBoxOutline as SFCWithInstall<typeof GeometryBoxOutline>
export const VcGeometryCircle = GeometryCircle as SFCWithInstall<typeof GeometryCircle>
export const VcGeometryCircleOutline = GeometryCircleOutline as SFCWithInstall<typeof GeometryCircleOutline>
export const VcGeometryPolygonCoplanar = GeometryPolygonCoplanar as SFCWithInstall<typeof GeometryPolygonCoplanar>
export const VcGeometryPolygonCoplanarOutline = GeometryPolygonCoplanarOutline as SFCWithInstall<typeof GeometryPolygonCoplanarOutline>
export const VcGeometryCorridor = GeometryCorridor as SFCWithInstall<typeof GeometryCorridor>
export const VcGeometryCorridorOutline = GeometryCorridorOutline as SFCWithInstall<typeof GeometryCorridorOutline>
export const VcGeometryCylinder = GeometryCylinder as SFCWithInstall<typeof GeometryCylinder>
export const VcGeometryCylinderOutline = GeometryCylinderOutline as SFCWithInstall<typeof GeometryCylinderOutline>
export const VcGeometryEllipse = GeometryEllipse as SFCWithInstall<typeof GeometryEllipse>
export const VcGeometryEllipseOutline = GeometryEllipseOutline as SFCWithInstall<typeof GeometryEllipseOutline>
export const VcGeometryEllipsoid = GeometryEllipsoid as SFCWithInstall<typeof GeometryEllipsoid>
export const VcGeometryEllipsoidOutline = GeometryEllipsoidOutline as SFCWithInstall<typeof GeometryEllipsoidOutline>
export const VcGeometryFrustum = GeometryFrustum as SFCWithInstall<typeof GeometryFrustum>
export const VcGeometryFrustumOutline = GeometryFrustumOutline as SFCWithInstall<typeof GeometryFrustumOutline>
export const VcGeometryGroundPolyline = GeometryGroundPolyline as SFCWithInstall<typeof GeometryGroundPolyline>
export const VcGeometryPlane = GeometryPlane as SFCWithInstall<typeof GeometryPlane>
export const VcGeometryPlaneOutline = GeometryPlaneOutline as SFCWithInstall<typeof GeometryPlaneOutline>
export const VcGeometryPolygon = GeometryPolygon as SFCWithInstall<typeof GeometryPolygon>
export const VcGeometryPolygonOutline = GeometryPolygonOutline as SFCWithInstall<typeof GeometryPolygonOutline>
export const VcGeometryPolyline = GeometryPolyline as SFCWithInstall<typeof GeometryPolyline>
export const VcGeometryPolylineVolume = GeometryPolylineVolume as SFCWithInstall<typeof GeometryPolylineVolume>
export const VcGeometryPolylineVolumeOutline = GeometryPolylineVolumeOutline as SFCWithInstall<typeof GeometryPolylineVolumeOutline>
export const VcGeometryRectangle = GeometryRectangle as SFCWithInstall<typeof GeometryRectangle>
export const VcGeometryRectangleOutline = GeometryRectangleOutline as SFCWithInstall<typeof GeometryRectangleOutline>
export const VcGeometryPolylineSimple = GeometryPolylineSimple as SFCWithInstall<typeof GeometryPolylineSimple>
export const VcGeometrySphere = GeometrySphere as SFCWithInstall<typeof GeometrySphere>
export const VcGeometrySphereOutline = GeometrySphereOutline as SFCWithInstall<typeof GeometrySphereOutline>
export const VcGeometryWall = GeometryWall as SFCWithInstall<typeof GeometryWall>
export const VcGeometryWallOutline = GeometryWallOutline as SFCWithInstall<typeof GeometryWallOutline>

export * from './box'
export * from './box-outline'
export * from './circle'
export * from './circle-outline'
export * from './coplanar-polygon'
export * from './coplanar-polygon-outline'
export * from './corridor'
export * from './corridor-outline'
export * from './cylinder'
export * from './cylinder-outline'
export * from './ellipse'
export * from './ellipse-outline'
export * from './ellipsoid'
export * from './ellipsoid-outline'
export * from './frustum'
export * from './frustum-outline'
export * from './ground-polyline'
export * from './plane'
export * from './plane-outline'
export * from './polygon'
export * from './polygon-outline'
export * from './polyline'
export * from './polyline-volume'
export * from './polyline-volume-outline'
export * from './rectangle'
export * from './rectangle-outline'
export * from './simple-polyline'
export * from './sphere'
export * from './sphere-outline'
export * from './wall'
export * from './wall-outline'
