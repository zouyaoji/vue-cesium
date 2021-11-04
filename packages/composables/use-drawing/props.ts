/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-25 14:46:48
 * @LastEditTime: 2021-11-04 09:47:22
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-drawing\props.ts
 */

import { enableMouseEvent, show } from '@vue-cesium/utils/cesium-props'
import { PropType } from 'vue'
import { positionProps } from '../private/use-position'
import { clearActionDefault } from './defaultOpts'

export const useDrawingActionProps = {
  ...enableMouseEvent,
  show: Boolean,
  editable: Boolean,
  drawtip: Object,
  pointOpts: Object,
  editorOpts: Object,
  mode: Number,
  preRenderDatas: Array
}

export const useDrawingFabProps = {
  ...positionProps,
  ...show,
  mode: {
    type: Number,
    default: 1
  },
  activeColor: {
    type: String,
    default: 'positive'
  },
  editable: {
    type: Boolean,
    default: false
  },
  clampToGround: {
    type: Boolean,
    default: false
  },
  clearActionOpts: {
    type: Object as PropType<typeof clearActionDefault>,
    default: () => clearActionDefault
  }
}
