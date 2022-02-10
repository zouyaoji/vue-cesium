/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-04 21:42:14
 * @LastEditTime: 2022-02-08 16:21:48
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\analyses\src\sightline\index.ts
 */
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { useDrawingActionProps } from '@vue-cesium/composables/use-drawing/props'
import useDrawingPolyline from '@vue-cesium/composables/use-drawing/use-drawing-polyline'
import type { VcPrimitiveGroundPolylineProps, VcPrimitiveProps } from '../../../primitives'
import type { VcGeometryPolylineProps } from '../../../geometries'
import useDrawingSegment from '@vue-cesium/composables/use-drawing/use-drawing-segment'
import { VcPolygonProps } from '../../../primitive-collections'
import { drawingEmit } from '@vue-cesium/utils/emits'

export default defineComponent({
  name: 'VcAnalysisSightline',
  props: {
    ...useDrawingActionProps,
    polylineOpts: Object as PropType<VcGeometryPolylineProps>,
    polygonOpts: Object as PropType<VcPolygonProps>,
    primitiveOpts: Object as PropType<VcPrimitiveProps & VcPrimitiveGroundPolylineProps>,
    sightlineType: {
      type: String as PropType<'segment' | 'polyline' | 'circle'>,
      default: 'polyline'
    },
    edge: Number
  },
  emits: drawingEmit,
  setup(props, ctx) {
    // state
    if (props.sightlineType === 'segment' || props.sightlineType === 'circle') {
      return useDrawingSegment(props, ctx, 'VcAnalysisSightline')
    } else if (props.sightlineType === 'polyline') {
      return useDrawingPolyline(props, ctx, 'VcAnalysisSightline')
    }
  }
})
