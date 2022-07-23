/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-26 11:14:41
 * @LastEditTime: 2022-06-24 16:58:54
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\src\regular\index.ts
 */
import type { ComputedRef, PropType, Ref } from 'vue'
import { defineComponent } from 'vue'
import useDrawingSegment from '@vue-cesium/composables/use-drawing/use-drawing-segment'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import type { VcPrimitiveGroundPolylineProps, VcPrimitiveProps } from '../../../primitives'
import type { VcGeometryPolylineProps } from '../../../geometries'
import type { VcLabelProps, VcPointProps, VcPolygonProps } from '../../../primitive-collections'
import { drawingEmit } from '@vue-cesium/utils/emits'
import {
  MeasurementDecimals,
  VcDrawingDrawEvt,
  VcDrawingEditorEvt,
  VcDrawingMouseEvt,
  VcDrawingPreRenderDatas,
  VcDrawTipOpts,
  VcEditorOpts,
  VcSegmentDrawing
} from '@vue-cesium/utils/drawing-types'
import { MeasureUnits } from '@vue-cesium/shared'
import { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'

export default defineComponent({
  name: 'VcMeasurementRegular',
  props: {
    ...useDrawingActionProps,
    polylineOpts: Object as PropType<VcGeometryPolylineProps>,
    primitiveOpts: Object as PropType<VcPrimitiveProps & VcPrimitiveGroundPolylineProps>,
    polygonOpts: Object as PropType<VcPolygonProps>,
    labelOpts: Object as PropType<VcLabelProps>,
    labelsOpts: Object as PropType<VcLabelProps>,
    clampToGround: Boolean,
    edge: Number,
    measureUnits: Object as PropType<MeasureUnits>,
    locale: String,
    decimals: Object as PropType<MeasurementDecimals>,
    showLabel: Boolean,
    showDistanceLabel: Boolean,
    showAngleLabel: Boolean,
    loop: Boolean,
    autoUpdateLabelPosition: Boolean
  },
  emits: drawingEmit,
  setup(props, ctx) {
    // state
    return useDrawingSegment(props, ctx, 'VcMeasurementRegular')
  }
})

export type VcMeasurementRegularProps = {
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
   * Specify parameters for drawing polygons.
   */
  polygonOpts?: VcPolygonProps
  /**
   * Specify parameters for measurement label.
   */
  labelOpts?: VcLabelProps
  /**
   * Specify parameters for measurement labels.
   */
  labelsOpts?: VcLabelProps
  /**
   * Specify whether a line segment will be added between the last and first line positions to make this line a loop.
   */
  loop?: boolean
  /**
   * Specify whether the drawing result object is attached to the ground or 3dtiles. Only polyline and polygon objects work.
   */
  clampToGround?: boolean
  /**
   * Specify the number of edges of a regular polygon.
   */
  edge?: number
  /**
   * Specify whether to display the label.
   */
  showLabel?: boolean
  /**
   * Specify whether to display distance labels.
   */
  showDistanceLabel?: boolean
  /**
   * Specify whether to display angle labels.
   */
  showAngleLabel?: boolean
  /**
   * Specify parameters for measurement locale.
   */
  locale?: string
  /**
   * Specify parameters for measurement decimals.
   */
  decimals?: MeasurementDecimals
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
   * Triggers before the VcMeasurementRegular is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcMeasurementRegular is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcMeasurementRegular is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * 	Triggers when drawing.
   */
  onDrawEvt?: (evt: VcDrawingDrawEvt<VcSegmentDrawing>, viewer: Cesium.Viewer) => void
  /**
   * Triggers when the editor button is clicked.
   */
  onEditorEvt?: (evt: VcDrawingEditorEvt, viewer: Cesium.Viewer) => void
  /**
   * Triggers when the mouse is over or out on the drawing point.
   */
  onMouseEvt?: (evt: VcDrawingMouseEvt, viewer: Cesium.Viewer) => void
}

export interface VcMeasurementRegularRef extends VcComponentPublicInstance<VcMeasurementRegularProps> {
  /**
   * Get the array of rendering models.
   */
  renderDatas?: Ref<VcSegmentDrawing[]>
  /**
   * Get the computedRenderDatas.
   */
  computedRenderDatas?: ComputedRef<VcSegmentDrawing[]>
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
