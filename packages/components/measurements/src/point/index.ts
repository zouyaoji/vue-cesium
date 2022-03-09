/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:23
 * @LastEditTime: 2022-03-10 00:58:43
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\src\point\index.ts
 */
import { defineComponent, Ref } from 'vue'
import useDrawingPoint from '@vue-cesium/composables/use-drawing/use-drawing-point'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import type { PropType } from 'vue'
import { MeasureUnits } from '@vue-cesium/shared'
import type { VcLabelProps, VcPointProps } from '../../../primitive-collections'
import { drawingEmit } from '@vue-cesium/utils/emits'
import {
  MeasurementDecimals,
  VcDrawingDrawEvt,
  VcDrawingEditorEvt,
  VcDrawingMouseEvt,
  VcDrawingPreRenderDatas,
  VcDrawTipOpts,
  VcEditorOpts,
  VcPointDrawing
} from '@vue-cesium/utils/drawing-types'
import { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'

export default defineComponent({
  name: 'VcMeasurementPoint',
  props: {
    ...useDrawingActionProps,
    measureUnits: Object as PropType<MeasureUnits>,
    labelOpts: Object as PropType<VcLabelProps>,
    locale: String,
    decimals: Object as PropType<MeasurementDecimals>,
    heightReference: Number
  },
  emits: drawingEmit,
  setup(props, ctx) {
    // state
    return useDrawingPoint(props, ctx, 'VcMeasurementPoint')
  }
})

export type VcMeasurementPointProps = {
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
   * Specify the unit of measurement
   */
  measureUnits?: MeasureUnits
  /**
   * Specify parameters for measurement labels.
   */
  labelOpts?: VcLabelProps
  /**
   * Specify parameters for measurement locale.
   */
  locale?: string
  /**
   * Specify parameters for measurement decimals.
   */
  decimals?: MeasurementDecimals
  /**
   * Specify the heightReference.
   */
  heightReference?: number
  /**
   * Specify whether the depthTest is disabled.
   * Default value: false
   */
  disableDepthTest?: boolean
  /**
   * Triggers before the VcMeasurementPoint is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcMeasurementPoint is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcMeasurementPoint is destroyed.
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

export interface VcMeasurementPointRef extends VcComponentPublicInstance<VcMeasurementPointProps> {
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
