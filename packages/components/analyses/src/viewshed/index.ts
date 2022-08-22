/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-06 16:26:03
 * @LastEditTime: 2022-06-24 16:54:28
 * @LastEditors: zouyaoji
 * @Description: refer to https://blog.csdn.net/fywindmoon/article/details/108415116
 * @FilePath: \vue-cesium@next\packages\components\analyses\src\viewshed\index.ts
 */
import { ComputedRef, defineComponent, PropType, Ref } from 'vue'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import useDrawingSegment from '@vue-cesium/composables/use-drawing/use-drawing-segment'
import { VcGeometryPolylineProps } from '../../../geometries'
import { VcPrimitiveProps } from '../../../primitives'
import { drawingEmit } from '@vue-cesium/utils/emits'
import {
  VcDrawingDrawEvt,
  VcDrawingEditorEvt,
  VcDrawingMouseEvt,
  VcDrawingPreRenderDatas,
  VcDrawTipOpts,
  VcEditorOpts,
  VcPolylineDrawing,
  VcSegmentDrawing,
  VcViewshedOpts
} from '@vue-cesium/utils/drawing-types'
import { VcPointProps } from '../../../primitive-collections'
import { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
export default defineComponent({
  name: 'VcAnalysisViewshed',
  props: {
    ...useDrawingActionProps,
    polylineOpts: Object as PropType<VcGeometryPolylineProps>,
    primitiveOpts: Object as PropType<VcPrimitiveProps>,
    viewshedOpts: Object as PropType<VcViewshedOpts>
  },
  emits: drawingEmit,
  setup(props, ctx) {
    // state
    return useDrawingSegment(props, ctx, 'VcAnalysisViewshed')
  }
})

export type VcAnalysisViewshedProps = {
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
   * Specify parameters for drawing polylines.
   */
  polylineOpts?: VcGeometryPolylineProps
  /**
   * Specify parameters for drawing primitives.
   */
  primitiveOpts?: VcPrimitiveProps
  /**
   * Specify the options options of viewshed.
   */
  viewshedOpts?: VcViewshedOpts
  /**
   * Triggers before the VcAnalysisViewshed is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcAnalysisViewshed is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcAnalysisViewshed is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * 	Triggers when drawing.
   */
  onDrawEvt?: (evt: VcDrawingDrawEvt<VcPolylineDrawing | VcSegmentDrawing>, viewer: Cesium.Viewer) => void
  /**
   * Triggers when the editor button is clicked.
   */
  onEditorEvt?: (evt: VcDrawingEditorEvt, viewer: Cesium.Viewer) => void
  /**
   * Triggers when the mouse is over or out on the drawing point.
   */
  onMouseEvt?: (evt: VcDrawingMouseEvt, viewer: Cesium.Viewer) => void
}

export interface VcAnalysisViewshedRef extends VcComponentPublicInstance<VcAnalysisViewshedProps> {
  /**
   * Get or set the renderDatas.
   */
  renderDatas?: Ref<Array<VcSegmentDrawing | VcPolylineDrawing>>
  /**
   * Get the computedRenderDatas.
   */
  computedRenderDatas?: ComputedRef<Array<VcSegmentDrawing | VcPolylineDrawing>>
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
