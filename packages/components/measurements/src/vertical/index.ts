/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:23
 * @LastEditTime: 2021-10-25 14:24:42
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\src\vertical\index.ts
 */
import { defineComponent } from 'vue'
import useDrawingSegment from '@vue-cesium/composables/use-drawing/use-drawing-segment'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'

export default defineComponent({
  name: 'VcMeasurementVertical',
  props: {
    ...useDrawingActionProps,
    measureUnits: Object,
    polylineOpts: Object,
    labelOpts: Object,
    locale: String,
    decimals: Object
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'drawEvt', 'mouseEvt', 'editorEvt'],
  setup(props, ctx) {
    // state
    return useDrawingSegment(props, ctx, 'VcMeasurementVertical')
  }
})
