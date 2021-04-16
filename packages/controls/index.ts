import { App } from 'vue'
import VcCompass from './compass'
import VcZoomControl from './zoom-control'
import VcPrint from './print'
import VcMyLocation from './my-location'
import VcLocationBar from './location-bar'
import VcDistanceLegend from './distance-legend'
import VcNavigation from './navigation'
import VcCompassSm from './navigation-sm/compass-sm'
import VcZoomControlSm from './navigation-sm/zoom-control-sm'
import VcNavigationSm from './navigation-sm'

const components = [
  VcCompass,
  VcZoomControl,
  VcPrint,
  VcMyLocation,
  VcLocationBar,
  VcDistanceLegend,
  VcNavigation,
  VcCompassSm,
  VcZoomControlSm,
  VcNavigationSm
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
  VcLocationBar,
  VcDistanceLegend,
  VcNavigation,
  VcCompassSm,
  VcZoomControlSm,
  VcNavigationSm
}

export default {
  install
}
