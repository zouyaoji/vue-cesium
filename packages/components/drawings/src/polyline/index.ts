/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-03-15 14:56:51
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\drawings\src\polyline\index.ts
 */
import type { ComputedRef, PropType, Ref } from 'vue'
import { defineComponent } from 'vue'
import useDrawingPolyline from '@vue-cesium/composables/use-drawing/use-drawing-polyline'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import type { VcGeometryPolylineProps } from '../../../geometries'
import { drawingEmit } from '@vue-cesium/utils/emits'
import type { VcPrimitiveGroundPolylineProps, VcPrimitiveProps } from '../../../primitives'
import { VcDrawingPreRenderDatas, VcDrawTipOpts, VcEditorOpts, VcPolylineDrawing } from '@vue-cesium/utils/drawing-types'
import { VcPointProps, VcPolygonProps } from '../../../primitive-collections'
import { VcComponentInternalInstance, VcComponentPublicInstance, VcReadyObject } from '@vue-cesium/utils/types'

export default defineComponent({
  name: 'VcDrawingPolyline',
  props: {
    ...useDrawingActionProps,
    polylineOpts: Object as PropType<VcGeometryPolylineProps>,
    primitiveOpts: Object as PropType<VcPrimitiveProps & VcPrimitiveGroundPolylineProps>,
    loop: Boolean,
    clampToGround: Boolean
  },
  emits: drawingEmit,
  setup(props, ctx) {
    // state
    return useDrawingPolyline(props, ctx, 'VcDrawingPolyline')
  }
})

export type VcDrawingPolylineProps = {
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
   * Specify whether a line segment will be added between the last and first line positions to make this line a loop.
   */
  loop?: boolean
  /**
   * Specify whether the drawing result object is attached to the ground or 3dtiles. Only polyline and polygon objects work.
   */
  clampToGround?: boolean
  /**
   * Specify whether the depthTest is disabled.
   * Default value: false
   */
  disableDepthTest?: boolean
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
   * Triggers before the VcDrawingPolyline is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcDrawingPolyline is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcDrawingPolyline is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
}

export interface VcDrawingPolylineRef extends VcComponentPublicInstance<VcDrawingPolylineProps> {
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
