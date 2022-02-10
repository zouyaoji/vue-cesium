/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-06 16:26:03
 * @LastEditTime: 2022-02-08 16:22:43
 * @LastEditors: zouyaoji
 * @Description: refer to https://blog.csdn.net/fywindmoon/article/details/108415116
 * @FilePath: \vue-cesium@next\packages\components\analyses\src\viewshed\index.ts
 */
import { defineComponent, PropType } from 'vue'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import useDrawingSegment from '@vue-cesium/composables/use-drawing/use-drawing-segment'
import fragmentShader from './fragmentShader'
import { VcGeometryPolylineProps } from '../../../geometries'
import { VcPrimitiveGroundPolylineProps, VcPrimitiveProps } from '../../../primitives'
import { drawingEmit } from '@vue-cesium/utils/emits'
export default defineComponent({
  name: 'VcAnalysisViewshed',
  props: {
    ...useDrawingActionProps,
    polylineOpts: Object as PropType<VcGeometryPolylineProps>,
    primitiveOpts: Object as PropType<VcPrimitiveProps & VcPrimitiveGroundPolylineProps>,
    ellipsoidOpts: Object
  },
  emits: drawingEmit,
  setup(props, ctx) {
    // state
    return useDrawingSegment(props, ctx, 'VcAnalysisViewshed', fragmentShader)
  }
})
