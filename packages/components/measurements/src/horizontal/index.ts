/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:23
 * @LastEditTime: 2021-10-22 13:42:47
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\src\horizontal\index.ts
 */
import { defineComponent } from 'vue'

import useDrawingPolyline from '@vue-cesium/composables/use-drawing/use-drawing-polyline'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
export default defineComponent({
  name: 'VcMeasurementHorizontal',
  props: {
    ...useDrawingActionProps,
    measureUnits: Object,
    polylineOpts: Object,
    dashLineOpts: Object,
    labelOpts: Object,
    labelsOpts: Object,
    locale: String,
    decimals: Object,
    showAngleLabel: Boolean,
    showDashedLine: Boolean,
    showDistanceLabel: Boolean
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'drawEvt', 'mouseEvt', 'editorEvt'],
  setup(props, ctx) {
    // state
    return useDrawingPolyline(props, ctx, 'VcMeasurementHorizontal')
  }
})
