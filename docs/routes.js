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
    path: 'imageryLayer',
    name: {
      zh: '影像图层',
      en: 'ImageryLayer'
    },
    component: CateView,
    children: [
      {
        path: 'arcgis-mapserver-imagery-provider',
        component: 'arcgis-mapserver-imagery-provider',
        name: {
          zh: 'ArcGIS地图影像服务Provider',
          en: 'ArcGisMapServerImageryProvider'
        }
      },
      {
        path: 'bingmaps-imagery-provider',
        component: 'bingmaps-imagery-provider',
        name: {
          zh: 'BingMaps影像Provider',
          en: 'BingMapsImageryLayer'
        }
      },
      {
        path: 'mapbox-imagery-provider',
        component: 'mapbox-imagery-provider',
        name: {
          zh: 'Mapbox影像Provider',
          en: 'MapboxImageryProvider'
        }
      },
      {
        path: 'openstreetmap-imagery-provider',
        component: 'openstreetmap-imagery-provider',
        name: {
          zh: 'Openstreetmap影像Provider',
          en: 'OpenStreetMapImageryProvider'
        }
      },
      {
        path: 'singletile-imagery-provider',
        component: 'singletile-imagery-provider',
        name: {
          zh: 'Singletile影像Provider',
          en: 'SingleTileImageryProvider'
        }
      },
      {
        path: 'urltemplate-imagery-provider',
        component: 'urltemplate-imagery-provider',
        name: {
          zh: 'UrlTemplate影像Provider',
          en: 'UrlTemplateImageryProvider'
        }
      },
      {
        path: 'wmts-imagery-provider',
        component: 'wmts-imagery-provider',
        name: {
          zh: 'WMTS服务Provider',
          en: 'WebMapTileServiceImageryProvider'
        }
      },
      {
        path: 'supermap-imagery-provider',
        component: 'supermap-imagery-provider',
        name: {
          zh: 'SuperMap影像服务Provider',
          en: 'SuperMapImageryProvider'
        }
      }
    ]
  },
  {
    path: 'entity',
    name: {
      zh: '实体',
      en: 'entity'
    },
    component: CateView,
    children: [{
      path: 'polyline-entity',
      component: 'polyline-entity',
      name: {
        zh: '线实体',
        en: 'PolylineGraphics'
      }
    }]
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
        zh: '3DTiles模型',
        en: '3DTiles Model'
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
