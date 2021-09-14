import { enableMouseEvent } from '@vue-cesium/utils/cesium-props'

export default {
  ...enableMouseEvent,
  editable: Boolean,
  show: Boolean,
  drawtip: Object,
  pointOpts: Object,
  polylineOpts: Object,
  polygonOpts: Object,
  editorOpts: Object,
  loop: Boolean,
  clampToGround: Boolean,
  mode: Number
}
