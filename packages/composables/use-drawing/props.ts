/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-25 14:46:48
 * @LastEditTime: 2022-03-10 00:50:43
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-drawing\props.ts
 */

import type { VcPointProps } from '@vue-cesium/components/primitive-collections'
import { enableMouseEvent, show } from '@vue-cesium/utils/cesium-props'
import type { VcDrawTipOpts, VcEditorOpts, VcDrawingPreRenderDatas } from '@vue-cesium/utils/drawing-types'
import type { VcActionTooltipProps } from '@vue-cesium/utils/types'
import type { PropType } from 'vue'
import { clearActionDefault } from './defaultOpts'

export const useDrawingActionProps = {
  ...enableMouseEvent,
  show: Boolean,
  editable: Boolean,
  drawtip: Object as PropType<VcDrawTipOpts>,
  pointOpts: Object as PropType<VcPointProps>,
  editorOpts: Object as PropType<VcEditorOpts>,
  mode: Number,
  preRenderDatas: Array as PropType<VcDrawingPreRenderDatas>,
  disableDepthTest: Boolean
}

export const useDrawingFabProps = {
  ...show,
  position: {
    type: String as PropType<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left'>,
    default: 'bottom-left',
    validator: (v: string) => ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top', 'right', 'bottom', 'left'].includes(v)
  },
  offset: {
    type: Array as PropType<unknown> as PropType<[number, number]>,
    validator: v => v.length === 2
  },
  mode: {
    type: Number as PropType<0 | 1>,
    default: 1
  },
  activeColor: {
    type: String,
    default: 'positive'
  },
  editable: {
    type: Boolean
  },
  clampToGround: {
    type: Boolean
  },
  clearActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => clearActionDefault
  }
}
