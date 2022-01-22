/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:22
 * @LastEditTime: 2022-01-22 14:52:33
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\drawings\src\regular\index.ts
 */
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import useDrawingSegment from '@vue-cesium/composables/use-drawing/use-drawing-segment'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import { drawingEmit } from '@vue-cesium/utils/emits'
import type { VcPolygonProps } from '../../../primitive-collections'
import type { VcDrawingMaterial } from '@vue-cesium/utils/drawing-types'
import type { VcGeometryPolylineProps } from '../../../geometries'
export default defineComponent({
  name: 'VcDrawingRegular',
  props: {
    ...useDrawingActionProps,
    polylineOpts: Object as PropType<VcGeometryPolylineProps & VcDrawingMaterial>,
    polygonOpts: Object as PropType<VcPolygonProps & VcDrawingMaterial>,
    editorOpts: Object,
    clampToGround: Boolean,
    edge: Number
  },
  emits: drawingEmit,
  setup(props, ctx) {
    // state
    return useDrawingSegment(props, ctx, 'VcDrawingRegular')
  }
})
