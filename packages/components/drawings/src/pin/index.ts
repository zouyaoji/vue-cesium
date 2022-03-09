/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:22
 * @LastEditTime: 2022-03-08 21:44:21
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\drawings\src\pin\index.ts
 */
import type { PropType, Ref } from 'vue'
import { defineComponent } from 'vue'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import useDrawingPoint from '@vue-cesium/composables/use-drawing/use-drawing-point'
import type { VcBillboardProps, VcLabelProps, VcPointProps } from '../../../primitive-collections'
import { drawingEmit } from '@vue-cesium/utils/emits'
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import {
  VcDrawingDrawEvt,
  VcDrawingEditorEvt,
  VcDrawingMouseEvt,
  VcDrawingPreRenderDatas,
  VcDrawTipOpts,
  VcEditorOpts,
  VcPointDrawing
} from '@vue-cesium/utils/drawing-types'

export default defineComponent({
  name: 'VcDrawingPin',
  props: {
    ...useDrawingActionProps,
    billboardOpts: Object as PropType<VcBillboardProps>,
    labelOpts: Object as PropType<VcLabelProps>,
    heightReference: Number,
    disableDepthTest: Boolean
  },
  emits: drawingEmit,
  setup(props, ctx) {
    // state
    return useDrawingPoint(props, ctx, 'VcDrawingPin')
  }
})

export type VcDrawingPinProps = {
  /**
   * Specify whether to respond to mouse pick events.
   */
  enableMouseEvent?: boolean
  /**
   * Specify Whether the drawing object is visible.
   */
  show?: boolean
  /**
   * Specify whether the drawing result can be edited.
   */
  editable?: boolean
  /**
   * Specify drawing hints.
   */
  drawtip?: VcDrawTipOpts
  /**
   * Specify parameters for drawing points.
   */
  pointOpts?: VcPointProps
  /**
   * Specify parameters for drawing billbords.
   */
  billboardOpts?: VcBillboardProps
  /**
   * Specify parameters for drawing labels.
   */
  labelOpts?: VcLabelProps
  /**
   * Specify the heightReference.
   */
  heightReference?: number
  /**
   * Specify whether the depthTest is disabled.
   */
  disableDepthTest?: number
  /**
   * Specify editor options.
   */
  editorOpts?: VcEditorOpts
  /**
   * Specify editor mode.
   */
  mode?: number
  /**
   * Specify prerender datas.
   */
  preRenderDatas?: VcDrawingPreRenderDatas
  /**
   * Triggers before the VcDrawingPin is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcDrawingPin is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcDrawingPin is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * 	Triggers when drawing.
   */
  onDrawEvt?: (evt: VcDrawingDrawEvt, viewer: Cesium.Viewer) => void
  /**
   * Triggers when the editor button is clicked.
   */
  onEditorEvt?: (evt: VcDrawingEditorEvt, viewer: Cesium.Viewer) => void
  /**
   * Triggers when the mouse is over or out on the drawing point.
   */
  onMouseEvt?: (evt: VcDrawingMouseEvt, viewer: Cesium.Viewer) => void
}

export interface VcDrawingPinRef extends VcComponentPublicInstance<VcDrawingPinProps> {
  /**
   * Get or set the renderDatas.
   */
  renderDatas: Ref<Array<VcPointDrawing>>
  /**
   * start a new draw.
   */
  startNew: () => void
  /**
   * stop drawing.
   */
  stop: () => void
  /**
   * clear and stop drawing.
   */
  clear: () => void
}
