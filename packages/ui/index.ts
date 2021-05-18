import { App } from 'vue'
import VcBtn from './btn'
import VcIcon from './icon'
import {
  VcSpinnerBall,
  VcSpinnerBars,
  VcSpinnerDots,
  VcSpinnerGears,
  VcSpinnerHourglass,
  VcSpinnerIos,
  VcSpinnerOrbit,
  VcSpinnerOval,
  VcSpinnerPuff,
  VcSpinnerRings,
  VcSpinnerTail,
  VcSpinner
} from './spinner'
import VcTooltip from './tooltip'
import VcAjaxBar from './ajax-bar'
import VcSkeleton from './skeleton'
import VcFab from './fab/fab'
import VcFabAction from './fab/fab-action'

const components = [VcBtn, VcIcon, VcSpinner, VcTooltip, VcAjaxBar, VcSkeleton, VcFab, VcFabAction]

const install =  (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export {
  VcBtn,
  VcIcon,
  VcTooltip,
  VcAjaxBar,
  VcSkeleton,
  VcSpinnerBall,
  VcSpinnerBars,
  VcSpinnerDots,
  VcSpinnerGears,
  VcSpinnerHourglass,
  VcSpinnerIos,
  VcSpinnerOrbit,
  VcSpinnerOval,
  VcSpinnerPuff,
  VcSpinnerRings,
  VcSpinnerTail,
  VcSpinner,
  VcFab,
  VcFabAction
}

export default {
  install
}
