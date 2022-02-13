/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:23
 * @LastEditTime: 2022-02-13 00:36:53
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\src\horizontal\index.ts
 */
import { defineComponent } from 'vue'
import useDrawingPolyline from '@vue-cesium/composables/use-drawing/use-drawing-polyline'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import type { PropType } from 'vue'
import { MeasureUnits } from '@vue-cesium/shared'
import type { VcLabelProps } from '../../../primitive-collections'
import type { VcGeometryPolylineProps } from '../../../geometries'
import { drawingEmit } from '@vue-cesium/utils/emits'
import type { VcPrimitiveGroundPolylineProps, VcPrimitiveProps } from '../../../primitives'

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
    decimals: Object,
    showAngleLabel: Boolean,
    showDashedLine: Boolean,
    showDistanceLabel: Boolean,
    disableDepthTest: Boolean
  },
  emits: drawingEmit,
  setup(props, ctx) {
    // state
    return useDrawingPolyline(props, ctx, 'VcMeasurementHorizontal')
  }
})
