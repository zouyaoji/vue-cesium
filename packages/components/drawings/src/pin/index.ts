/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:22
 * @LastEditTime: 2021-10-27 13:32:40
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\drawings\src\pin\index.ts
 */
import { defineComponent } from 'vue'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import useDrawingPoint from '@vue-cesium/composables/use-drawing/use-drawing-point'

export default defineComponent({
  name: 'VcDrawingPin',
  props: {
    ...useDrawingActionProps,
    billboardOpts: Object,
    labelOpts: Object,
    heightReference: Number
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'drawEvt', 'editorEvt', 'mouseEvt'],
  setup(props, ctx) {
    // state
    return useDrawingPoint(props, ctx, 'VcDrawingPin')
  }
})
