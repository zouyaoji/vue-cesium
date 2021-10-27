/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:23
 * @LastEditTime: 2021-10-21 10:24:20
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\src\point\index.ts
 */
import { defineComponent } from 'vue'
import useDrawingPoint from '@vue-cesium/composables/use-drawing/use-drawing-point'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'

export default defineComponent({
  name: 'VcMeasurementPoint',
  props: {
    ...useDrawingActionProps,
    measureUnits: Object,
    labelOpts: Object,
    locale: String,
    decimals: Object,
    heightReference: Number
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'drawEvt', 'mouseEvt', 'editorEvt'],
  setup(props, ctx) {
    // state
    return useDrawingPoint(props, ctx, 'VcMeasurementPoint')
  }
})
