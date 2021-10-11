/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:22
 * @LastEditTime: 2021-10-11 15:42:09
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\drawings\src\drawing.types.ts
 */
import { VcFabAction } from '@vue-cesium/components/ui'
import { CSSProperties, Ref } from 'vue'
import {
  pointActionDefault,
  pointDrawingDefault,
  polylineActionDefault,
  polylineDrawingDefault,
  polygonActionDefault,
  polygonDrawingDefault,
  clearActionDefault
} from './defaultProps'
import VcDrawingPoint from './point'
import VcDrawingPolyline from './polyline'
import VcDrawingPolygon from './polygon'
import VcDrawingRegularPolygon from './regular-polygon'
import VcDrawingRectangle from './rectangle'

interface PointDrawing {
  show: boolean
  position: Cesium.Cartesian3
  drawStatus: number
}

interface PolygonDrawing {
  show: boolean
  positions: Array<Cesium.Cartesian3>
  polygonPositions: Array<Cesium.Cartesian3>
  drawStatus: number
  height?: number
  radius?: number
  area?: number
  labels?: Array<any>
}

interface DrawingInstanceOpts {
  name: string
  actionRef: Ref<typeof VcFabAction | null>
  actionOpts: typeof pointActionDefault | typeof polylineActionDefault | typeof polygonActionDefault | typeof clearActionDefault
  drawingRef: Ref<typeof VcDrawingPoint | typeof VcDrawingPolyline | typeof VcDrawingPolygon | null>
  drawingOpts: typeof pointDrawingDefault | typeof polylineDrawingDefault | typeof polygonDrawingDefault
  actionStyle?: CSSProperties
  actionClass?: string
  tip?: string
  cmp:
    | typeof VcDrawingPoint
    | typeof VcDrawingPolyline
    | typeof VcDrawingPolygon
    | typeof VcDrawingRegularPolygon
    | typeof VcDrawingRectangle
    | undefined
  isActive: boolean
}

export { PointDrawing, PolygonDrawing, DrawingInstanceOpts }
