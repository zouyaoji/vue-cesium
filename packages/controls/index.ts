import { App } from 'vue'
import VcCompass from './compass'
import VcZoomControl from './zoom-control'
import VcPrint from './print'
import VcMyLocation from './my-location'
import VcStatusBar from './status-bar'
import VcDistanceLegend from './distance-legend'
import VcNavigation from './navigation'
import VcCompassSm from './navigation-sm/compass-sm'
import VcZoomControlSm from './navigation-sm/zoom-control-sm'
import VcNavigationSm from './navigation-sm'
import VcOverviewMap from './vc-overview-map'

const components = [
  VcCompass,
  VcZoomControl,
  VcPrint,
  VcMyLocation,
  VcStatusBar,
  VcDistanceLegend,
  VcNavigation,
  VcCompassSm,
  VcZoomControlSm,
  VcNavigationSm,
  VcOverviewMap
]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export {
  VcCompass,
  VcZoomControl,
  VcPrint,
  VcMyLocation,
  VcStatusBar,
  VcDistanceLegend,
  VcNavigation,
  VcCompassSm,
  VcZoomControlSm,
  VcNavigationSm,
  VcOverviewMap
}

export default {
  install
}
