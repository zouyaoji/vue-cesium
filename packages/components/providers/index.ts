/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2022-01-18 14:55:32
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\providers\index.ts
 */
import { App } from 'vue'
import ImageryProviderArcgis from './arcgis/imagery'
import ImageryProviderBaidu from './baidu'
import ImageryProviderBing from './bingmaps'
import ImageryProviderGoogle from './google-earth'
import ImageryProviderGrid from './grid'
import ImageryProviderIon from './ion'
import ImageryProviderMapbox from './mapbox-style'
import ImageryProviderOsm from './osm'
import ImageryProviderSingletile from './single-tile'
import ImageryProviderSupermap from './supermap'
import ImageryProviderTianditu from './tianditu/imagery'
import ImageryProviderTileCoordinates from './tile-coordinates'
import ImageryProviderTms from './tile-map-service'
import ImageryProviderTiledcache from './tiled-cache'
import ImageryProviderUrltemplate from './url-template'
import ImageryProviderWms from './wms'
import ImageryProviderWmts from './wmts'

import TerrainProviderCesium from './cesium-terrain'
import TerrainProviderArcgis from './arcgis/terrain'
import TerrainProviderVrTheworld from './vr-theworld'
import TerrainProviderTianditu from './tianditu/terrain'
import { SFCWithInstall } from '@vue-cesium/utils/types'

const components = [
  ImageryProviderArcgis,
  ImageryProviderBaidu,
  ImageryProviderBing,
  ImageryProviderGoogle,
  ImageryProviderGrid,
  ImageryProviderIon,
  ImageryProviderMapbox,
  ImageryProviderOsm,
  ImageryProviderSingletile,
  ImageryProviderSupermap,
  ImageryProviderTianditu,
  ImageryProviderTileCoordinates,
  ImageryProviderTms,
  ImageryProviderTiledcache,
  ImageryProviderUrltemplate,
  ImageryProviderWms,
  ImageryProviderWmts,

  TerrainProviderCesium,
  TerrainProviderArcgis,
  TerrainProviderVrTheworld,
  TerrainProviderTianditu
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

export const VcImageryProviderArcgis = ImageryProviderArcgis as SFCWithInstall<typeof ImageryProviderArcgis>
export const VcImageryProviderBaidu = ImageryProviderBaidu as SFCWithInstall<typeof ImageryProviderBaidu>
export const VcImageryProviderBing = ImageryProviderBing as SFCWithInstall<typeof ImageryProviderBing>
export const VcImageryProviderGoogle = ImageryProviderGoogle as SFCWithInstall<typeof ImageryProviderGoogle>
export const VcImageryProviderGrid = ImageryProviderGrid as SFCWithInstall<typeof ImageryProviderGrid>
export const VcImageryProviderIon = ImageryProviderIon as SFCWithInstall<typeof ImageryProviderIon>
export const VcImageryProviderMapbox = ImageryProviderMapbox as SFCWithInstall<typeof ImageryProviderMapbox>
export const VcImageryProviderOsm = ImageryProviderOsm as SFCWithInstall<typeof ImageryProviderOsm>
export const VcImageryProviderSingletile = ImageryProviderSingletile as SFCWithInstall<typeof ImageryProviderSingletile>
export const VcImageryProviderSupermap = ImageryProviderSupermap as SFCWithInstall<typeof ImageryProviderSupermap>
export const VcImageryProviderTianditu = ImageryProviderTianditu as SFCWithInstall<typeof ImageryProviderTianditu>
export const VcImageryProviderTileCoordinates = ImageryProviderTileCoordinates as SFCWithInstall<typeof ImageryProviderTileCoordinates>
export const VcImageryProviderTms = ImageryProviderTms as SFCWithInstall<typeof ImageryProviderTms>
export const VcImageryProviderTiledcache = ImageryProviderTiledcache as SFCWithInstall<typeof ImageryProviderTiledcache>
export const VcImageryProviderUrltemplate = ImageryProviderUrltemplate as SFCWithInstall<typeof ImageryProviderUrltemplate>
export const VcImageryProviderWms = ImageryProviderWms as SFCWithInstall<typeof ImageryProviderWms>
export const VcImageryProviderWmts = ImageryProviderWmts as SFCWithInstall<typeof ImageryProviderWmts>

export const VcTerrainProviderCesium = TerrainProviderCesium as SFCWithInstall<typeof TerrainProviderCesium>
export const VcTerrainProviderArcgis = TerrainProviderArcgis as SFCWithInstall<typeof TerrainProviderArcgis>
export const VcTerrainProviderVrTheworld = TerrainProviderVrTheworld as SFCWithInstall<typeof TerrainProviderVrTheworld>
export const VcTerrainProviderTianditu = TerrainProviderTianditu as SFCWithInstall<typeof TerrainProviderTianditu>

export * from './arcgis/imagery'
export * from './arcgis/terrain'
export * from './baidu'
export * from './bingmaps'
export * from './cesium-terrain'
export * from './google-earth'
export * from './grid'
export * from './ion'
export * from './mapbox-style'
export * from './osm'
export * from './single-tile'
export * from './supermap'
export * from './tianditu/imagery'
export * from './tianditu/terrain'
export * from './tile-coordinates'
export * from './tile-map-service'
export * from './tiled-cache'
export * from './url-template'
export * from './vr-theworld'
export * from './wms'
export * from './wmts'
