/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:23
 * @LastEditTime: 2022-01-22 15:53:46
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\src\height\index.ts
 */
import { defineComponent } from 'vue'
import useDrawingSegment from '@vue-cesium/composables/use-drawing/use-drawing-segment'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import type { PropType } from 'vue'
import type { MeasureUnits } from '@vue-cesium/shared'
import type { VcDrawingMaterial } from '@vue-cesium/utils/drawing-types'
import type { VcLabelProps } from '../../../primitive-collections'
import type { VcGeometryPolylineProps } from '../../../geometries'
import { drawingEmit } from '@vue-cesium/utils/emits'

export default defineComponent({
  name: 'VcMeasurementHeight',
  props: {
    ...useDrawingActionProps,
    measureUnits: Object as PropType<MeasureUnits>,
    polylineOpts: Object as PropType<VcGeometryPolylineProps & VcDrawingMaterial>,
    labelOpts: Object as PropType<VcLabelProps>,
    locale: String,
    decimals: Object
  },
  emits: drawingEmit,
  setup(props, ctx) {
    // state
    return useDrawingSegment(props, ctx, 'VcMeasurementHeight')
  }
})
