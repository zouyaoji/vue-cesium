import { App } from 'vue'
import VcCompass from './compass'
import VcZoomControl from './zoom-control'
import VcPrint from './print'
import VcMyLocation from './my-location'
import VcLocationBar from './location-bar'
import VcDistanceLegend from './distance-legend'
import VcNavigation from './navigation'

const components = [VcCompass, VcZoomControl, VcPrint, VcMyLocation, VcLocationBar, VcDistanceLegend, VcNavigation]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export { VcCompass, VcZoomControl, VcPrint, VcMyLocation, VcLocationBar, VcDistanceLegend, VcNavigation }

export default {
  install
}
