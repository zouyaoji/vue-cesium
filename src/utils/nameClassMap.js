/**
 * Vue 组件名对应的 Cesium 类。
 * @const {Object}
 */
const nameClassMap = {
  // 二、三维视图
  'vc-viewer': 'Viewer',
  // 影像
  'vc-layer-imagery': 'ImageryLayer',
  'vc-provider-imagery-arcgis-mapserver': 'ArcGisMapServerImageryProvider',
  'vc-provider-imagery-bingmaps': 'BingMapsImageryProvider',
  'vc-provider-imagery-googleearth-enterprise': 'GoogleEarthEnterpriseImageryProvider',
  'vc-provider-imagery-grid': 'GridImageryProvider',
  'vc-provider-imagery-ion': 'IonImageryProvider',
  'vc-provider-imagery-mapbox': 'MapboxImageryProvider',
  'vc-provider-imagery-openstreetmap': 'OpenStreetMapImageryProvider',
  'vc-provider-imagery-tile-single': 'SingleTileImageryProvider',
  'vc-provider-imagery-tile-coordinates': 'TileCoordinatesImageryProvider',
  'vc-provider-imagery-tile-mapservice': 'TileMapServiceImageryProvider',
  'vc-provider-imagery-urltemplate': 'UrlTemplateImageryProvider',
  'vc-provider-imagery-wms': 'WebMapServiceImageryProvider',
  'vc-provider-imagery-wmts': 'WebMapTileServiceImageryProvider',
  // 地形
  'vc-provider-terrain-arcgis-tiled-elevation': 'ArcGISTiledElevationTerrainProvider',
  'vc-provider-terrain-cesium': 'CesiumTerrainProvider',
  // 实体
  'vc-entity': 'Entity',
  'vc-graphics-billboard': 'BillboardGraphics',
  'vc-graphics-box': 'BoxGraphics',
  'vc-graphics-corridor': 'CorridorGraphics',
  'vc-graphics-cylinder': 'CylinderGraphics',
  'vc-graphics-ellipse': 'EllipseGraphics',
  'vc-graphics-ellipsoid': 'EllipsoidGraphics',
  'vc-graphics-label': 'LabelGraphics',
  'vc-graphics-model': 'ModelGraphics',
  'vc-graphics-path': 'PathGraphics',
  'vc-graphics-plane': 'PlaneGraphics',
  'vc-graphics-point': 'PointGraphics',
  'vc-graphics-polygon': 'PolygonGraphics',
  'vc-graphics-polyline': 'PolylineGraphics',
  'vc-graphics-polyline-volume': 'PolylineVolumeGraphics',
  'vc-graphics-rectangle': 'RectangleGraphics',
  'vc-graphics-wall': 'WallGraphics',
  // 数据源
  'vc-datasource-custom': 'CustomDataSource',
  'vc-datasource-czml': 'CzmlDataSource',
  'vc-datasource-geojson': 'GeoJsonDataSource',
  'vc-datasource-kml': 'KmlDataSource',
  // 图元集合
  'vc-collection-primitive': 'PrimitiveCollection',
  'vc-collection-primitive-billboard': 'BillboardCollection',
  'vc-collection-primitive-label': 'LabelCollection',
  'vc-collection-primitive-point': 'PointPrimitiveCollection',
  'vc-collection-primitive-polyline': 'PolylineCollection',
  // 图元
  'vc-primitive': 'Primitive',
  'vc-primitive-classification': 'ClassificationPrimitive',
  'vc-primitive-ground': 'GroundPrimitive',
  'vc-primitive-billboard': 'Billboard',
  'vc-primitive-label': 'Label',
  'vc-primitive-point': 'PointPrimitive',
  'vc-primitive-polyline': 'Polyline',
  'vc-primitive-polyline-ground': 'GroundPolylinePrimitive',
  'vc-primitive-model': 'Model',
  'vc-primitive-3dtileset': 'Cesium3DTileset',
  // 几何体
  'vc-instance-geometry': 'GeometryInstance',
  'vc-geometry-box': 'BoxGeometry',
  'vc-geometry-polygon': 'PolygonGeometry',
  'vc-geometry-polyline': 'PolylineGeometry',
  'vc-geometry-polyline-ground': 'GroundPolylineGeometry',
  'vc-geometry-rectangle': 'RectangleGeometry'

}

export default nameClassMap
