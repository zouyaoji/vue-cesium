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
      zh: '视图',
      en: 'Viewer'
    },
    component: CateView,
    children: [
      {
        path: 'vc-viewer',
        component: 'viewer/vc-viewer',
        name: {
          zh: '场景视图',
          en: 'Viewer Instance'
        }
      }
    ]
  },
  {
    path: 'imagery',
    name: {
      zh: '影像',
      en: 'Imagery'
    },
    component: CateView,
    children: [
      {
        path: 'vc-layer-imagery',
        component: 'imageryLayer/vc-layer-imagery',
        name: {
          zh: '影像图层',
          en: 'ImageryLayer'
        }
      },
      {
        path: 'vc-provider-imagery-arcgis-mapserver',
        component: 'imageryLayer/vc-provider-imagery-arcgis-mapserver',
        name: {
          zh: 'ArcGISMapServer影像',
          en: 'ArcGisMapServerImageryProvider'
        }
      },
      {
        path: 'vc-provider-imagery-bingmaps',
        component: 'imageryLayer/vc-provider-imagery-bingmaps',
        name: {
          zh: 'BingMaps影像',
          en: 'BingMapsImageryProvider'
        }
      },
      {
        path: 'vc-provider-imagery-grid',
        component: 'imageryLayer/vc-provider-imagery-grid',
        name: {
          zh: '经纬格网影像',
          en: 'GridImageryProvider'
        }
      },
      {
        path: 'vc-provider-imagery-ion',
        component: 'imageryLayer/vc-provider-imagery-ion',
        name: {
          zh: 'CesiumIon影像',
          en: 'IonImageryProvider'
        }
      },
      {
        path: 'vc-provider-imagery-mapbox',
        component: 'imageryLayer/vc-provider-imagery-mapbox',
        name: {
          zh: 'Mapbox影像',
          en: 'MapboxImageryProvider'
        }
      },
      {
        path: 'vc-provider-imagery-openstreetmap',
        component: 'imageryLayer/vc-provider-imagery-openstreetmap',
        name: {
          zh: 'OpenStreetMap影像',
          en: 'OpenStreetMapImageryProvider'
        }
      },
      {
        path: 'vc-provider-imagery-tile-single',
        component: 'imageryLayer/vc-provider-imagery-tile-single',
        name: {
          zh: 'Singletile影像',
          en: 'SingleTileImageryProvider'
        }
      },
      {
        path: 'vc-provider-imagery-tile-coordinates',
        component: 'imageryLayer/vc-provider-imagery-tile-coordinates',
        name: {
          zh: 'TileCoordinates影像',
          en: 'TileCoordinatesImageryProvider'
        }
      },
      {
        path: 'vc-provider-imagery-tile-mapservice',
        component: 'imageryLayer/vc-provider-imagery-tile-mapservice',
        name: {
          zh: 'TileMapService影像',
          en: 'TileMapServiceImageryProvider'
        }
      },
      {
        path: 'vc-provider-imagery-urltemplate',
        component: 'imageryLayer/vc-provider-imagery-urltemplate',
        name: {
          zh: 'UrlTemplate影像',
          en: 'UrlTemplateImageryProvider'
        }
      },
      {
        path: 'vc-provider-imagery-wms',
        component: 'imageryLayer/vc-provider-imagery-wms',
        name: {
          zh: 'WMS影像',
          en: 'WebMapServiceImageryProvider'
        }
      },
      {
        path: 'vc-provider-imagery-wmts',
        component: 'imageryLayer/vc-provider-imagery-wmts',
        name: {
          zh: 'WMTS影像',
          en: 'WebMapTileServiceImageryProvider'
        }
      },
      {
        path: 'vc-provider-imagery-tianditu',
        component: 'imageryLayer/vc-provider-imagery-tianditu',
        name: {
          zh: '天地图影像',
          en: 'TiandituImageryProvider'
        }
      },
      {
        path: 'vc-provider-imagery-supermap',
        component: 'imageryLayer/vc-provider-imagery-supermap',
        name: {
          zh: 'SuperMap影像',
          en: 'SuperMapImageryProvider'
        }
      }
      // {
      //   path: 'vc-provider-imagery-tiledcache',
      //   component: 'imageryLayer/vc-provider-imagery-tiledcache',
      //   name: {
      //     zh: 'TiledCache影像',
      //     en: 'TiledCacheImageryProvider'
      //   }
      // }
    ]
  },
  {
    path: 'terrain',
    name: {
      zh: '地形',
      en: 'Terrain'
    },
    component: CateView,
    children: [
      {
        path: 'vc-provider-terrain-cesium',
        component: 'terrain/vc-provider-terrain-cesium',
        name: {
          zh: 'Cesium地形',
          en: 'CesiumTerrainProvider'
        }
      },
      {
        path: 'vc-provider-terrain-arcgis-tiled-elevation',
        component: 'terrain/vc-provider-terrain-arcgis-tiled-elevation',
        name: {
          zh: 'ArcGISTiledElevation地形',
          en: 'ArcGISTiledElevationTerrainProvider'
        }
      }
    ]
  },
  {
    path: 'datasource',
    name: {
      zh: '数据源',
      en: 'Datasource'
    },
    component: CateView,
    children: [
      {
        path: 'vc-datasource-custom',
        component: 'datasource/vc-datasource-custom',
        name: {
          zh: 'Custom数据源',
          en: 'CustomDataSource'
        }
      },
      {
        path: 'vc-datasource-czml',
        component: 'datasource/vc-datasource-czml',
        name: {
          zh: 'Czml数据源',
          en: 'CzmlDataSource'
        }
      },
      {
        path: 'vc-datasource-geojson',
        component: 'datasource/vc-datasource-geojson',
        name: {
          zh: 'GeoJson数据源',
          en: 'GeoJsonDataSource'
        }
      },
      {
        path: 'vc-datasource-kml',
        component: 'datasource/vc-datasource-kml',
        name: {
          zh: 'Kml数据源',
          en: 'KmlDataSource'
        }
      }
    ]
  },
  {
    path: 'entity',
    name: {
      zh: '实体',
      en: 'Entity'
    },
    component: CateView,
    children: [
      {
        path: 'vc-entity',
        component: 'entity/vc-entity',
        name: {
          zh: '实体实例',
          en: 'Entity Instance'
        }
      },
      {
        path: 'vc-graphics-billboard',
        component: 'entity/vc-graphics-billboard',
        name: {
          zh: '布告板实体',
          en: 'BillboardGraphics'
        }
      },
      {
        path: 'vc-graphics-box',
        component: 'entity/vc-graphics-box',
        name: {
          zh: '盒子实体',
          en: 'BoxGraphics'
        }
      },
      {
        path: 'vc-graphics-corridor',
        component: 'entity/vc-graphics-corridor',
        name: {
          zh: '走廊实体',
          en: 'CorridorGraphics'
        }
      },
      {
        path: 'vc-graphics-cylinder',
        component: 'entity/vc-graphics-cylinder',
        name: {
          zh: '圆柱（锥、台）实体',
          en: 'CylinderGraphics'
        }
      },
      {
        path: 'vc-graphics-ellipse',
        component: 'entity/vc-graphics-ellipse',
        name: {
          zh: '椭圆实体',
          en: 'EllipseGraphics'
        }
      },
      {
        path: 'vc-graphics-ellipsoid',
        component: 'entity/vc-graphics-ellipsoid',
        name: {
          zh: '(椭)球实体',
          en: 'EllipsoidGraphics'
        }
      },
      {
        path: 'vc-graphics-label',
        component: 'entity/vc-graphics-label',
        name: {
          zh: '标签实体',
          en: 'LabelGraphics'
        }
      },
      {
        path: 'vc-graphics-model',
        component: 'entity/vc-graphics-model',
        name: {
          zh: '模型实体',
          en: 'ModelGraphics'
        }
      },
      {
        path: 'vc-graphics-path',
        component: 'entity/vc-graphics-path',
        name: {
          zh: '路径实体',
          en: 'PathGraphics'
        }
      },
      {
        path: 'vc-graphics-plane',
        component: 'entity/vc-graphics-plane',
        name: {
          zh: '平面实体',
          en: 'PlaneGraphics'
        }
      },
      {
        path: 'vc-graphics-point',
        component: 'entity/vc-graphics-point',
        name: {
          zh: '点实体',
          en: 'PointGraphics'
        }
      },
      {
        path: 'vc-graphics-polygon',
        component: 'entity/vc-graphics-polygon',
        name: {
          zh: '多边形实体',
          en: 'PolygonGraphics'
        }
      },
      {
        path: 'vc-graphics-polyline',
        component: 'entity/vc-graphics-polyline',
        name: {
          zh: '多段线实体',
          en: 'PolylineGraphics'
        }
      },
      {
        path: 'vc-graphics-polyline-volume',
        component: 'entity/vc-graphics-polyline-volume',
        name: {
          zh: '多段线柱实体',
          en: 'PolylineVolumeGraphics'
        }
      },
      {
        path: 'vc-graphics-rectangle',
        component: 'entity/vc-graphics-rectangle',
        name: {
          zh: '矩形实体',
          en: 'RectangleGraphics'
        }
      },
      {
        path: 'vc-graphics-wall',
        component: 'entity/vc-graphics-wall',
        name: {
          zh: '围墙实体',
          en: 'WallGraphics'
        }
      }
    ]
  },
  {
    path: 'primitives',
    name: {
      zh: '图元集合',
      en: 'Primitives'
    },
    component: CateView,
    children: [
      {
        path: 'vc-collection-primitive',
        component: 'primitives/vc-collection-primitive',
        name: {
          zh: '普通图元集合',
          en: 'PrimitiveCollection'
        }
      },
      {
        path: 'vc-collection-primitive-billboard',
        component: 'primitives/vc-collection-primitive-billboard',
        name: {
          zh: '布告板图元集合',
          en: 'BillboardCollection'
        }
      },
      {
        path: 'vc-collection-primitive-label',
        component: 'primitives/vc-collection-primitive-label',
        name: {
          zh: '标签图元集合',
          en: 'LabelCollection'
        }
      },
      {
        path: 'vc-collection-primitive-point',
        component: 'primitives/vc-collection-primitive-point',
        name: {
          zh: '点图元集合',
          en: 'PointPrimitiveCollection'
        }
      },
      {
        path: 'vc-collection-primitive-polyline',
        component: 'primitives/vc-collection-primitive-polyline',
        name: {
          zh: '线图元集合',
          en: 'PolylineCollection'
        }
      }
    ]
  },
  {
    path: 'primitive',
    name: {
      zh: '图元',
      en: 'Primitive'
    },
    component: CateView,
    children: [
      {
        path: 'vc-primitive',
        component: 'primitive/vc-primitive',
        name: {
          zh: '普通图元',
          en: 'VcPrimitive'
        }
      },
      {
        path: 'vc-primitive-ground',
        component: 'primitive/vc-primitive-ground',
        name: {
          zh: '贴地图元',
          en: 'GroundPrimitive'
        }
      },
      {
        path: 'vc-primitive-classification',
        component: 'primitive/vc-primitive-classification',
        name: {
          zh: '分类图元',
          en: 'ClassificationPrimitive'
        }
      },
      {
        path: 'vc-primitive-billboard',
        component: 'primitive/vc-primitive-billboard',
        name: {
          zh: '布告板图元',
          en: 'Billboard'
        }
      },
      {
        path: 'vc-primitive-label',
        component: 'primitive/vc-primitive-label',
        name: {
          zh: '标签图元',
          en: 'Label'
        }
      },
      {
        path: 'vc-primitive-point',
        component: 'primitive/vc-primitive-point',
        name: {
          zh: '点图元',
          en: 'PointPrimitive'
        }
      },
      {
        path: 'vc-primitive-polyline',
        component: 'primitive/vc-primitive-polyline',
        name: {
          zh: '线图元',
          en: 'PolylinePrimitive'
        }
      },
      {
        path: 'vc-primitive-polyline-ground',
        component: 'primitive/vc-primitive-polyline-ground',
        name: {
          zh: '贴地线图元',
          en: 'GroundPolylinePrimitive'
        }
      },
      {
        path: 'vc-primitive-model',
        component: 'primitive/vc-primitive-model',
        name: {
          zh: '模型图元',
          en: 'Model'
        }
      },
      {
        path: 'vc-primitive-3dtileset',
        component: 'primitive/vc-primitive-3dtileset',
        name: {
          zh: '3DTileset图元',
          en: 'Cesium3DTileset'
        }
      }
    ]
  },
  {
    path: 'geometry',
    name: {
      zh: '几何体',
      en: 'geometry'
    },
    component: CateView,
    children: [
      {
        path: 'vc-instance-geometry',
        component: 'geometry/vc-instance-geometry',
        name: {
          zh: '几何体实例',
          en: 'GeometryInstance'
        }
      },
      {
        path: 'vc-geometry-box',
        component: 'geometry/vc-geometry-box',
        name: {
          zh: '立方体',
          en: 'BoxGeometry'
        }
      },
      {
        path: 'vc-geometry-circle',
        component: 'geometry/vc-geometry-circle',
        name: {
          zh: '圆形',
          en: 'CircleGeometry'
        }
      },
      {
        path: 'vc-geometry-polygon-coplanar',
        component: 'geometry/vc-geometry-polygon-coplanar',
        name: {
          zh: '共面多边形',
          en: 'CoplanarPolygonGeometry'
        }
      },
      {
        path: 'vc-geometry-corridor',
        component: 'geometry/vc-geometry-corridor',
        name: {
          zh: '廊体',
          en: 'CorridorGeometry'
        }
      },
      {
        path: 'vc-geometry-cylinder',
        component: 'geometry/vc-geometry-cylinder',
        name: {
          zh: '圆柱体',
          en: 'CylinderGeometry'
        }
      },
      {
        path: 'vc-geometry-ellipse',
        component: 'geometry/vc-geometry-ellipse',
        name: {
          zh: '椭圆',
          en: 'EllipseGeometry'
        }
      },
      {
        path: 'vc-geometry-ellipsoid',
        component: 'geometry/vc-geometry-ellipsoid',
        name: {
          zh: '椭球体',
          en: 'EllipsoidGeometry'
        }
      },
      {
        path: 'vc-geometry-frustum',
        component: 'geometry/vc-geometry-frustum',
        name: {
          zh: '视锥体',
          en: 'FrustumGeometry'
        }
      },
      {
        path: 'vc-geometry-polyline-ground',
        component: 'geometry/vc-geometry-polyline-ground',
        name: {
          zh: '贴地多段线',
          en: 'GroundPolylineGeometry'
        }
      },
      {
        path: 'vc-geometry-plane',
        component: 'geometry/vc-geometry-plane',
        name: {
          zh: '平面',
          en: 'PlaneGeometry'
        }
      },
      {
        path: 'vc-geometry-polygon',
        component: 'geometry/vc-geometry-polygon',
        name: {
          zh: '多边形',
          en: 'PolygonGeometry'
        }
      },
      {
        path: 'vc-geometry-polyline',
        component: 'geometry/vc-geometry-polyline',
        name: {
          zh: '多段线',
          en: 'PolylineGeometry'
        }
      },
      {
        path: 'vc-geometry-polyline-volume',
        component: 'geometry/vc-geometry-polyline-volume',
        name: {
          zh: '多段线柱体',
          en: 'PolylineVolumeGeometry'
        }
      },
      {
        path: 'vc-geometry-rectangle',
        component: 'geometry/vc-geometry-rectangle',
        name: {
          zh: '矩形',
          en: 'RectangleGeometry'
        }
      },
      {
        path: 'vc-geometry-polyline-simple',
        component: 'geometry/vc-geometry-polyline-simple',
        name: {
          zh: '线段',
          en: 'SimplePolylineGeometry'
        }
      },
      {
        path: 'vc-geometry-sphere',
        component: 'geometry/vc-geometry-sphere',
        name: {
          zh: '球体',
          en: 'SphereGeometry'
        }
      },
      {
        path: 'vc-geometry-wall',
        component: 'geometry/vc-geometry-wall',
        name: {
          zh: '围墙',
          en: 'WallGeometry'
        }
      }
    ]
  },
  {
    path: 'tool',
    component: CateView,
    name: {
      zh: '工具',
      en: 'Tool'
    },
    children: [
      {
        path: 'vc-drawing',
        component: 'tool/vc-drawing',
        name: {
          zh: '绘制',
          en: 'Drawing'
        }
      },
      {
        path: 'vc-measuring',
        component: 'tool/vc-measuring',
        name: {
          zh: '量算',
          en: 'Measuring'
        }
      }
    ]
  },
  {
    path: 'control',
    component: CateView,
    name: {
      zh: '控件',
      en: 'Control'
    },
    children: [
      {
        path: 'vc-navigation',
        component: 'control/vc-navigation',
        name: {
          zh: '导航',
          en: 'VcNavigation'
        }
      },
      {
        path: 'vc-navigation-sm',
        component: 'control/vc-navigation-sm',
        name: {
          zh: '导航-sm',
          en: 'VcNavigationSM'
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
        path: 'vc-heatmap',
        component: 'visualization/vc-heatmap',
        name: {
          zh: '热力图',
          en: 'VcHeatMap'
        }
      },
      {
        path: 'vc-windmap',
        component: 'visualization/vc-windmap',
        name: {
          zh: '风向图',
          en: 'VcWindMap'
        }
      },
      {
        path: 'vc-analysis-flood',
        component: 'visualization/vc-analysis-flood',
        name: {
          zh: '淹没分析',
          en: 'VcFloodAnalysis'
        }
      }
    ]
  },
  {
    path: 'other',
    component: CateView,
    name: {
      zh: '其他',
      en: 'Other'
    },
    children: [
      {
        path: 'vc-collection-stage-process-post',
        component: 'other/vc-collection-stage-process-post',
        name: {
          zh: '后期处理集合',
          en: 'PostProcessStageCollection'
        }
      },
      {
        path: 'vc-stage-process-post',
        component: 'other/vc-stage-process-post',
        name: {
          zh: '后期处理',
          en: 'PostProcessStage'
        }
      }
    ]
  },
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
