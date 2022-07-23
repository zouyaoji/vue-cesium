/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:22
 * @LastEditTime: 2022-06-24 16:55:59
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\drawings\src\regular\index.ts
 */
import type { ComputedRef, PropType, Ref } from 'vue'
import { defineComponent } from 'vue'
import useDrawingSegment from '@vue-cesium/composables/use-drawing/use-drawing-segment'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import { drawingEmit } from '@vue-cesium/utils/emits'
import type { VcLabelProps, VcPointProps, VcPolygonProps } from '../../../primitive-collections'
import type { VcGeometryPolylineProps } from '../../../geometries'
import type { VcPrimitiveGroundPolylineProps, VcPrimitiveProps } from '../../../primitives'
import {
  VcDrawingDrawEvt,
  VcDrawingEditorEvt,
  VcDrawingMouseEvt,
  VcDrawingPreRenderDatas,
  VcDrawTipOpts,
  VcEditorOpts,
  VcSegmentDrawing
} from '@vue-cesium/utils/drawing-types'
import { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
export default defineComponent({
  name: 'VcDrawingRegular',
  props: {
    ...useDrawingActionProps,
    polylineOpts: Object as PropType<VcGeometryPolylineProps>,
    polygonOpts: Object as PropType<VcPolygonProps>,
    primitiveOpts: Object as PropType<VcPrimitiveProps & VcPrimitiveGroundPolylineProps>,
    clampToGround: Boolean,
    edge: Number,
    showLabel: Boolean,
    showDistanceLabel: Boolean,
    showAngleLabel: Boolean,
    labelOpts: Object as PropType<VcLabelProps>,
    labelsOpts: Object as PropType<VcLabelProps>,
    loop: Boolean,
    autoUpdateLabelPosition: Boolean
  },
  emits: drawingEmit,
  setup(props, ctx) {
    // state
    return useDrawingSegment(props, ctx, 'VcDrawingRegular')
  }
})

export type VcDrawingRegularProps = {
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
   * Specify whether the drawing result object is attached to the ground or 3dtiles. Only polyline and polygon objects work.
   */
  clampToGround?: boolean
  /**
   * Specify the number of edges of a regular polygon.
   */
  edge?: number
  /**
   * Specify whether the depthTest is disabled.
   * Default value: false
   */
  disableDepthTest?: boolean
  /**
   * Specify parameters for drawing label.
   */
  labelOpts?: VcLabelProps
  /**
   * Specify parameters for drawing labels.
   */
  labelsOpts?: VcLabelProps
  /**
   * Specify whether to update label position.
   * Default value: false
   */
  autoUpdateLabelPosition?: boolean
  /**
   * Specify whether a line segment will be added between the last and first line positions to make this line a loop.
   */
  loop?: boolean
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
   * Triggers before the VcDrawingRegular is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcDrawingRegular is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcDrawingRegular is destroyed.
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

export interface VcDrawingRegularRef extends VcComponentPublicInstance<VcDrawingRegularProps> {
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
