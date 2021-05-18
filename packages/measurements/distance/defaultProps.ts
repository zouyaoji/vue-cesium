import { enableMouseEvent } from '@vue-cesium/utils/cesium-props'
import MeasureUnits from '../MeasureUnits'

export default {
  ...enableMouseEvent,
  editable: Boolean,
  show: Boolean,
  showComponentLines: {
    type: Boolean,
    default: false
  },
  measureUnits: MeasureUnits,
  drawtip: Object,
  pointOpts: Object,
  polylineOpts: Object,
  labelOpts: Object,
  xLabelOpts: Object,
  xAngleLabelOpts: Object,
  yLabelOpts: Object,
  yAngleLabelOpts: Object,
  editorOpts: Object
}
