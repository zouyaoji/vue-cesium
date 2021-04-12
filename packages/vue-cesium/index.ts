import type { App } from 'vue'
import VcViewer from '@vue-cesium/viewer'
// controls
import { VcCompass, VcZoomControl, VcPrint, VcMyLocation, VcLocationBar, VcDistanceLegend, VcNavigation } from '@vue-cesium/controls'
import VcLayerImagery from '@vue-cesium/imagery-layer'
import {
  VcProviderImageryArcgisMapserver,
  VcProviderImageryBaidumap,
  VcProviderImageryBingmaps,
  VcProviderImageryGoogleearthEnterprise,
  VcProviderImageryGrid,
  VcProviderImageryIon,
  VcProviderImageryStyleMapbox,
  VcProviderImageryOsm,
  VcProviderImageryTileSingle,
  VcProviderImagerySupermap,
  VcProviderImageryTianditu,
  VcProviderImageryTileCoordinates,
  VcProviderImageryTileMapservice,
  VcProviderImageryTiledcache,
  VcProviderImageryUrltemplate,
  VcProviderImageryWms,
  VcProviderImageryWmts
} from '@vue-cesium/providers'
import VcEntity from '@vue-cesium/entity'
// grapics
import {
  VcGraphicsBillboard,
  VcGraphicsBox,
  VcGraphicsCorridor,
  VcGraphicsCylinder,
  VcGraphicsEllipse,
  VcGraphicsEllipsoid,
  VcGraphicsLabel,
  VcGraphicsModel,
  VcGraphicsPath,
  VcGraphicsPlane,
  VcGraphicsPoint,
  VcGraphicsPolygon,
  VcGraphicsPolyline,
  VcGraphicsPolylineVolume,
  VcGraphicsRectangle,
  VcGraphicsTileset,
  VcGraphicsWall
} from '@vue-cesium/graphics'

import { use, i18n } from '@vue-cesium/locale'
// if you encountered problems alike "Can't resolve './version'"
// please run `yarn bootstrap` first
import { version as version_ } from './version'
import type { InstallOptions } from '@vue-cesium/utils/config'
import { setConfig } from '@vue-cesium/utils/config'


const version = version_
const locale = use

const defaultInstallOpt: InstallOptions = {
  cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js',
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5Y2U0ZTk2Ni1jNzdkLTQ3OWYtYjVmYS0yMGM3YTk3NjgzMmUiLCJpZCI6Njk5Nywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0ODA1MTc0OH0.Csy6yyAnv6JSBppH0Ou3ahshqcHFEhP27iOz5gjQMEo',
}

const components = [
  VcViewer,

  VcCompass,
  VcZoomControl,
  VcPrint,
  VcMyLocation,
  VcLocationBar,
  VcDistanceLegend,
  VcNavigation,

  VcLayerImagery,
  VcProviderImageryArcgisMapserver,
  VcProviderImageryBaidumap,
  VcProviderImageryBingmaps,
  VcProviderImageryGoogleearthEnterprise,
  VcProviderImageryGrid,
  VcProviderImageryIon,
  VcProviderImageryStyleMapbox,
  VcProviderImageryOsm,
  VcProviderImageryTileSingle,
  VcProviderImagerySupermap,
  VcProviderImageryTianditu,
  VcProviderImageryTileCoordinates,
  VcProviderImageryTileMapservice,
  VcProviderImageryTiledcache,
  VcProviderImageryUrltemplate,
  VcProviderImageryWms,
  VcProviderImageryWmts,

  VcEntity,
  VcGraphicsBillboard,
  VcGraphicsBox,
  VcGraphicsCorridor,
  VcGraphicsCylinder,
  VcGraphicsEllipse,
  VcGraphicsEllipsoid,
  VcGraphicsLabel,
  VcGraphicsModel,
  VcGraphicsPath,
  VcGraphicsPlane,
  VcGraphicsPoint,
  VcGraphicsPolygon,
  VcGraphicsPolyline,
  VcGraphicsPolylineVolume,
  VcGraphicsRectangle,
  VcGraphicsTileset,
  VcGraphicsWall
]

const install = (app: App, opt: InstallOptions): void => {
  const option = Object.assign(defaultInstallOpt, opt)
  locale(option.lang)
  if (option.i18n) {
    i18n(option.i18n)
  }
  app.config.globalProperties.$VueCesium = option
  setConfig(option)

  components.forEach(component => {
    app.component(component.name, component)
  })

  // plugins.forEach(plugin => {
  //   app.use(plugin as any)
  // })
}

export {
  VcViewer,

  VcCompass,
  VcZoomControl,
  VcPrint,
  VcMyLocation,
  VcLocationBar,
  VcDistanceLegend,
  VcNavigation,

  VcLayerImagery,
  VcProviderImageryArcgisMapserver,
  VcProviderImageryBaidumap,
  VcProviderImageryBingmaps,
  VcProviderImageryGoogleearthEnterprise,
  VcProviderImageryGrid,
  VcProviderImageryIon,
  VcProviderImageryStyleMapbox,
  VcProviderImageryOsm,
  VcProviderImageryTileSingle,
  VcProviderImagerySupermap,
  VcProviderImageryTianditu,
  VcProviderImageryTileCoordinates,
  VcProviderImageryTileMapservice,
  VcProviderImageryTiledcache,
  VcProviderImageryUrltemplate,
  VcProviderImageryWms,
  VcProviderImageryWmts,

  VcEntity,
  VcGraphicsBillboard,
  VcGraphicsBox,
  VcGraphicsCorridor,
  VcGraphicsCylinder,
  VcGraphicsEllipse,
  VcGraphicsEllipsoid,
  VcGraphicsLabel,
  VcGraphicsModel,
  VcGraphicsPath,
  VcGraphicsPlane,
  VcGraphicsPoint,
  VcGraphicsPolygon,
  VcGraphicsPolyline,
  VcGraphicsPolylineVolume,
  VcGraphicsRectangle,
  VcGraphicsTileset,
  VcGraphicsWall,
  version,
  install,
  locale
}
export * from '@vue-cesium/composables'
export default {
  version,
  install,
}
