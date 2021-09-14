import { App } from 'vue'
import DatasourceCustom from './custom'
import DatasourceCzml from './czml'
import DatasourceGeojson from './geojson'
import DatasourceKml from './kml'

import { SFCWithInstall } from '@vue-cesium/utils/types'

const components = [DatasourceCustom, DatasourceCzml, DatasourceGeojson, DatasourceKml]

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

export const VcDatasourceCustom = DatasourceCustom as SFCWithInstall<typeof DatasourceCustom>

export const VcDatasourceCzml = DatasourceCzml as SFCWithInstall<typeof DatasourceCzml>

export const VcDatasourceGeojson = DatasourceGeojson as SFCWithInstall<typeof DatasourceGeojson>

export const VcDatasourceKml = DatasourceKml as SFCWithInstall<typeof DatasourceKml>
