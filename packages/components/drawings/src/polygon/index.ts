/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-10-21 16:15:34
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\drawings\src\polygon\index.ts
 */
import { defineComponent } from 'vue'
import useDrawingPolyline from '@vue-cesium/composables/use-drawing/use-drawing-polyline'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'

export default defineComponent({
  name: 'VcDrawingPolygon',
  props: {
    ...useDrawingActionProps,
    polylineOpts: Object,
    polygonOpts: Object,
    loop: Boolean,
    clampToGround: Boolean
  },
  emits: ['beforeLoad', 'ready', 'destroyed', 'drawEvt', 'editorEvt', 'mouseEvt'],
  setup(props, ctx) {
    // state
    return useDrawingPolyline(props, ctx, 'VcDrawingPolygon')
  }
})
