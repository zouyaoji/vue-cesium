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
          zh: '场景容器',
          en: 'CesiumViewer'
        }
      }
    ]
  },
  {
    path: 'layer',
    name: {
      zh: '图层',
      en: 'Layer'
    },
    component: CateView,
    children: [
      {
        path: 'supermap-imagery-layer',
        component: 'supermap-imagery-layer',
        name: {
          zh: '超图影像服务图层',
          en: 'SuperMapImageryLayer'
        }
      },
      {
        path: 'arcgis-imagery-layer',
        component: 'arcgis-imagery-layer',
        name: {
          zh: 'ArcGIS影像服务图层',
          en: 'ArcGISImageryLayer'
        }
      },
      {
        path: 'tianditu-imagery-layer',
        component: 'tianditu-imagery-layer',
        name: {
          zh: '天地图服务图层',
          en: 'TiandituImageryLayer'
        }
      }
    ]
  }
  // {
  //   path: 'search',
  //   name: {
  //     zh: '检索',
  //     en: 'Search'
  //   },
  //   component: CateView,
  //   children: [
  //     {
  //       path: 'local-search',
  //       component: 'bm-local-search',
  //       name: {
  //         zh: '地区检索',
  //         en: 'Local Search'
  //       }
  //     },
  //     {
  //       path: 'transit',
  //       component: 'bm-transit',
  //       name: {
  //         zh: '公交路线规划',
  //         en: 'Transit'
  //       }
  //     },
  //     {
  //       path: 'walking',
  //       component: 'bm-walking',
  //       name: {
  //         zh: '步行路线规划',
  //         en: 'Walking'
  //       }
  //     },
  //     {
  //       path: 'driving',
  //       component: 'bm-driving',
  //       name: {
  //         zh: '驾车路线规划',
  //         en: 'Driving'
  //       }
  //     },
  //     {
  //       path: 'bus',
  //       component: 'bm-bus',
  //       name: {
  //         zh: '公交路线检索',
  //         en: 'Bus'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: 'context-menu',
  //   name: {
  //     zh: '上下文菜单',
  //     en: 'Context Menu'
  //   },
  //   component: CateView,
  //   children: [
  //     {
  //       path: 'menu',
  //       component: 'bm-context-menu',
  //       name: {
  //         zh: '菜单',
  //         en: 'Menu'
  //       }
  //     },
  //     {
  //       path: 'item',
  //       component: 'bm-context-menu-item',
  //       name: {
  //         zh: '菜单项',
  //         en: 'Menu Item'
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: 'other',
  //   name: {
  //     zh: '其它',
  //     en: 'Other'
  //   },
  //   component: CateView,
  //   children: [
  //     {
  //       path: 'boundary',
  //       name: {
  //         zh: '行政区划',
  //         en: 'Boundary'
  //       },
  //       component: 'bm-boundary'
  //     },
  //     {
  //       path: 'auto-complete',
  //       name: {
  //         zh: '自动填充',
  //         en: 'Auto Complete'
  //       },
  //       component: 'bm-auto-complete'
  //     }
  //   ]
  // },
  // {
  //   path: 'bmaplib',
  //   name: {
  //     zh: '第三方组件库',
  //     en: 'Third Party'
  //   },
  //   component: CateView,
  //   children: [
  //     {
  //       path: 'marker-clusterer',
  //       name: {
  //         zh: '点聚合',
  //         en: 'Marker Clusterer'
  //       },
  //       component: 'bml-marker-clusterer'
  //     },
  //     {
  //       path: 'lushu',
  //       name: {
  //         zh: '路书',
  //         en: 'LuShu'
  //       },
  //       component: 'bml-lushu'
  //     },
  //     {
  //       path: 'heatmap',
  //       name: {
  //         zh: '热力图',
  //         en: 'Heatmap'
  //       },
  //       component: 'bml-heatmap'
  //     },
  //     {
  //       path: 'curve-line',
  //       name: {
  //         zh: '弧线',
  //         en: 'Curve Line'
  //       },
  //       component: 'bml-curve-line'
  //     }
  //   ]
  // }
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
