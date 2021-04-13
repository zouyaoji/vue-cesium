import { App } from 'vue'
import VcProviderImageryArcgisMapserver from './arcgis/imagery'
import VcProviderImageryBaidumap from './baidu'
import VcProviderImageryBingmaps from './bingmaps'
import VcProviderImageryGoogleearthEnterprise from './google-earth'
import VcProviderImageryGrid from './grid'
import VcProviderImageryIon from './ion'
import VcProviderImageryMapboxStyle from './mapbox-style'
import VcProviderImageryOsm from './osm'
import VcProviderImageryTileSingle from './single-tile'
import VcProviderImagerySupermap from './supermap'
import VcProviderImageryTianditu from './tianditu/imagery'
import VcProviderImageryTileCoordinates from './tile-coordinates'
import VcProviderImageryTileMapservice from './tile-map-service'
import VcProviderImageryTiledcache from './tiled-cache'
import VcProviderImageryUrltemplate from './url-template'
import VcProviderImageryWms from './wms'
import VcProviderImageryWmts from './wmts'

import VcProviderTerrainCesium from './cesium-terrain'
import VcProviderTerrainArcgisTiledElevation from './arcgis/terrain'
import VcProviderTerrainVrTheworld from './vr-theworld'
import VcProviderTerrainTianditu from './tianditu/terrain'


const components = [
  VcProviderImageryArcgisMapserver,
  VcProviderImageryBaidumap,
  VcProviderImageryBingmaps,
  VcProviderImageryGoogleearthEnterprise,
  VcProviderImageryGrid,
  VcProviderImageryIon,
  VcProviderImageryMapboxStyle,
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

  VcProviderTerrainCesium,
  VcProviderTerrainArcgisTiledElevation,
  VcProviderTerrainVrTheworld,
  VcProviderTerrainTianditu
]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export {
  VcProviderImageryArcgisMapserver,
  VcProviderImageryBaidumap,
  VcProviderImageryBingmaps,
  VcProviderImageryGoogleearthEnterprise,
  VcProviderImageryGrid,
  VcProviderImageryIon,
  VcProviderImageryMapboxStyle,
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

  VcProviderTerrainCesium,
  VcProviderTerrainArcgisTiledElevation,
  VcProviderTerrainVrTheworld,
  VcProviderTerrainTianditu
}

export default {
  install
}
