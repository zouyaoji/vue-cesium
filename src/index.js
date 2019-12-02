import * as Viewer from './components/viewer'
// 影像
import * as ImageryLayer from './components/imageryLayer'
import * as ArcGisMapServerImageryProvider from './components/imageryLayer/arcgis'
import * as BingMapsImageryProvider from './components/imageryLayer/bingmaps'
import * as GoogleEarthEnterpriseImageryProvider from './components/imageryLayer/googleEarth'
import * as GridImageryProvider from './components/imageryLayer/grid'
import * as IonImageryProvider from './components/imageryLayer/ion'
import * as MapboxImageryProvider from './components/imageryLayer/mapbox'
import * as OpenStreetMapImageryProvider from './components/imageryLayer/openStreetMap'
import * as SingleTileImageryProvider from './components/imageryLayer/singleTile'
import * as TileCoordinatesImageryProvider from './components/imageryLayer/tileCoordinates'
import * as TileMapServiceImageryProvider from './components/imageryLayer/tileMapService'
import * as UrlTemplateImageryProvider from './components/imageryLayer/urlTemplate'
import * as WebMapServiceImageryProvider from './components/imageryLayer/wms'
import * as WebMapTileServiceImageryProvider from './components/imageryLayer/wmts'
import * as TiandituImageryProvider from './components/imageryLayer/tianditu'
import * as SuperMapImageryProvider from './components/imageryLayer/supermap'
// 地形
import * as ArcGISTiledElevationTerrainProvider from './components/terrain/arcgis'
import * as CesiumTerrainProvider from './components/terrain/cesium'
// 数据源
import * as CustomDataSource from './components/datasource/custom'
import * as CzmlDataSource from './components/datasource/czml'
import * as GeoJsonDataSource from './components/datasource/geojson'
import * as KmlDataSource from './components/datasource/kml'
// 实体
import * as Entity from './components/entity'
import * as BillboardGraphics from './components/entity/billboard'
import * as BoxGraphics from './components/entity/box'
import * as CorridorGraphics from './components/entity/corridor'
import * as CylinderGraphics from './components/entity/cylinder'
import * as EllipseGraphics from './components/entity/ellipse'
import * as EllipsoidGraphics from './components/entity/ellipsoid'
import * as LabelGraphics from './components/entity/label'
import * as ModelGraphics from './components/entity/model'
import * as PathGraphics from './components/entity/path'
import * as PlaneGraphics from './components/entity/plane'
import * as PointGraphics from './components/entity/point'
import * as PolygonGraphics from './components/entity/polygon'
import * as PolylineGraphics from './components/entity/polyline'
import * as PolylineVolumeGraphics from './components/entity/polylineVollume'
import * as RectangleGraphics from './components/entity/rectangle'
import * as WallGraphics from './components/entity/wall'
// 图元集合
import * as PrimitiveCollection from './components/primitiveCollection'
import * as BillboardCollection from './components/primitiveCollection/billboardCollection'
import * as LabelCollection from './components/primitiveCollection/labelCollection'
import * as PointPrimitiveCollection from './components/primitiveCollection/pointCollection'
import * as PolylineCollection from './components/primitiveCollection/polylineCollection'
// 图元
import * as Primitive from './components/primitive'
import * as ClassificationPrimitive from './components/primitive/classification'
import * as GroundPrimitive from './components/primitive/ground'
import * as GroundPolylinePrimitive from './components/primitive/groundPolyline'
import * as Billboard from './components/primitive/billboard'
import * as Label from './components/primitive/label'
import * as PointPrimitive from './components/primitive/point'
import * as Polyline from './components/primitive/polyline'
import * as Model from './components/primitive/model'
import * as Cesium3DTileset from './components/primitive/3dTileset'
// 几何体
import * as GeometryInstance from './components/geometryInstance'
import * as BoxGeometry from './components/geometryInstance/box'
import * as PolygonGeometry from './components/geometryInstance/polygon'
import * as PolylineGeometry from './components/geometryInstance/polyline'
import * as GroundPolylineGeometry from './components/geometryInstance/groundPolyline'
import * as RectangleGeometry from './components/geometryInstance/rectangle'
// 工具
import * as VcMeasureArea from './components/tool/measureArea'
import * as VcMeasureDistance from './components/tool/measureDistance'
import * as VcMeasureHeight from './components/tool/measureHeight'
import * as VcNavigation from './components/tool/navigation'
// 可视化
import * as VcFlood from './components/visualization/flood'
import * as VcHeatMap from './components/visualization/heatmap'
import * as VcWindMap from './components/visualization/windmap'

/**
 * @const {string} VueCesium version
 */
const VERSION = 'C_PKG_VERSION'

/**
 * Register all VueCesium components.
 * @param {Object} Vue
 * @param {Object} options
 */
function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  // 场景
  Vue.use(Viewer, options)
  // 影像
  Vue.use(ImageryLayer, options)
  Vue.use(ArcGisMapServerImageryProvider, options)
  Vue.use(BingMapsImageryProvider, options)
  Vue.use(GoogleEarthEnterpriseImageryProvider, options)
  Vue.use(GridImageryProvider, options)
  Vue.use(IonImageryProvider, options)
  Vue.use(MapboxImageryProvider, options)
  Vue.use(OpenStreetMapImageryProvider, options)
  Vue.use(SingleTileImageryProvider, options)
  Vue.use(TileCoordinatesImageryProvider, options)
  Vue.use(TileMapServiceImageryProvider, options)
  Vue.use(UrlTemplateImageryProvider, options)
  Vue.use(WebMapServiceImageryProvider, options)
  Vue.use(WebMapTileServiceImageryProvider, options)
  Vue.use(TiandituImageryProvider, options)
  Vue.use(SuperMapImageryProvider, options)
  // 地形
  Vue.use(ArcGISTiledElevationTerrainProvider, options)
  Vue.use(CesiumTerrainProvider, options)
  // 数据源
  Vue.use(CustomDataSource, options)
  Vue.use(CzmlDataSource, options)
  Vue.use(GeoJsonDataSource, options)
  Vue.use(KmlDataSource, options)
  // 实体
  Vue.use(Entity, options)
  Vue.use(BillboardGraphics, options)
  Vue.use(BoxGraphics, options)
  Vue.use(CorridorGraphics, options)
  Vue.use(CylinderGraphics, options)
  Vue.use(EllipseGraphics, options)
  Vue.use(EllipsoidGraphics, options)
  Vue.use(LabelGraphics, options)
  Vue.use(ModelGraphics, options)
  Vue.use(PathGraphics, options)
  Vue.use(PlaneGraphics, options)
  Vue.use(PointGraphics, options)
  Vue.use(PolygonGraphics, options)
  Vue.use(PolylineGraphics, options)
  Vue.use(PolylineVolumeGraphics, options)
  Vue.use(RectangleGraphics, options)
  Vue.use(WallGraphics, options)
  // 图元集合
  Vue.use(PrimitiveCollection, options)
  Vue.use(BillboardCollection, options)
  Vue.use(LabelCollection, options)
  Vue.use(PointPrimitiveCollection, options)
  Vue.use(PolylineCollection, options)
  // 图元
  Vue.use(Primitive, options)
  Vue.use(ClassificationPrimitive, options)
  Vue.use(GroundPolylinePrimitive, options)
  Vue.use(GroundPrimitive, options)
  Vue.use(Billboard, options)
  Vue.use(Label, options)
  Vue.use(PointPrimitive, options)
  Vue.use(Polyline, options)
  Vue.use(Model, options)
  Vue.use(Cesium3DTileset, options)
  // 几何体
  Vue.use(GeometryInstance, options)
  Vue.use(BoxGeometry, options)
  Vue.use(PolygonGeometry, options)
  Vue.use(PolylineGeometry, options)
  Vue.use(GroundPolylineGeometry, options)
  Vue.use(RectangleGeometry, options)
  // 工具
  Vue.use(VcMeasureArea, options)
  Vue.use(VcMeasureDistance, options)
  Vue.use(VcMeasureHeight, options)
  Vue.use(VcNavigation, options)
  // 可视化
  Vue.use(VcFlood, options)
  Vue.use(VcHeatMap, options)
  Vue.use(VcWindMap, options)
}

export default plugin

export {
  VERSION,
  plugin as install,
  Viewer,

  ImageryLayer,
  ArcGisMapServerImageryProvider,
  BingMapsImageryProvider,
  GoogleEarthEnterpriseImageryProvider,
  GridImageryProvider,
  IonImageryProvider,
  MapboxImageryProvider,
  OpenStreetMapImageryProvider,
  SingleTileImageryProvider,
  TileCoordinatesImageryProvider,
  TileMapServiceImageryProvider,
  UrlTemplateImageryProvider,
  WebMapServiceImageryProvider,
  WebMapTileServiceImageryProvider,
  TiandituImageryProvider,
  SuperMapImageryProvider,

  ArcGISTiledElevationTerrainProvider,
  CesiumTerrainProvider,

  CustomDataSource,
  CzmlDataSource,
  GeoJsonDataSource,
  KmlDataSource,

  Entity,
  BillboardGraphics,
  BoxGraphics,
  CorridorGraphics,
  CylinderGraphics,
  EllipseGraphics,
  EllipsoidGraphics,
  LabelGraphics,
  ModelGraphics,
  PathGraphics,
  PlaneGraphics,
  PointGraphics,
  PolygonGraphics,
  PolylineGraphics,
  PolylineVolumeGraphics,
  RectangleGraphics,
  WallGraphics,

  PrimitiveCollection,
  BillboardCollection,
  LabelCollection,
  PointPrimitiveCollection,
  PolylineCollection,

  Primitive,
  ClassificationPrimitive,
  GroundPolylinePrimitive,
  GroundPrimitive,
  Billboard,
  Label,
  PointPrimitive,
  Polyline,
  Model,
  Cesium3DTileset,

  GeometryInstance,
  BoxGeometry,
  PolygonGeometry,
  PolylineGeometry,
  GroundPolylineGeometry,
  RectangleGeometry,

  VcMeasureArea,
  VcMeasureDistance,
  VcMeasureHeight,
  VcNavigation,
  VcFlood,
  VcHeatMap,
  VcWindMap
}
