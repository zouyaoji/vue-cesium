/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:23
 * @LastEditTime: 2021-10-25 14:49:05
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\src\area\index.ts
 */
import { defineComponent } from 'vue'

import useDrawingPolyline from '@vue-cesium/composables/use-drawing/use-drawing-polyline'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'

export default defineComponent({
  name: 'VcMeasurementArea',
  props: {
    ...useDrawingActionProps,
    measureUnits: Object,
    polylineOpts: Object,
    polygonOpts: Object,
    labelOpts: Object,
    labelsOpts: Object,
    locale: String,
    decimals: Object,
    showDistanceLabel: Boolean,
    showAngleLabel: Boolean,
    loop: Boolean,
    clampToGround: Boolean
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'drawEvt', 'mouseEvt', 'editorEvt'],
  setup(props, ctx) {
    // state
    return useDrawingPolyline(props, ctx, 'VcMeasurementArea')
  }
})
