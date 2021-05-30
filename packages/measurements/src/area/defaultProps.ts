import { enableMouseEvent } from '@vue-cesium/utils/cesium-props'
import MeasureUnits from '../MeasureUnits'

export default {
  ...enableMouseEvent,
  editable: Boolean,
  show: Boolean,
  measureUnits: Object,
  drawtip: Object,
  pointOpts: Object,
  polylineOpts: Object,
  polygonOpts: Object,
  labelOpts: Object,
  labelsOpts: Object,
  editorOpts: Object,
  locale: String,
  decimals: Object,
  showDistanceLabel: Boolean,
  showAngleLabel: Boolean,
  loop: Boolean
}
