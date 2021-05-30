import { enableMouseEvent } from '@vue-cesium/utils/cesium-props'

export default {
  ...enableMouseEvent,
  editable: Boolean,
  show: Boolean,
  showComponentLines: {
    type: Boolean,
    default: false
  },
  measureUnits: Object,
  drawtip: Object,
  pointOpts: Object,
  polylineOpts: Object,
  labelOpts: Object,
  xLabelOpts: Object,
  xAngleLabelOpts: Object,
  yLabelOpts: Object,
  yAngleLabelOpts: Object,
  editorOpts: Object,
  locale: String,
  decimals: Object
}
