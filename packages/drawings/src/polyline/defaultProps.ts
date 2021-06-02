import { enableMouseEvent } from '@vue-cesium/utils/cesium-props'

export default {
  ...enableMouseEvent,
  editable: Boolean,
  show: Boolean,
  drawtip: Object,
  pointOpts: Object,
  polylineOpts: Object,
  editorOpts: Object,
  loop: Boolean
}
