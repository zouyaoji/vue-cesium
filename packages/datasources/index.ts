import { App } from 'vue'
import VcDatasourceCustom from './custom'
import VcDatasourceCzml from './czml'
import VcDatasourceGeojson from './geojson'
import VcDatasourceKml from './kml'

const components = [
  VcDatasourceCustom,
  VcDatasourceCzml,
  VcDatasourceGeojson,
  VcDatasourceKml
]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export {
  VcDatasourceCustom,
  VcDatasourceCzml,
  VcDatasourceGeojson,
  VcDatasourceKml
}

export default {
  install
}
