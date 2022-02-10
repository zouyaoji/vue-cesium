/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-26 11:14:41
 * @LastEditTime: 2022-02-08 16:19:57
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\src\regular\index.ts
 */
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import useDrawingSegment from '@vue-cesium/composables/use-drawing/use-drawing-segment'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import type { VcPrimitiveGroundPolylineProps, VcPrimitiveProps } from '../../../primitives'
import type { VcGeometryPolylineProps } from '../../../geometries'
import type { VcLabelProps, VcPolygonProps } from '../../../primitive-collections'
import { drawingEmit } from '@vue-cesium/utils/emits'
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
    measureUnits: Object,
    locale: String,
    decimals: Object,
    showDistanceLabel: Boolean,
    showAngleLabel: Boolean,
    loop: Boolean,
    disableDepthTest: Boolean
  },
  emits: drawingEmit,
  setup(props, ctx) {
    // state
    return useDrawingSegment(props, ctx, 'VcMeasurementRegular')
  }
})
