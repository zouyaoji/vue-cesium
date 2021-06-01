import { enableMouseEvent } from '@vue-cesium/utils/cesium-props'

export default {
  ...enableMouseEvent,
  show: Boolean,
  editable: Boolean,
  drawtip: Object,
  pointOpts: Object,
  editorOpts: Object
}
