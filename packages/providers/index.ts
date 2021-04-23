import { App } from 'vue'
import VcProviderImageryArcgis from './arcgis/imagery'
import VcProviderImageryBaidumap from './baidu'
import VcProviderImageryBingmaps from './bingmaps'
import VcProviderImageryGoogle from './google-earth'
import VcProviderImageryGrid from './grid'
import VcProviderImageryIon from './ion'
import VcProviderImageryMapbox from './mapbox-style'
import VcProviderImageryOsm from './osm'
import VcProviderImagerySingletile from './single-tile'
import VcProviderImagerySupermap from './supermap'
import VcProviderImageryTianditu from './tianditu/imagery'
import VcProviderImageryTileCoordinates from './tile-coordinates'
import VcProviderImageryTms from './tile-map-service'
import VcProviderImageryTiledcache from './tiled-cache'
import VcProviderImageryUrltemplate from './url-template'
import VcProviderImageryWms from './wms'
import VcProviderImageryWmts from './wmts'

import VcProviderTerrainCesium from './cesium-terrain'
import VcProviderTerrainArcgis from './arcgis/terrain'
import VcProviderTerrainVrTheworld from './vr-theworld'
import VcProviderTerrainTianditu from './tianditu/terrain'


const components = [
  VcProviderImageryArcgis,
  VcProviderImageryBaidumap,
  VcProviderImageryBingmaps,
  VcProviderImageryGoogle,
  VcProviderImageryGrid,
  VcProviderImageryIon,
  VcProviderImageryMapbox,
  VcProviderImageryOsm,
  VcProviderImagerySingletile,
  VcProviderImagerySupermap,
  VcProviderImageryTianditu,
  VcProviderImageryTileCoordinates,
  VcProviderImageryTms,
  VcProviderImageryTiledcache,
  VcProviderImageryUrltemplate,
  VcProviderImageryWms,
  VcProviderImageryWmts,

  VcProviderTerrainCesium,
  VcProviderTerrainArcgis,
  VcProviderTerrainVrTheworld,
  VcProviderTerrainTianditu
]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export {
  VcProviderImageryArcgis,
  VcProviderImageryBaidumap,
  VcProviderImageryBingmaps,
  VcProviderImageryGoogle,
  VcProviderImageryGrid,
  VcProviderImageryIon,
  VcProviderImageryMapbox,
  VcProviderImageryOsm,
  VcProviderImagerySingletile,
  VcProviderImagerySupermap,
  VcProviderImageryTianditu,
  VcProviderImageryTileCoordinates,
  VcProviderImageryTms,
  VcProviderImageryTiledcache,
  VcProviderImageryUrltemplate,
  VcProviderImageryWms,
  VcProviderImageryWmts,

  VcProviderTerrainCesium,
  VcProviderTerrainArcgis,
  VcProviderTerrainVrTheworld,
  VcProviderTerrainTianditu
}

export default {
  install
}
