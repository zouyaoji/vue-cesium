/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-22 14:49:18
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\drawings\src\polyline\index.ts
 */
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import useDrawingPolyline from '@vue-cesium/composables/use-drawing/use-drawing-polyline'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import type { VcGeometryPolylineProps } from '../../../geometries'
import type { VcDrawingMaterial } from '@vue-cesium/utils/drawing-types'
import { drawingEmit } from '@vue-cesium/utils/emits'

export default defineComponent({
  name: 'VcDrawingPolyline',
  props: {
    ...useDrawingActionProps,
    polylineOpts: Object as PropType<VcGeometryPolylineProps & VcDrawingMaterial>,
    loop: Boolean,
    clampToGround: Boolean
  },
  emits: drawingEmit,
  setup(props, ctx) {
    // state
    return useDrawingPolyline(props, ctx, 'VcDrawingPolyline')
  }
})
