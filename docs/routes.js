import CateView from './components/CateView.vue'
import Index from './components/Index.vue'
import Issues from './components/Issues.vue'

const langs = ['zh', 'en']

const genRouteMap = (routeMap, lang, isChild) =>
  routeMap.reduce((res, item) => {
    const route = {
      path: isChild ? item.path : `/${lang}/${item.path}`,
      name: item.name[lang],
      component:
        typeof item.component === 'string' ? () => import(`./md/${lang}/${item.component}.md`) : item.component,
      meta: Object.assign({ lang }, item.meta),
      children: genRouteMap(item.children || [], lang, true)
    }
    res.push(route)
    return res
  }, [])

const routeMap = [
  {
    // 首页
    path: 'index',
    name: {
      zh: '文档',
      en: 'Documentation'
    },
    component: 'index',
    meta: {
      hidden: true
    }
  },
  {
    // 开始
    path: 'start',
    component: CateView,
    name: {
      zh: '开始',
      en: 'Get Start'
    },
    children: [
      {
        path: 'installation',
        component: 'start/installation',
        name: {
          zh: '安装',
          en: 'Installation'
        }
      },
      {
        path: 'usage',
        component: 'start/usage',
        name: {
          zh: '快速上手',
          en: 'Usage'
        }
      },
      {
        path: 'base',
        component: 'start/base',
        name: {
          zh: '基础',
          en: 'Base'
        }
      }
    ]
  },
  {
    path: 'viewer',
    name: {
      zh: '场景',
      en: 'Viewer'
    },
    component: CateView,
    children: [
      {
        path: 'cesium-viewer',
        component: 'viewer/cesium-viewer',
        name: {
          zh: '场景(Viewer)',
          en: 'CesiumViewer'
        }
      }
    ]
  },
  {
    // 指南
    path: 'tools',
    component: CateView,
    name: {
      zh: '工具',
      en: 'Tools'
    },
    children: [
      {
        path: 'painting',
        component: 'tools/painting',
        name: {
          zh: '绘制',
          en: 'Painting'
        }
      },
      {
        path: 'measuring',
        component: 'tools/measuring',
        name: {
          zh: '量算',
          en: 'Measuring'
        }
      },
      {
        path: 'cesium-navigation',
        component: 'tools/cesium-navigation',
        name: {
          zh: '导航罗盘',
          en: 'CesiumNavigation'
        }
      }
    ]
  },
  {
    path: 'imageryLayers',
    name: {
      zh: '影像',
      en: 'Layers'
    },
    component: CateView,
    children: [
      {
        path: 'imagery-layer',
        component: 'imageryLayers/imagery-layer',
        name: {
          zh: '影像图层(ImageryLayer)',
          en: 'ImageryLayer'
        }
      },
      {
        path: 'arcgis-mapserver-imagery-provider',
        component: 'imageryLayers/arcgis-mapserver-imagery-provider',
        name: {
          zh: 'ArcGIS(ArcGisMapServerImagery)',
          en: 'ArcGisMapServerImageryProvider'
        }
      },
      {
        path: 'bingmaps-imagery-provider',
        component: 'imageryLayers/bingmaps-imagery-provider',
        name: {
          zh: 'BingMaps(BingMapsImagery)',
          en: 'BingMapsImageryProvider'
        }
      },
      {
        path: 'grid-imagery-provider',
        component: 'imageryLayers/grid-imagery-provider',
        name: {
          zh: 'Grid(GridImagery)',
          en: 'GridImageryProvider'
        }
      },
      {
        path: 'ion-imagery-provider',
        component: 'imageryLayers/ion-imagery-provider',
        name: {
          zh: 'CesiumIon(IonImagery)',
          en: 'IonImageryProvider'
        }
      },
      {
        path: 'mapbox-imagery-provider',
        component: 'imageryLayers/mapbox-imagery-provider',
        name: {
          zh: 'Mapbox(MapboxImagery)',
          en: 'MapboxImageryProvider'
        }
      },
      {
        path: 'openstreetmap-imagery-provider',
        component: 'imageryLayers/openstreetmap-imagery-provider',
        name: {
          zh: 'Openstreetmap(OpenStreetMapImagery)',
          en: 'OpenStreetMapImageryProvider'
        }
      },
      {
        path: 'singletile-imagery-provider',
        component: 'imageryLayers/singletile-imagery-provider',
        name: {
          zh: 'Singletile(SingleTileImagery)',
          en: 'SingleTileImageryProvider'
        }
      },
      {
        path: 'tilecoordinates-imagery-provider',
        component: 'imageryLayers/tilecoordinates-imagery-provider',
        name: {
          zh: 'TileCoordinates(TileCoordinatesImagery)',
          en: 'TileCoordinatesImageryProvider'
        }
      },
      {
        path: 'tilemapservice-imagery-provider',
        component: 'imageryLayers/tilemapservice-imagery-provider',
        name: {
          zh: 'TileMapService(TileMapServiceImagery)',
          en: 'TileMapServiceImageryProvider'
        }
      },
      {
        path: 'urltemplate-imagery-provider',
        component: 'imageryLayers/urltemplate-imagery-provider',
        name: {
          zh: 'UrlTemplate(UrlTemplateImagery)',
          en: 'UrlTemplateImageryProvider'
        }
      },
      {
        path: 'wms-imagery-provider',
        component: 'imageryLayers/wms-imagery-provider',
        name: {
          zh: 'WMS(WebMapServiceImagery)',
          en: 'WebMapServiceImageryProvider'
        }
      },
      {
        path: 'wmts-imagery-provider',
        component: 'imageryLayers/wmts-imagery-provider',
        name: {
          zh: 'WMTS(WebMapTileServiceImagery)',
          en: 'WebMapTileServiceImageryProvider'
        }
      },
      {
        path: 'supermap-imagery-provider',
        component: 'imageryLayers/supermap-imagery-provider',
        name: {
          zh: 'SuperMap(SuperMapImagery)',
          en: 'SuperMapImageryProvider'
        }
      }
    ]
  },
  {
    path: 'TerrainProvider',
    name: {
      zh: '地形',
      en: 'Terrains'
    },
    component: CateView,
    children: [
      {
        path: 'cesium-terrain-provider',
        component: 'terrains/cesium-terrain-provider',
        name: {
          zh: 'Cesium地形(CesiumTerrainProvider)',
          en: 'CesiumTerrainProvider'
        }
      }
    ]
  },
  {
    path: 'entities',
    name: {
      zh: '实体',
      en: 'Entities'
    },
    component: CateView,
    children: [
      {
        path: 'entity',
        component: 'entities/entity',
        name: {
          zh: '实体(Entity)',
          en: 'Entity'
        }
      },
      {
        path: 'billboard-graphics',
        component: 'entities/billboard-graphics',
        name: {
          zh: '布告板(BillboardGraphics)',
          en: 'BillboardGraphics'
        }
      },
      {
        path: 'box-graphics',
        component: 'entities/box-graphics',
        name: {
          zh: '盒子(BoxGraphics)',
          en: 'BoxGraphics'
        }
      },
      {
        path: 'corridor-graphics',
        component: 'entities/corridor-graphics',
        name: {
          zh: '走廊(CorridorGraphics)',
          en: 'CorridorGraphics'
        }
      },
      {
        path: 'cylinder-graphics',
        component: 'entities/cylinder-graphics',
        name: {
          zh: '圆柱（锥）(CylinderGraphics)',
          en: 'CylinderGraphics'
        }
      },
      {
        path: 'ellipse-graphics',
        component: 'entities/ellipse-graphics',
        name: {
          zh: '椭圆形(体)(EllipseGraphics)',
          en: 'EllipseGraphics'
        }
      },
      {
        path: 'ellipsoid-graphics',
        component: 'entities/ellipsoid-graphics',
        name: {
          zh: '(椭)球体(EllipsoidGraphics)',
          en: 'EllipsoidGraphics'
        }
      },
      {
        path: 'label-graphics',
        component: 'entities/label-graphics',
        name: {
          zh: '标签(LabelGraphics)',
          en: 'LabelGraphics'
        }
      },
      {
        path: 'model-graphics',
        component: 'entities/model-graphics',
        name: {
          zh: '模型(ModelGraphics)',
          en: 'ModelGraphics'
        }
      },
      {
        path: 'path-graphics',
        component: 'entities/path-graphics',
        name: {
          zh: '路径(PathGraphics)',
          en: 'PathGraphics'
        }
      },
      {
        path: 'plane-graphics',
        component: 'entities/plane-graphics',
        name: {
          zh: '平面(PlaneGraphics)',
          en: 'PlaneGraphics'
        }
      },
      {
        path: 'point-graphics',
        component: 'entities/point-graphics',
        name: {
          zh: '点(PointGraphics)',
          en: 'PointGraphics'
        }
      },
      {
        path: 'polygon-graphics',
        component: 'entities/polygon-graphics',
        name: {
          zh: '多边形(PolygonGraphics)',
          en: 'PolygonGraphics'
        }
      },
      {
        path: 'polyline-graphics',
        component: 'entities/polyline-graphics',
        name: {
          zh: '折线(PolylineGraphics)',
          en: 'PolylineGraphics'
        }
      },
      {
        path: 'polyline-volume-graphics',
        component: 'entities/polyline-volume-graphics',
        name: {
          zh: '多段线柱体(PolylineVolumeGraphics)',
          en: 'PolylineVolumeGraphics'
        }
      },
      {
        path: 'rectangle-graphics',
        component: 'entities/rectangle-graphics',
        name: {
          zh: '矩形(RectangleGraphics)',
          en: 'RectangleGraphics'
        }
      },
      {
        path: 'wall-graphics',
        component: 'entities/wall-graphics',
        name: {
          zh: '围墙(WallGraphics)',
          en: 'WallGraphics'
        }
      }
    ]
  },
  {
    path: 'primitives',
    name: {
      zh: '图元',
      en: 'Primitives'
    },
    component: CateView,
    children: [
      {
        path: 'primitive',
        component: 'primitives/primitive',
        name: {
          zh: '普通图元(Primitive)',
          en: 'Primitive'
        }
      },
      {
        path: 'ground-primitive',
        component: 'primitives/ground-primitive',
        name: {
          zh: '贴地图元(GroundPrimitive)',
          en: 'GroundPrimitive'
        }
      },
      {
        path: 'classification-primitive',
        component: 'primitives/classification-primitive',
        name: {
          zh: '体图元(ClassificationPrimitive)',
          en: 'ClassificationPrimitive'
        }
      },
      {
        path: 'label-collection',
        component: 'primitives/label-collection',
        name: {
          zh: '标签图元集合(LabelCollection)',
          en: 'LabelCollection'
        }
      },
      {
        path: 'label-primitive',
        component: 'primitives/label-primitive',
        name: {
          zh: '标签图元(Label)',
          en: 'Label'
        }
      },
      {
        path: 'billboard-collection',
        component: 'primitives/billboard-collection',
        name: {
          zh: '布告板图元集合(BillboardCollection)',
          en: 'BillboardCollection'
        }
      },
      {
        path: 'billboard-primitive',
        component: 'primitives/billboard-primitive',
        name: {
          zh: '布告板图元(Billboard)',
          en: 'Billboard'
        }
      },
      {
        path: 'point-collection',
        component: 'primitives/point-collection',
        name: {
          zh: '点图元集合(PointCollection)',
          en: 'PointCollection'
        }
      },
      {
        path: 'point-primitive',
        component: 'primitives/point-primitive',
        name: {
          zh: '点图元(PointPrimitive)',
          en: 'PointPrimitive'
        }
      },
      {
        path: 'polyline-collection',
        component: 'primitives/polyline-collection',
        name: {
          zh: '线图元集合(PolylineCollection)',
          en: 'PolylineCollection'
        }
      },
      {
        path: 'polyline-primitive',
        component: 'primitives/polyline-primitive',
        name: {
          zh: '线图元(PolylinePrimitive)',
          en: 'PolylinePrimitive'
        }
      },
      {
        path: 'model-primitive',
        component: 'primitives/model-primitive',
        name: {
          zh: '模型图元(Model)',
          en: 'Model'
        }
      },
      {
        path: 'cesium-3dtileset',
        component: 'primitives/cesium-3dtileset',
        name: {
          zh: '3DTiles(Cesium3DTileset)',
          en: 'Cesium3DTileset'
        }
      }
    ]
  },
  {
    path: 'geometries',
    name: {
      zh: '几何体',
      en: 'Geometries'
    },
    component: CateView,
    children: [
      {
        path: 'box-geometry',
        component: 'geometries/box-geometry',
        name: {
          zh: '盒子(BoxGeometry)',
          en: 'BoxGeometry'
        }
      },
      {
        path: 'rectangle-geometry',
        component: 'geometries/rectangle-geometry',
        name: {
          zh: '矩形(RectangleGeometry)',
          en: 'RectangleGeometry'
        }
      },
      {
        path: 'polygon-geometry',
        component: 'geometries/polygon-geometry',
        name: {
          zh: '多边形(PolygonGeometry)',
          en: 'PolygonGeometry'
        }
      }
    ]
  },
  {
    path: 'datasources',
    name: {
      zh: '数据源',
      en: 'Datasources'
    },
    component: CateView,
    children: [
      {
        path: 'geojson-datasource',
        component: 'datasources/geojson-datasource',
        name: {
          zh: 'GeoJson数据源',
          en: 'GeoJsonDataSource'
        }
      }
    ]
  },
  {
    path: 'visualizations',
    name: {
      zh: '可视化',
      en: 'Visualizations'
    },
    component: CateView,
    children: [
      {
        path: 'cesium-heatmap',
        component: 'visualization/cesium-heatmap',
        name: {
          zh: '热力图',
          en: 'HeatMap'
        }
      },
      {
        path: 'cesium-windmap',
        component: 'visualization/cesium-windmap',
        name: {
          zh: '风向图',
          en: 'WindMap'
        }
      },
      {
        path: 'cesium-flood',
        component: 'visualization/cesium-flood',
        name: {
          zh: '淹没分析',
          en: 'FloodAnalysis'
        }
      }
    ]
  }
]

export default [
  {
    path: '/',
    component: Index
  },
  {
    path: '/issues',
    name: 'ISSUE',
    component: Issues,
    meta: {
      hidden: true
    }
  },
  ...langs.reduce((map, lang) => map.concat(genRouteMap(routeMap, lang)), [])
]
