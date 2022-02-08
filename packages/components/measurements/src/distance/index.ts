/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:23
 * @LastEditTime: 2022-02-08 10:53:59
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\src\distance\index.ts
 */
import { defineComponent } from 'vue'
import useDrawingSegment from '@vue-cesium/composables/use-drawing/use-drawing-segment'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import type { PropType } from 'vue'
import type { MeasureUnits } from '@vue-cesium/shared'
import type { VcLabelProps } from '../../../primitive-collections'
import type { VcGeometryPolylineProps } from '../../../geometries'
import { drawingEmit } from '@vue-cesium/utils/emits'
import type { VcPrimitiveGroundPolylineProps, VcPrimitiveProps } from '../../../primitives'

export default defineComponent({
  name: 'VcMeasurementDistance',
  props: {
    ...useDrawingActionProps,
    showComponentLines: {
      type: Boolean,
      default: false
    },
    measureUnits: Object as PropType<MeasureUnits>,
    polylineOpts: Object as PropType<VcGeometryPolylineProps>,
    primitiveOpts: Object as PropType<VcPrimitiveProps & VcPrimitiveGroundPolylineProps>,
    labelOpts: Object as PropType<VcLabelProps>,
    xLabelOpts: Object as PropType<VcLabelProps>,
    xAngleLabelOpts: Object as PropType<VcLabelProps>,
    yLabelOpts: Object as PropType<VcLabelProps>,
    yAngleLabelOpts: Object as PropType<VcLabelProps>,
    locale: String,
    decimals: Object,
    disableDepthTest: Boolean
  },
  emits: drawingEmit,
  setup(props, ctx) {
    // state
    return useDrawingSegment(props, ctx, 'VcMeasurementDistance')
  }
})
