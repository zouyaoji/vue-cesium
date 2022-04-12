/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:23
 * @LastEditTime: 2022-03-15 14:59:33
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\src\horizontal\index.ts
 */
import { ComputedRef, defineComponent, Ref } from 'vue'
import useDrawingPolyline from '@vue-cesium/composables/use-drawing/use-drawing-polyline'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import type { PropType } from 'vue'
import { MeasureUnits } from '@vue-cesium/shared'
import type { VcLabelProps, VcPointProps } from '../../../primitive-collections'
import type { VcGeometryPolylineProps } from '../../../geometries'
import { drawingEmit } from '@vue-cesium/utils/emits'
import type { VcPrimitiveGroundPolylineProps, VcPrimitiveProps } from '../../../primitives'
import {
  MeasurementDecimals,
  VcDrawingDrawEvt,
  VcDrawingEditorEvt,
  VcDrawingMouseEvt,
  VcDrawingPreRenderDatas,
  VcDrawTipOpts,
  VcEditorOpts,
  VcPolylineDrawing
} from '@vue-cesium/utils/drawing-types'
import { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'

export default defineComponent({
  name: 'VcMeasurementHorizontal',
  props: {
    ...useDrawingActionProps,
    measureUnits: Object as PropType<MeasureUnits>,
    polylineOpts: Object as PropType<VcGeometryPolylineProps>,
    primitiveOpts: Object as PropType<VcPrimitiveProps & VcPrimitiveGroundPolylineProps>,
    dashLineOpts: Object as PropType<VcGeometryPolylineProps>,
    dashLinePrimitiveOpts: Object as PropType<VcPrimitiveProps>,
    labelOpts: Object as PropType<VcLabelProps>,
    labelsOpts: Object as PropType<VcLabelProps>,
    locale: String,
    decimals: Object as PropType<MeasurementDecimals>,
    showAngleLabel: Boolean,
    showDashedLine: Boolean,
    showDistanceLabel: Boolean,
    autoUpdateLabelPosition: Boolean
  },
  emits: drawingEmit,
  setup(props, ctx) {
    // state
    return useDrawingPolyline(props, ctx, 'VcMeasurementHorizontal')
  }
})

export type VcMeasurementHorizontalProps = {
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
   * Specify parameters for drawing polylines.
   */
  polylineOpts?: VcGeometryPolylineProps
  /**
   * Specify parameters for drawing primitives.
   */
  primitiveOpts?: VcPrimitiveProps & VcPrimitiveGroundPolylineProps
  /**
   * Specify parameters for drawing dash lines.
   */
  dashLineOpts?: VcGeometryPolylineProps
  /**
   * Specify parameters for drawing dash line primitive.
   */
  dashLinePrimitiveOpts?: VcPrimitiveProps
  /**
   * Specify parameters for measurement labels.
   */
  labelOpts?: VcLabelProps
  /**
   * Specify the labelsOpts.
   */
  labelsOpts?: VcLabelProps
  /**
   * Specify parameters for measurement locale.
   */
  locale?: string
  /**
   * Specify parameters for measurement decimals.
   */
  decimals?: MeasurementDecimals
  /**
   * Specify whether to display angle labels.
   */
  showAngleLabel?: boolean
  /**
   * Specify whether to display dashed lines.
   */
  showDashedLine?: boolean
  /**
   * Specify whether to display distance labels.
   */
  showDistanceLabel?: boolean
  /**
   * Specify whether the depthTest is disabled.
   * Default value: false
   */
  disableDepthTest?: boolean
  /**
   * Specify whether to update label position.
   * Default value: true
   */
  autoUpdateLabelPosition?: boolean
  /**
   * Triggers before the VcMeasurementHorizontal is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcMeasurementHorizontal is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcMeasurementHorizontal is destroyed.
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

export interface VcMeasurementHorizontalRef extends VcComponentPublicInstance<VcMeasurementHorizontalProps> {
  /**
   * Get the array of rendering models.
   */
  renderDatas?: Ref<VcPolylineDrawing[]>
  /**
   * Get the computedRenderDatas.
   */
  computedRenderDatas?: ComputedRef<VcPolylineDrawing[]>
  /**
   * start a new draw.
   */
  startNew: () => void
  /**
   * stop drawing.
   */
  stop: (removeLatest?: boolean) => void
  /**
   * clear and stop drawing.
   */
  clear: () => void
}
