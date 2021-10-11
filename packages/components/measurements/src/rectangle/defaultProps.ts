/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 14:51:24
 * @LastEditTime: 2021-10-11 15:41:07
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\src\rectangle\defaultProps.ts
 */
import { enableMouseEvent } from '@vue-cesium/utils/cesium-props'

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
  locale: String,
  decimals: Object,
  editorOpts: Object,
  clampToGround: Boolean,
  mode: Number
}
