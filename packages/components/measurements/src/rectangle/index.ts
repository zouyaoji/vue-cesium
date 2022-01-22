/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-22 16:13:52
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\src\rectangle\index.ts
 */
import { defineComponent } from 'vue'
import useDrawingSegment from '@vue-cesium/composables/use-drawing/use-drawing-segment'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import type { PropType } from 'vue'
import type { MeasureUnits } from '@vue-cesium/shared'
import type { VcDrawingMaterial } from '@vue-cesium/utils/drawing-types'
import type { VcLabelProps, VcPolygonProps } from '../../../primitive-collections'
import type { VcGeometryPolylineProps } from '../../../geometries'
import { drawingEmit } from '@vue-cesium/utils/emits'

export default defineComponent({
  name: 'VcMeasurementRectangle',
  props: {
    ...useDrawingActionProps,
    measureUnits: Object as PropType<MeasureUnits>,
    polylineOpts: Object as PropType<VcGeometryPolylineProps & VcDrawingMaterial>,
    polygonOpts: Object as PropType<VcPolygonProps & VcDrawingMaterial>,
    labelOpts: Object as PropType<VcLabelProps>,
    labelsOpts: Object as PropType<VcLabelProps>,
    clampToGround: Boolean,
    edge: Number,
    locale: String,
    decimals: Object,
    showDistanceLabel: Boolean,
    showAngleLabel: Boolean,
    loop: Boolean
  },
  emits: drawingEmit,
  setup(props, ctx) {
    // state
    return useDrawingSegment(props, ctx, 'VcMeasurementRectangle')
  }
})
