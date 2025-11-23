/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-04 21:42:14
 * @LastEditTime: 2022-08-22 20:31:06
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\analyses\src\sightline\index.ts
 */

import type {
  VcDrawingDrawEvt,
  VcDrawingEditorEvt,
  VcDrawingMouseEvt,
  VcDrawingPreRenderDatas,
  VcDrawTipOpts,
  VcEditorOpts,
  VcPolylineDrawing,
  VcSegmentDrawing
} from '@vue-cesium/utils/drawing-types'
import type { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'
import type { ComputedRef, PropType, Ref } from 'vue'
import type { VcGeometryPolylineProps } from '../../../geometries'
import type { VcPointProps, VcPolygonProps } from '../../../primitive-collections'
import type { VcPrimitiveGroundPolylineProps, VcPrimitiveProps } from '../../../primitives'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import useDrawingPolyline from '@vue-cesium/composables/use-drawing/use-drawing-polyline'
import useDrawingSegment from '@vue-cesium/composables/use-drawing/use-drawing-segment'
import { drawingEmit } from '@vue-cesium/utils/emits'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VcAnalysisSightline',
  props: {
    ...useDrawingActionProps,
    polylineOpts: Object as PropType<VcGeometryPolylineProps>,
    polygonOpts: Object as PropType<VcPolygonProps>,
    primitiveOpts: Object as PropType<VcPrimitiveProps & VcPrimitiveGroundPolylineProps>,
    sightlineType: {
      type: String as PropType<'segment' | 'polyline' | 'circle'>,
      default: 'polyline'
    }
  },
  emits: drawingEmit,
  setup(props, ctx) {
    // state
    if (props.sightlineType === 'segment' || props.sightlineType === 'circle') {
      return useDrawingSegment(props, ctx, 'VcAnalysisSightline')
    }
    else if (props.sightlineType === 'polyline') {
      return useDrawingPolyline(props, ctx, 'VcAnalysisSightline')
    }
  }
})

export interface VcAnalysisSightlineProps {
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
   * Specify parameters for drawing polygons.
   */
  polygonOpts?: VcPolygonProps
  /**
   * Specify parameters for drawing primitives.
   */
  primitiveOpts?: VcPrimitiveProps & VcPrimitiveGroundPolylineProps
  /**
   * Specify the type of sightline.
   */
  sightlineType?: 'segment' | 'polyline'
  /**
   * Triggers before the VcAnalysisSightline is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcAnalysisSightline is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the component load failed.
   */
  onUnready?: (e: any) => void
  /**
   * Triggers when the VcAnalysisSightline is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when drawing.
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

export interface VcAnalysisSightlineRef extends VcComponentPublicInstance<VcAnalysisSightlineProps> {
  /**
   * Get the array of rendering models.
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
