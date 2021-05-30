import { enableMouseEvent } from '@vue-cesium/utils/cesium-props'

export default {
  ...enableMouseEvent,
  show: Boolean,
  editable: Boolean,
  measureUnits: Object,
  drawtip: Object,
  pointOpts: Object,
  labelOpts: Object,
  editorOpts: Object,
  locale: String,
  decimals: Object
}
