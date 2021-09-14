import { App } from 'vue'
import ProviderImageryArcgis from './arcgis/imagery'
import ProviderImageryBaidumap from './baidu'
import ProviderImageryBingmaps from './bingmaps'
import ProviderImageryGoogle from './google-earth'
import ProviderImageryGrid from './grid'
import ProviderImageryIon from './ion'
import ProviderImageryMapbox from './mapbox-style'
import ProviderImageryOsm from './osm'
import ProviderImagerySingletile from './single-tile'
import ProviderImagerySupermap from './supermap'
import ProviderImageryTianditu from './tianditu/imagery'
import ProviderImageryTileCoordinates from './tile-coordinates'
import ProviderImageryTms from './tile-map-service'
import ProviderImageryTiledcache from './tiled-cache'
import ProviderImageryUrltemplate from './url-template'
import ProviderImageryWms from './wms'
import ProviderImageryWmts from './wmts'

import ProviderTerrainCesium from './cesium-terrain'
import ProviderTerrainArcgis from './arcgis/terrain'
import ProviderTerrainVrTheworld from './vr-theworld'
import ProviderTerrainTianditu from './tianditu/terrain'
import { SFCWithInstall } from '@vue-cesium/utils/types'

const components = [
  ProviderImageryArcgis,
  ProviderImageryBaidumap,
  ProviderImageryBingmaps,
  ProviderImageryGoogle,
  ProviderImageryGrid,
  ProviderImageryIon,
  ProviderImageryMapbox,
  ProviderImageryOsm,
  ProviderImagerySingletile,
  ProviderImagerySupermap,
  ProviderImageryTianditu,
  ProviderImageryTileCoordinates,
  ProviderImageryTms,
  ProviderImageryTiledcache,
  ProviderImageryUrltemplate,
  ProviderImageryWms,
  ProviderImageryWmts,

  ProviderTerrainCesium,
  ProviderTerrainArcgis,
  ProviderTerrainVrTheworld,
  ProviderTerrainTianditu
]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export default {
  install
}

components.forEach(cmp => {
  cmp['install'] = (app: App): void => {
    app.component(cmp.name, cmp)
  }
})

export const VcProviderImageryArcgis = ProviderImageryArcgis as SFCWithInstall<typeof ProviderImageryArcgis>
export const VcProviderImageryBaidumap = ProviderImageryBaidumap as SFCWithInstall<typeof ProviderImageryBaidumap>
export const VcProviderImageryBingmaps = ProviderImageryBingmaps as SFCWithInstall<typeof ProviderImageryBingmaps>
export const VcProviderImageryGoogle = ProviderImageryGoogle as SFCWithInstall<typeof ProviderImageryGoogle>
export const VcProviderImageryGrid = ProviderImageryGrid as SFCWithInstall<typeof ProviderImageryGrid>
export const VcProviderImageryIon = ProviderImageryIon as SFCWithInstall<typeof ProviderImageryIon>
export const VcProviderImageryMapbox = ProviderImageryMapbox as SFCWithInstall<typeof ProviderImageryMapbox>
export const VcProviderImageryOsm = ProviderImageryOsm as SFCWithInstall<typeof ProviderImageryOsm>
export const VcProviderImagerySingletile = ProviderImagerySingletile as SFCWithInstall<typeof ProviderImagerySingletile>
export const VcProviderImagerySupermap = ProviderImagerySupermap as SFCWithInstall<typeof ProviderImagerySupermap>
export const VcProviderImageryTianditu = ProviderImageryTianditu as SFCWithInstall<typeof ProviderImageryTianditu>
export const VcProviderImageryTileCoordinates = ProviderImageryTileCoordinates as SFCWithInstall<typeof ProviderImageryTileCoordinates>
export const VcProviderImageryTms = ProviderImageryTms as SFCWithInstall<typeof ProviderImageryTms>
export const VcProviderImageryTiledcache = ProviderImageryTiledcache as SFCWithInstall<typeof ProviderImageryTiledcache>
export const VcProviderImageryUrltemplate = ProviderImageryUrltemplate as SFCWithInstall<typeof ProviderImageryUrltemplate>
export const VcProviderImageryWms = ProviderImageryWms as SFCWithInstall<typeof ProviderImageryWms>
export const VcProviderImageryWmts = ProviderImageryWmts as SFCWithInstall<typeof ProviderImageryWmts>

export const VcProviderTerrainCesium = ProviderTerrainCesium as SFCWithInstall<typeof ProviderTerrainCesium>
export const VcProviderTerrainArcgis = ProviderTerrainArcgis as SFCWithInstall<typeof ProviderTerrainArcgis>
export const VcProviderTerrainVrTheworld = ProviderTerrainVrTheworld as SFCWithInstall<typeof ProviderTerrainVrTheworld>
export const VcProviderTerrainTianditu = ProviderTerrainTianditu as SFCWithInstall<typeof ProviderTerrainTianditu>
