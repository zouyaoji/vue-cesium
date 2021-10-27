/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-13 10:48:26
 * @LastEditTime: 2021-10-25 17:42:21
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\utils\drawing-types.ts
 */

import { VcFabAction } from '@vue-cesium/components'
import { VcDrawingPoint, VcDrawingPolygon, VcDrawingPolyline, VcDrawingRectangle, VcDrawingRegular } from '@vue-cesium/components/drawings/src'
import {
  pointDrawingActionDefault,
  polygonDrawingActionDefault,
  polylineDrawingActionDefault,
  rectangleDrawingActionDefault
} from '@vue-cesium/components/drawings/src/defaultProps'
import {
  VcMeasurementArea,
  VcMeasurementDistance,
  VcMeasurementHeight,
  VcMeasurementHorizontal,
  VcMeasurementPoint,
  VcMeasurementPolyline,
  VcMeasurementRectangle,
  VcMeasurementVertical
} from '@vue-cesium/components/measurements/src'

import {
  areaMeasurementActionDefault,
  areaMeasurementDefault,
  componentDistanceMeasurementActionDefault,
  componentDistanceMeasurementDefault,
  distanceMeasurementActionDefault,
  distanceMeasurementDefault,
  heightMeasurementActionDefault,
  heightMeasurementDefault,
  horizontalMeasurementActionDefault,
  horizontalMeasurementDefault,
  pointMeasurementActionDefault,
  pointMeasurementDefault,
  polylineMeasurementActionDefault,
  polylineMeasurementDefault,
  rectangleMeasurementActionDefault,
  rectangleMeasurementDefault,
  verticalMeasurementActionDefault,
  verticalMeasurementDefault
} from '@vue-cesium/components/measurements/src/defaultProps'
import {
  circleDrawingDefault,
  clearActionDefault,
  pointDrawingDefault,
  polygonDrawingDefault,
  polylineDrawingDefault,
  rectangleDrawingDefault
} from '@vue-cesium/composables/use-drawing/defaultOpts'
import { CSSProperties, Ref } from 'vue'

export type DrawingActionOpts =
  | typeof pointDrawingActionDefault
  | typeof polylineDrawingActionDefault
  | typeof polygonDrawingActionDefault
  | typeof rectangleDrawingActionDefault
  | typeof clearActionDefault

export type DrawgingActionCmp =
  | typeof VcDrawingPoint
  | typeof VcDrawingPolyline
  | typeof VcDrawingPolygon
  | typeof VcDrawingRegular
  | typeof VcDrawingRectangle

export type DrawingActionCmpRef = Ref<
  typeof VcDrawingPoint | typeof VcDrawingPolyline | typeof VcDrawingPolygon | typeof VcDrawingRegular | typeof VcDrawingRectangle
>
export type DrawingActionCmpOpts =
  | typeof pointDrawingDefault
  | typeof polylineDrawingDefault
  | typeof polygonDrawingDefault
  | typeof rectangleDrawingDefault
  | typeof circleDrawingDefault

export type MeasurementActionOpts =
  | typeof distanceMeasurementActionDefault
  | typeof componentDistanceMeasurementActionDefault
  | typeof polylineMeasurementActionDefault
  | typeof horizontalMeasurementActionDefault
  | typeof verticalMeasurementActionDefault
  | typeof heightMeasurementActionDefault
  | typeof areaMeasurementActionDefault
  | typeof pointMeasurementActionDefault
  | typeof rectangleMeasurementActionDefault
  | typeof clearActionDefault

export type MeasurementActionCmp =
  | typeof VcMeasurementDistance
  | typeof VcMeasurementPolyline
  | typeof VcMeasurementHorizontal
  | typeof VcMeasurementVertical
  | typeof VcMeasurementHeight
  | typeof VcMeasurementArea
  | typeof VcMeasurementPoint
  | typeof VcMeasurementRectangle

export type MeasurementActionCmpRef = Ref<
  | typeof VcMeasurementDistance
  | typeof VcMeasurementPolyline
  | typeof VcMeasurementHorizontal
  | typeof VcMeasurementVertical
  | typeof VcMeasurementHeight
  | typeof VcMeasurementArea
  | typeof VcMeasurementPoint
  | typeof VcMeasurementRectangle
>

export type MeasurementActionCmpOpts =
  | typeof distanceMeasurementDefault
  | typeof componentDistanceMeasurementDefault
  | typeof polylineMeasurementDefault
  | typeof horizontalMeasurementDefault
  | typeof verticalMeasurementDefault
  | typeof heightMeasurementDefault
  | typeof areaMeasurementDefault
  | typeof pointMeasurementDefault
  | typeof rectangleMeasurementDefault

export interface VcDrawingActionInstance {
  name: string
  type: 'measurement' | 'drawing'
  actionStyle: CSSProperties
  actionClass: string
  actionRef: Ref<typeof VcFabAction>
  actionOpts: MeasurementActionOpts | DrawingActionOpts
  cmp: MeasurementActionCmp | DrawgingActionCmp | undefined
  cmpRef: MeasurementActionCmpRef | DrawingActionCmpRef
  cmpOpts: MeasurementActionCmpOpts | DrawingActionCmpOpts
  tip: string
  isActive: boolean
}

export interface PointDrawing {
  show: boolean
  position: Cesium.Cartesian3
  drawStatus: number
  lng: number
  lat: number
  height: number
  slope: number
}

export interface PolylineDrawing {
  show: boolean
  positions: Array<Cesium.Cartesian3>
  tempPositions: Array<Cesium.Cartesian3>
  drawStatus: number
  loop: boolean
  area: number
  distance: number
  distances: Array<number>
  labels: Array<{
    text: string
    position: Cesium.Cartesian3
    id: string
  }>
  angles: Array<number>

  dashedLines?: Array<{
    positions: Array<Cesium.Cartesian3>
  }>
  heightPlane?: Cesium.Plane
  heightPlaneCV?: Cesium.Plane
  height?: number
  firstMove?: boolean
  tempNextPos?: Cesium.Cartesian3
}

export interface SegmentDrawing {
  show: boolean
  positions: Array<Cesium.Cartesian3>
  drawStatus: number
  distance: number
  labelPosition?: Cesium.Cartesian3
  xyPolylinePositions?: Array<Cesium.Cartesian3>
  xyBoxPositions?: Array<Cesium.Cartesian3>
  xDistance?: number
  xLabelPosition?: Cesium.Cartesian3
  yDistance?: number
  yLabelPosition?: Cesium.Cartesian3
  xAngle?: number
  xAnglePosition?: Cesium.Cartesian3
  yAngle?: number
  yAnglePosition?: Cesium.Cartesian3
  labels: Array<{
    text: string
    position: Cesium.Cartesian3
    id: string
  }>

  draggingPlane?: Cesium.Plane
  surfaceNormal?: Cesium.Cartesian3

  polygonPositions?: Array<Cesium.Cartesian3>
}
