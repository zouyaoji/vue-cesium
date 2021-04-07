import { App } from 'vue'
import VcProviderImageryArcgisMapserver from './arcgis'
import VcProviderImageryBaidumap from './baidu'
import VcProviderImageryBingmaps from './bingmaps'
import VcProviderImageryGoogleearthEnterprise from './google-earth'
import VcProviderImageryGrid from './grid'
import VcProviderImageryIon from './ion'
import VcProviderImageryStyleMapbox from './mapbox-style'
import VcProviderImageryOsm from './osm'
import VcProviderImageryTileSingle from './single-tile'
import VcProviderImagerySupermap from './supermap'
import VcProviderImageryTianditu from './tianditu'
import VcProviderImageryTileCoordinates from './tile-coordinates'
import VcProviderImageryTileMapservice from './tile-map-service'
import VcProviderImageryTiledcache from './tiled-cache'
import VcProviderImageryUrltemplate from './url-template'
import VcProviderImageryWms from './wms'
import VcProviderImageryWmts from './wmts'

const components = [
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
}

export default {
  install
}
