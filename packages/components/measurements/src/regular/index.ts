/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-26 11:14:41
 * @LastEditTime: 2021-10-26 18:12:10
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\src\regular\index.ts
 */
import { defineComponent } from 'vue'
import useDrawingSegment from '@vue-cesium/composables/use-drawing/use-drawing-segment'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
export default defineComponent({
  name: 'VcMeasurementRegular',
  props: {
    ...useDrawingActionProps,
    polylineOpts: Object,
    polygonOpts: Object,
    editorOpts: Object,
    clampToGround: Boolean,
    edge: Number,
    measureUnits: Object,
    labelOpts: Object,
    labelsOpts: Object,
    locale: String,
    decimals: Object,
    showDistanceLabel: Boolean,
    showAngleLabel: Boolean,
    loop: Boolean
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'drawEvt', 'editorEvt', 'mouseEvt'],
  setup(props, ctx) {
    // state
    return useDrawingSegment(props, ctx, 'VcMeasurementRegular')
  }
})
