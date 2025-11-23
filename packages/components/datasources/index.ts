import type { SFCWithInstall } from '@vue-cesium/utils/types'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2022-01-19 21:20:49
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\datasources\index.ts
 */
import type { App } from 'vue'
import DatasourceCustom from './custom'
import DatasourceCzml from './czml'
import DatasourceGeojson from './geojson'

import DatasourceKml from './kml'

const components = [DatasourceCustom, DatasourceCzml, DatasourceGeojson, DatasourceKml]

function install(app: App): void {
  components.forEach((cmp) => {
    app.component(cmp.name, cmp)
  })
}

export default {
  install
}

components.forEach((cmp) => {
  cmp['install'] = (app: App): void => {
    app.component(cmp.name, cmp)
  }
})

export const VcDatasourceCustom = DatasourceCustom as SFCWithInstall<typeof DatasourceCustom>
export const VcDatasourceCzml = DatasourceCzml as SFCWithInstall<typeof DatasourceCzml>
export const VcDatasourceGeojson = DatasourceGeojson as SFCWithInstall<typeof DatasourceGeojson>
export const VcDatasourceKml = DatasourceKml as SFCWithInstall<typeof DatasourceKml>

export * from './custom'
export * from './czml'
export * from './geojson'
export * from './kml'
