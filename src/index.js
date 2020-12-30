import * as Viewer from './components/viewer'
// 影像
import * as ImageryLayer from './components/imageryLayer'
import * as ArcGisMapServerImageryProvider from './components/imageryLayer/arcgis'
import * as BingMapsImageryProvider from './components/imageryLayer/bingmaps'
import * as GoogleEarthEnterpriseImageryProvider from './components/imageryLayer/googleEarth'
import * as GridImageryProvider from './components/imageryLayer/grid'
import * as IonImageryProvider from './components/imageryLayer/ion'
import * as MapboxImageryProvider from './components/imageryLayer/mapbox'
import * as MapboxStyleImageryProvider from './components/imageryLayer/mapboxStyle'
import * as OpenStreetMapImageryProvider from './components/imageryLayer/openStreetMap'
import * as SingleTileImageryProvider from './components/imageryLayer/singleTile'
import * as TileCoordinatesImageryProvider from './components/imageryLayer/tileCoordinates'
import * as TileMapServiceImageryProvider from './components/imageryLayer/tileMapService'
import * as UrlTemplateImageryProvider from './components/imageryLayer/urlTemplate'
import * as WebMapServiceImageryProvider from './components/imageryLayer/wms'
import * as WebMapTileServiceImageryProvider from './components/imageryLayer/wmts'
import * as TiandituImageryProvider from './components/imageryLayer/tianditu'
import * as SuperMapImageryProvider from './components/imageryLayer/supermap'
import * as TiledCacheImageryProvider from './components/imageryLayer/tiledCache'
import * as BaiduMapImageryProvider from './components/imageryLayer/baidu'
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
import * as Cesium3DTilesetGraphics from './components/entity/tileset'
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
import * as Cesium3DTileset from './components/primitive/tileset'
import * as ParticleSystem from './components/primitive/particle'
// 几何体
import * as GeometryInstance from './components/geometryInstance'
import * as BoxGeometry from './components/geometryInstance/box'
import * as BoxOutlineGeometry from './components/geometryInstance/boxOutline'
import * as CircleGeometry from './components/geometryInstance/circle'
import * as CircleOutlineGeometry from './components/geometryInstance/circleOutline'
import * as CoplanarPolygonGeometry from './components/geometryInstance/coplanarPolygon'
import * as CoplanarPolygonOutlineGeometry from './components/geometryInstance/coplanarPolygonOutline'
import * as CorridorGeometry from './components/geometryInstance/corridor'
import * as CorridorOutlineGeometry from './components/geometryInstance/corridorOutline'
import * as CylinderGeometry from './components/geometryInstance/cylinder'
import * as CylinderOutlineGeometry from './components/geometryInstance/cylinderOutline'
import * as EllipseGeometry from './components/geometryInstance/ellipse'
import * as EllipseOutlineGeometry from './components/geometryInstance/ellipseOutline'
import * as EllipsoidGeometry from './components/geometryInstance/ellipsoid'
import * as EllipsoidOutlineGeometry from './components/geometryInstance/ellipsoidOutline'
import * as FrustumGeometry from './components/geometryInstance/frustum'
import * as FrustumOutlineGeometry from './components/geometryInstance/frustumOutline'
import * as GroundPolylineGeometry from './components/geometryInstance/groundPolyline'
import * as PlaneGeometry from './components/geometryInstance/plane'
import * as PlaneOutlineGeometry from './components/geometryInstance/planeOutline'
import * as PolygonGeometry from './components/geometryInstance/polygon'
import * as PolygonOutlineGeometry from './components/geometryInstance/polygonOutline'
import * as PolylineGeometry from './components/geometryInstance/polyline'
import * as PolylineVolumeGeometry from './components/geometryInstance/polylineVolume'
import * as PolylineVolumeOutlineGeometry from './components/geometryInstance/polylineVolumeOutline'
import * as RectangleGeometry from './components/geometryInstance/rectangle'
import * as RectangleOutlineGeometry from './components/geometryInstance/rectangleOutline'
import * as SimplePolylineGeometry from './components/geometryInstance/simplePolyline'
import * as SphereGeometry from './components/geometryInstance/sphere'
import * as SphereOutlineGeometry from './components/geometryInstance/sphereOutline'
import * as WallGeometry from './components/geometryInstance/wall'
import * as WallOutlineGeometry from './components/geometryInstance/wallOutline'
// stage
import * as PostProcessStageCollection from './components/stageCollection'
import * as PostProcessStage from './components/stage'
// 工具
import * as VcMeasureArea from './components/tool/measureArea'
import * as VcMeasureDistance from './components/tool/measureDistance'
import * as VcMeasureHeight from './components/tool/measureHeight'
import * as VcDrawHandlerPoint from './components/tool/drawHandlerPoint'
import * as VcDrawHandlerPolyline from './components/tool/drawHandlerPolyline'
import * as VcDrawHandlerPolygon from './components/tool/drawHandlerPolygon'
// 控件
import * as VcNavigation from './components/control/navigation'
import * as VcNavigationSM from './components/control/navigationSM'
import * as VcOverviewMap from './components/control/overviewMap'
// 扩展
import * as VcFlood from './components/extend/flood'
import * as VcHeatMap from './components/extend/heatmap'
import * as VcKrigingMap from './components/extend/krigingmap'
import * as VcWindMap from './components/extend/windmap'
import * as VcScanCircle from './components/extend/scanCircle'
import * as VcScanRadar from './components/extend/scanRadar'
import * as VcDoubleCircleRipple from './components/extend/doubleCircleRipple'
import * as VcDoubleRotatingCircle from './components/extend/doubleRoatatingCircle'
import * as VcShineEllipse from './components/extend/shineEllipse'
import * as VcShinePoint from './components/extend/shinePoint'
import * as VcPolylineTrail from './components/extend/polylineTrail'
import * as VcWallTrail from './components/extend/wallTrail'
import * as VcHTMLOverlay from './components/extend/htmlOverlay'
// 类
import PolylineTrailMaterialProperty from './exts/materialProperty/PolylineTrailMaterialProperty'
// 语言
import lang from './exts/lang'
// 样式
import './assets/styles/main.scss'

/**
 * @const {string} VueCesium version
 */
const VERSION = 'C_PKG_VERSION'

// const $vc = {
//   VERSION
// }

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
  Vue.use(MapboxStyleImageryProvider, options)
  Vue.use(OpenStreetMapImageryProvider, options)
  Vue.use(SingleTileImageryProvider, options)
  Vue.use(TileCoordinatesImageryProvider, options)
  Vue.use(TileMapServiceImageryProvider, options)
  Vue.use(UrlTemplateImageryProvider, options)
  Vue.use(WebMapServiceImageryProvider, options)
  Vue.use(WebMapTileServiceImageryProvider, options)
  Vue.use(TiandituImageryProvider, options)
  Vue.use(SuperMapImageryProvider, options)
  Vue.use(TiledCacheImageryProvider, options)
  Vue.use(BaiduMapImageryProvider, options)
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
  Vue.use(Cesium3DTilesetGraphics, options)
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
  Vue.use(ParticleSystem, options)
  // 几何体
  Vue.use(GeometryInstance, options)
  Vue.use(BoxGeometry, options)
  Vue.use(BoxOutlineGeometry, options)
  Vue.use(CircleGeometry, options)
  Vue.use(CircleOutlineGeometry, options)
  Vue.use(CoplanarPolygonGeometry, options)
  Vue.use(CoplanarPolygonOutlineGeometry, options)
  Vue.use(CorridorGeometry, options)
  Vue.use(CorridorOutlineGeometry, options)
  Vue.use(CylinderGeometry, options)
  Vue.use(CylinderOutlineGeometry, options)
  Vue.use(EllipseGeometry, options)
  Vue.use(EllipseOutlineGeometry, options)
  Vue.use(EllipsoidGeometry, options)
  Vue.use(EllipsoidOutlineGeometry, options)
  Vue.use(FrustumGeometry, options)
  Vue.use(FrustumOutlineGeometry, options)
  Vue.use(GroundPolylineGeometry, options)
  Vue.use(PlaneGeometry, options)
  Vue.use(PlaneOutlineGeometry, options)
  Vue.use(PolygonGeometry, options)
  Vue.use(PolygonOutlineGeometry, options)
  Vue.use(PolylineGeometry, options)
  Vue.use(PolylineVolumeGeometry, options)
  Vue.use(PolylineVolumeOutlineGeometry, options)
  Vue.use(RectangleGeometry, options)
  Vue.use(RectangleOutlineGeometry, options)
  Vue.use(SimplePolylineGeometry, options)
  Vue.use(SphereGeometry, options)
  Vue.use(SphereOutlineGeometry, options)
  Vue.use(WallGeometry, options)
  Vue.use(WallOutlineGeometry, options)
  // stage
  Vue.use(PostProcessStageCollection, options)
  Vue.use(PostProcessStage, options)
  // 工具
  Vue.use(VcMeasureArea, options)
  Vue.use(VcMeasureDistance, options)
  Vue.use(VcMeasureHeight, options)
  Vue.use(VcDrawHandlerPoint, options)
  Vue.use(VcDrawHandlerPolyline, options)
  Vue.use(VcDrawHandlerPolygon, options)
  // 扩展
  Vue.use(VcFlood, options)
  Vue.use(VcHeatMap, options)
  Vue.use(VcWindMap, options)
  Vue.use(VcKrigingMap, options)
  Vue.use(VcScanCircle, options)
  Vue.use(VcScanRadar, options)
  Vue.use(VcDoubleCircleRipple, options)
  Vue.use(VcDoubleRotatingCircle, options)
  Vue.use(VcShineEllipse, options)
  Vue.use(VcShinePoint, options)
  Vue.use(VcPolylineTrail, options)
  Vue.use(VcWallTrail, options)
  Vue.use(VcHTMLOverlay, options)
  // 控件
  Vue.use(VcNavigation, options)
  // Vue.use(VcNavigationSM, options)
  // Vue.use(VcOverviewMap, options)

  // lang.install($vc, options.lang)
  // Vue.prototype.$vc = $vc
}

export default plugin

export {
  VERSION,
  lang,
  plugin as install,
  Viewer,

  ImageryLayer,
  ArcGisMapServerImageryProvider,
  BingMapsImageryProvider,
  GoogleEarthEnterpriseImageryProvider,
  GridImageryProvider,
  IonImageryProvider,
  MapboxImageryProvider,
  MapboxStyleImageryProvider,
  OpenStreetMapImageryProvider,
  SingleTileImageryProvider,
  TileCoordinatesImageryProvider,
  TileMapServiceImageryProvider,
  UrlTemplateImageryProvider,
  WebMapServiceImageryProvider,
  WebMapTileServiceImageryProvider,
  TiandituImageryProvider,
  SuperMapImageryProvider,
  TiledCacheImageryProvider,
  BaiduMapImageryProvider,

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
  Cesium3DTilesetGraphics,
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
  ParticleSystem,

  GeometryInstance,
  BoxGeometry,
  BoxOutlineGeometry,
  CircleGeometry,
  CircleOutlineGeometry,
  CoplanarPolygonGeometry,
  CoplanarPolygonOutlineGeometry,
  CorridorGeometry,
  CorridorOutlineGeometry,
  CylinderGeometry,
  CylinderOutlineGeometry,
  EllipseGeometry,
  EllipseOutlineGeometry,
  EllipsoidGeometry,
  EllipsoidOutlineGeometry,
  FrustumGeometry,
  FrustumOutlineGeometry,
  GroundPolylineGeometry,
  PlaneGeometry,
  PlaneOutlineGeometry,
  PolygonGeometry,
  PolygonOutlineGeometry,
  PolylineGeometry,
  PolylineVolumeGeometry,
  PolylineVolumeOutlineGeometry,
  RectangleGeometry,
  RectangleOutlineGeometry,
  SimplePolylineGeometry,
  SphereGeometry,
  SphereOutlineGeometry,
  WallGeometry,
  WallOutlineGeometry,

  PostProcessStageCollection,
  PostProcessStage,

  VcMeasureArea,
  VcMeasureDistance,
  VcMeasureHeight,
  VcDrawHandlerPoint,
  VcDrawHandlerPolyline,
  VcDrawHandlerPolygon,

  VcFlood,
  VcHeatMap,
  VcWindMap,
  VcKrigingMap,
  VcScanCircle,
  VcScanRadar,
  VcDoubleCircleRipple,
  VcDoubleRotatingCircle,
  VcShineEllipse,
  VcShinePoint,
  VcPolylineTrail,
  VcWallTrail,
  VcHTMLOverlay,

  VcNavigation,
  VcNavigationSM,
  VcOverviewMap,

  PolylineTrailMaterialProperty
}
