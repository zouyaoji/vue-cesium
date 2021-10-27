/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:23
 * @LastEditTime: 2021-10-25 14:10:50
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\src\distance\index.ts
 */
import { defineComponent } from 'vue'
import useDrawingSegment from '@vue-cesium/composables/use-drawing/use-drawing-segment'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'

export default defineComponent({
  name: 'VcMeasurementDistance',
  props: {
    ...useDrawingActionProps,
    showComponentLines: {
      type: Boolean,
      default: false
    },
    measureUnits: Object,
    polylineOpts: Object,
    labelOpts: Object,
    xLabelOpts: Object,
    xAngleLabelOpts: Object,
    yLabelOpts: Object,
    yAngleLabelOpts: Object,
    locale: String,
    decimals: Object
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'drawEvt', 'mouseEvt', 'editorEvt'],
  setup(props, ctx) {
    // state
    return useDrawingSegment(props, ctx, 'VcMeasurementDistance')
  }
})
