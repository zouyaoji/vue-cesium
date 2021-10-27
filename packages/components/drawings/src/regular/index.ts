/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:22
 * @LastEditTime: 2021-10-25 17:44:52
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\drawings\src\regular-polygon\index.ts
 */
import { defineComponent } from 'vue'
import useDrawingSegment from '@vue-cesium/composables/use-drawing/use-drawing-segment'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
export default defineComponent({
  name: 'VcDrawingRegular',
  props: {
    ...useDrawingActionProps,
    polylineOpts: Object,
    polygonOpts: Object,
    editorOpts: Object,
    clampToGround: Boolean,
    edge: Number
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'drawEvt', 'editorEvt', 'mouseEvt'],
  setup(props, ctx) {
    // state
    return useDrawingSegment(props, ctx, 'VcDrawingRegular')
  }
})
