/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-13 10:48:26
 * @LastEditTime: 2022-05-18 21:27:00
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\utils\drawing-types.ts
 */

import {
  VcDrawingPin,
  VcDrawingPoint,
  VcDrawingPolygon,
  VcDrawingPolyline,
  VcDrawingRectangle,
  VcDrawingRegular
} from '@vue-cesium/components/drawings/src'
import type {
  VcBillboardProps,
  VcFabActionRef,
  VcGeometryInstanceProps,
  VcGeometryPolylineProps,
  VcLabelProps,
  VcPointProps,
  VcPolygonProps,
  VcPrimitiveProps
} from '@vue-cesium/components'

import {
  VcMeasurementArea,
  VcMeasurementDistance,
  VcMeasurementHeight,
  VcMeasurementHorizontal,
  VcMeasurementPoint,
  VcMeasurementPolyline,
  VcMeasurementRectangle,
  VcMeasurementVertical,
  VcMeasurementRegular
} from '@vue-cesium/components/measurements/src'

import { VcAnalysisSightline, VcAnalysisViewshed } from '@vue-cesium/components/analyses/src'
import type { CSSProperties, Ref } from 'vue'
import type { VcPickEvent, VcBtnTooltipProps, VcCartesian3Array, VcPosition, VcColor, AppearanceOption, VcActionTooltipProps } from './types'
import { MeasureUnits } from '@vue-cesium/shared'

export type DrawingActionOpts = VcActionTooltipProps

export type DrawgingActionCmp =
  | typeof VcDrawingPin
  | typeof VcDrawingPoint
  | typeof VcDrawingPolygon
  | typeof VcDrawingPolyline
  | typeof VcDrawingRegular
  | typeof VcDrawingRectangle

export type DrawingActionCmpRef = Ref<
  typeof VcDrawingPoint | typeof VcDrawingPolyline | typeof VcDrawingPolygon | typeof VcDrawingRegular | typeof VcDrawingRectangle
>

export type MeasurementActionCmp =
  | typeof VcMeasurementArea
  | typeof VcMeasurementDistance
  | typeof VcMeasurementHeight
  | typeof VcMeasurementHorizontal
  | typeof VcMeasurementPoint
  | typeof VcMeasurementPolyline
  | typeof VcMeasurementRectangle
  | typeof VcMeasurementRegular
  | typeof VcMeasurementVertical

export type MeasurementActionCmpRef = Ref<
  | typeof VcMeasurementDistance
  | typeof VcMeasurementPolyline
  | typeof VcMeasurementHorizontal
  | typeof VcMeasurementVertical
  | typeof VcMeasurementHeight
  | typeof VcMeasurementArea
  | typeof VcMeasurementPoint
  | typeof VcMeasurementRectangle
  | typeof VcMeasurementRegular
>

export type AnalysisActionCmp = typeof VcAnalysisSightline | typeof VcAnalysisViewshed
export type AnalysisActionCmpRef = Ref<typeof VcAnalysisSightline | typeof VcAnalysisViewshed>

export interface VcDrawingActionInstance {
  name: string
  type: 'measurement' | 'drawing' | 'analysis'
  actionStyle: CSSProperties
  actionClass: string
  actionRef: Ref<VcFabActionRef>
  actionOpts: VcActionTooltipProps
  cmp: MeasurementActionCmp | DrawgingActionCmp | AnalysisActionCmp
  cmpRef: MeasurementActionCmpRef | DrawingActionCmpRef | AnalysisActionCmpRef
  cmpOpts: VcMeasurementOpts | VcDrawingOpts
  tip: string
  isActive: boolean
}

export interface VcPointDrawing {
  show: boolean
  position: Cesium.Cartesian3
  drawStatus: number
  lng: number
  lat: number
  height: number
  slope: number

  positionDegrees?: [number, number, number]
  labelOpts?: VcLabelProps
  pointOpts?: VcPointProps
  billboardOpts?: VcBillboardProps
}

export interface VcPolylineDrawing {
  show: boolean
  positions: Array<Cesium.Cartesian3>
  tempPositions: Array<Cesium.Cartesian3>
  drawStatus: number
  loop: boolean
  area: number
  distance: number
  distances: Array<number>
  labels: Array<VcLabelProps>
  angles: Array<number>

  dashedLines?: Array<{
    positions: Array<Cesium.Cartesian3>
  }>
  heightPlane?: Cesium.Plane
  heightPlaneCV?: Cesium.Plane
  height?: number
  firstMove?: boolean
  tempNextPos?: Cesium.Cartesian3

  positionsDegreesArray?: Array<[number, number, number]>

  labelOpts?: VcLabelProps
  labelsOpts?: VcLabelProps
  pointOpts?: VcPointProps
  polylineOpts?: VcGeometryPolylineProps
  primitiveOpts?: VcPrimitiveProps
  polygonOpts?: VcPolygonProps

  // for VcMeasurementHorizontal
  dashLineOpts?: VcGeometryPolylineProps
  dashLinePrimitiveOpts?: VcPrimitiveProps

  points?: Array<VcPointProps>
}

export interface VcSegmentDrawing {
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
  labels: Array<VcLabelProps>

  draggingPlane?: Cesium.Plane
  surfaceNormal?: Cesium.Cartesian3

  polygonPositions?: Array<Cesium.Cartesian3>

  heading?: number
  pitch?: number
  shadowMap?: Cesium.ShadowMap
  lightCamera?: Cesium.Camera
  viewshedShadowMap?: Cesium.ShadowMap
  spotLightCamera?: Cesium.Camera
  frustum?: Cesium.PerspectiveFrustum

  positionsDegreesArray?: Array<[number, number, number]>
  polygonPositionsDegreesArray?: Array<[number, number, number]>

  labelOpts?: VcLabelProps
  labelsOpts?: VcLabelProps
  pointOpts?: VcPointProps
  primitiveOpts?: VcPrimitiveProps
  polylineOpts?: VcGeometryPolylineProps
  polygonOpts?: VcPolygonProps

  points?: Array<VcPointProps>
  viewshedOpts?: VcViewshedOpts
}

export interface VcDrawingPrimitive {
  show?: boolean
  appearance?: AppearanceOption
  depthFailAppearance?: AppearanceOption
  classificationType?: number
}

export interface VcDrawTipOpts {
  show?: boolean
  pixelOffset?: [number, number]
  drawingTipStart?: string
  drawingTipEnd?: string
  drawingTipEditing?: string
}

export interface VcEditorOpts {
  pixelOffset?: [number, number]
  delay?: number
  hideDelay?: number
  move?: VcBtnTooltipProps
  insert?: VcBtnTooltipProps
  remove?: VcBtnTooltipProps
  removeAll?: VcBtnTooltipProps
}

export interface VcDrawingOpts {
  show?: boolean
  drawtip?: VcDrawTipOpts
  pointOpts?: VcPointProps
  labelOpts?: VcLabelProps
  labelsOpts?: VcLabelProps
  polylineOpts?: VcGeometryPolylineProps
  polygonOpts?: VcPolygonProps
  editorOpts?: VcEditorOpts
  primitiveOpts?: VcPrimitiveProps
  geometryInstanceOpts?: VcGeometryInstanceProps
  loop?: boolean
  heightReference?: number
  showComponentLines?: boolean
  edge?: number
  sightlineType?: string
  regular?: boolean
  disableDepthTest?: boolean
  showDistanceLabel?: boolean
  showLabel?: boolean
  showAngleLabel?: boolean
  autoUpdateLabelPosition?: boolean
}

export type MeasurementType =
  | 'distance'
  | 'component-distance'
  | 'polyline'
  | 'horizontal'
  | 'vertical'
  | 'height'
  | 'area'
  | 'point'
  | 'rectangle'
  | 'regular'
  | 'circle'

export type DrawingType = 'pin' | 'point' | 'polyline' | 'polygon' | 'rectangle' | 'regular' | 'circle'

export type AnalysisType = 'sightline' | 'viewshed'

export interface VcDrawingDrawEvt {
  index?: number
  name: MeasurementType | DrawingType | AnalysisType
  renderDatas: Ref<Array<VcPointDrawing | VcPolylineDrawing | VcSegmentDrawing>>
  finished: boolean
  position?: Cesium.Cartesian3
  windowPoistion: Cesium.Cartesian2
  type: 'new' | 'move' | 'remove' | 'insert' | 'removeAll' | 'cancel'
}

export interface VcDrawingActiveEvt {
  type: MeasurementType | DrawingType | AnalysisType
  option: VcDrawingActionInstance
  isActive: boolean
}

export interface VcDrawingEditorEvt {
  type: 'move' | 'insert' | 'remove' | 'removeAll'
  renderDatas: Ref<Array<VcPointDrawing | VcPolylineDrawing | VcSegmentDrawing>>
  name: MeasurementType | DrawingType | AnalysisType
  index: number
}

export interface VcDrawingMouseEvt {
  type: 'onmouseout' | 'onmouseover'
  name: MeasurementType | DrawingType | AnalysisType
  target: VcPickEvent
}

export interface VcMeasurementOpts extends VcDrawingOpts {
  measureUnits?: MeasureUnits
  decimals?: {
    distance?: number
    angle?: number
    area?: number
    lng?: number
    lat?: number
    height?: number
    slope?: number
  }
  locale?: string
  autoUpdateLabelPosition?: boolean
}

export interface VcComponentDistanceMeasurementOpts extends VcMeasurementOpts {
  showComponentLines?: boolean
  xLabelOpts?: VcLabelProps
  xAngleLabelOpts?: VcLabelProps
  yLabelOpts?: VcLabelProps
  yAngleLabelOpts?: VcLabelProps
}

export interface VcPolylineMeasurementOpts extends VcMeasurementOpts {
  labelsOpts?: VcLabelProps
  showAngleLabel?: boolean
  showDistanceLabel?: boolean
  loop?: boolean
}

export interface VcHorizontalMeasurementOpts extends VcPolylineMeasurementOpts {
  showDashedLine?: boolean
  dashLineOpts?: VcGeometryPolylineProps
}

export interface VcRegularMeasurementOpts extends VcPolylineMeasurementOpts {
  edge?: number
  loop?: boolean
}

export interface VcViewshedAnalysisOpts extends VcDrawingOpts {
  viewshedOpts?: VcViewshedOpts
}

export type VcDrawingPreRenderDatas = Array<VcCartesian3Array | VcPosition>

export type MeasurementDecimals = {
  distance?: number
  angle?: number
  area?: number
  lng?: number
  lat?: number
  height?: number
  slope?: number
}

export type VcViewshedOpts = {
  fovH?: number
  fovV?: number
  invisibleColor?: VcColor
  offsetHeight?: number
  visibleColor?: VcColor
  show?: boolean
  showGridLine?: boolean
  lineColor?: VcColor
  faceColor?: VcColor
}
