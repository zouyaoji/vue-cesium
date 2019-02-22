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
        typeof item.component === 'string'
          ? () => import(`./md/${lang}/${item.component}.md`)
          : item.component,
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
        component: 'start-installation',
        name: {
          zh: '安装',
          en: 'Installation'
        }
      },
      {
        path: 'usage',
        component: 'start-usage',
        name: {
          zh: '快速上手',
          en: 'Usage'
        }
      },
      {
        path: 'base',
        component: 'start-base',
        name: {
          zh: '基础',
          en: 'Base'
        }
      }
    ]
  },
  {
    // 指南
    path: 'guide',
    component: CateView,
    name: {
      zh: '指南',
      en: 'Guide'
    },
    children: [
      {
        path: 'painting',
        component: 'guide-painting',
        name: {
          zh: '绘制',
          en: 'Painting'
        }
      },
      {
        path: 'measuring',
        component: 'guide-measuring',
        name: {
          zh: '量算',
          en: 'Measuring'
        }
      }
    ]
  },
  {
    path: 'CesiumViewer',
    name: {
      zh: '场景',
      en: 'Viewer'
    },
    component: CateView,
    children: [
      {
        path: 'cesium-viewer',
        component: 'cesium-viewer',
        name: {
          zh: '场景视图',
          en: 'CesiumViewer'
        }
      }
    ]
  },
  {
    path: 'imageryLayers',
    name: {
      zh: '图层',
      en: 'Layers'
    },
    component: CateView,
    children: [
      {
        path: 'imagery-layer',
        component: 'imageryLayers/imagery-layer',
        name: {
          zh: '影像图层',
          en: 'ImageryLayer'
        }
      },
      {
        path: 'arcgis-mapserver-imagery-provider',
        component: 'imageryLayers/arcgis-mapserver-imagery-provider',
        name: {
          zh: 'ArcGIS地图影像服务Provider',
          en: 'ArcGisMapServerImageryProvider'
        }
      },
      {
        path: 'bingmaps-imagery-provider',
        component: 'imageryLayers/bingmaps-imagery-provider',
        name: {
          zh: 'BingMaps影像Provider',
          en: 'BingMapsImageryLayer'
        }
      },
      {
        path: 'mapbox-imagery-provider',
        component: 'imageryLayers/mapbox-imagery-provider',
        name: {
          zh: 'Mapbox影像Provider',
          en: 'MapboxImageryProvider'
        }
      },
      {
        path: 'openstreetmap-imagery-provider',
        component: 'imageryLayers/openstreetmap-imagery-provider',
        name: {
          zh: 'Openstreetmap影像Provider',
          en: 'OpenStreetMapImageryProvider'
        }
      },
      {
        path: 'singletile-imagery-provider',
        component: 'imageryLayers/singletile-imagery-provider',
        name: {
          zh: 'Singletile影像Provider',
          en: 'SingleTileImageryProvider'
        }
      },
      {
        path: 'urltemplate-imagery-provider',
        component: 'imageryLayers/urltemplate-imagery-provider',
        name: {
          zh: 'UrlTemplate影像Provider',
          en: 'UrlTemplateImageryProvider'
        }
      },
      {
        path: 'wmts-imagery-provider',
        component: 'imageryLayers/wmts-imagery-provider',
        name: {
          zh: 'WMTS服务Provider',
          en: 'WebMapTileServiceImageryProvider'
        }
      },
      {
        path: 'supermap-imagery-provider',
        component: 'imageryLayers/supermap-imagery-provider',
        name: {
          zh: 'SuperMap影像服务Provider',
          en: 'SuperMapImageryProvider'
        }
      }
    ]
  },
  {
    path: 'entities',
    name: {
      zh: '实体集合',
      en: 'entities'
    },
    component: CateView,
    children: [
      {
        path: 'entity',
        component: 'entities/entity',
        name: {
          zh: '实体',
          en: 'Entity'
        }
      },
      {
        path: 'billboard-graphics',
        component: 'entities/billboard-graphics',
        name: {
          zh: '布告板',
          en: 'BillboardGraphics'
        }
      },
      {
        path: 'box-graphics',
        component: 'entities/box-graphics',
        name: {
          zh: '六面体盒子',
          en: 'BoxGraphics'
        }
      },
      {
        path: 'corridor-graphics',
        component: 'entities/corridor-graphics',
        name: {
          zh: '走廊',
          en: 'CorridorGraphics'
        }
      },
      {
        path: 'cylinder-graphics',
        component: 'entities/cylinder-graphics',
        name: {
          zh: '圆柱（锥）体',
          en: 'CylinderGraphics'
        }
      },
      {
        path: 'ellipse-graphics',
        component: 'entities/ellipse-graphics',
        name: {
          zh: '椭圆形(体)',
          en: 'EllipseGraphics'
        }
      },
      {
        path: 'ellipsoid-graphics',
        component: 'entities/ellipsoid-graphics',
        name: {
          zh: '(椭)球体',
          en: 'EllipsoidGraphics'
        }
      },
      {
        path: 'label-graphics',
        component: 'entities/label-graphics',
        name: {
          zh: '标签',
          en: 'LabelGraphics'
        }
      },
      {
        path: 'model-graphics',
        component: 'entities/model-graphics',
        name: {
          zh: '模型',
          en: 'ModelGraphics'
        }
      },
      {
        path: 'path-graphics',
        component: 'entities/path-graphics',
        name: {
          zh: '路径',
          en: 'PathGraphics'
        }
      },
      {
        path: 'plane-graphics',
        component: 'entities/plane-graphics',
        name: {
          zh: '平面',
          en: 'PlaneGraphics'
        }
      },
      {
        path: 'point-graphics',
        component: 'entities/point-graphics',
        name: {
          zh: '点',
          en: 'PointGraphics'
        }
      },
      {
        path: 'polygon-graphics',
        component: 'entities/polygon-graphics',
        name: {
          zh: '多边形',
          en: 'PolygonGraphics'
        }
      },
      {
        path: 'polyline-graphics',
        component: 'entities/polyline-graphics',
        name: {
          zh: '折线',
          en: 'PolylineGraphics'
        }
      },
      {
        path: 'polyline-volume-graphics',
        component: 'entities/polyline-volume-graphics',
        name: {
          zh: '多段线柱体',
          en: 'PolylineVolumeGraphics'
        }
      },
      {
        path: 'rectangle-graphics',
        component: 'entities/rectangle-graphics',
        name: {
          zh: '矩形',
          en: 'RectangleGraphics'
        }
      },
      {
        path: 'wall-graphics',
        component: 'entities/wall-graphics',
        name: {
          zh: '围墙',
          en: 'WallGraphics'
        }
      }
    ]
  },
  {
    path: 'primitive',
    name: {
      zh: '几何体',
      en: 'Primitive'
    },
    component: CateView,
    children: [{
      path: 'cesium-3dtileset',
      component: 'cesium-3dtileset',
      name: {
        zh: 'Cesium3DTileset模型',
        en: 'Cesium3DTileset'
      }
    }]
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
