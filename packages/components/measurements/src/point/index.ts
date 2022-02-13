/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:23
 * @LastEditTime: 2022-02-13 00:36:56
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\src\point\index.ts
 */
import { defineComponent } from 'vue'
import useDrawingPoint from '@vue-cesium/composables/use-drawing/use-drawing-point'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import type { PropType } from 'vue'
import { MeasureUnits } from '@vue-cesium/shared'
import type { VcLabelProps } from '../../../primitive-collections'
import { drawingEmit } from '@vue-cesium/utils/emits'

export default defineComponent({
  name: 'VcMeasurementPoint',
  props: {
    ...useDrawingActionProps,
    measureUnits: Object as PropType<MeasureUnits>,
    labelOpts: Object as PropType<VcLabelProps>,
    locale: String,
    decimals: Object,
    heightReference: Number,
    disableDepthTest: Boolean
  },
  emits: drawingEmit,
  setup(props, ctx) {
    // state
    return useDrawingPoint(props, ctx, 'VcMeasurementPoint')
  }
})
