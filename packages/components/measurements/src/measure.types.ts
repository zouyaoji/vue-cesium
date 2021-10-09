import { VcFabAction } from '@vue-cesium/components/ui'
import { AnyObject } from '@vue-cesium/utils/types'
import { CSSProperties, Ref } from 'vue'
import {
  areaActionDefault,
  areaMeasurementDefault,
  clearActionDefault,
  componentDistanceActionDefault,
  componentDistanceMeasurementDefault,
  distanceActionDefault,
  distanceMeasurementDefault,
  heightActionDefault,
  heightMeasurementDefault,
  horizontalActionDefault,
  horizontalMeasurementDefault,
  pointActionDefault,
  pointMeasurementDefault,
  polylineActionDefault,
  polylineMeasurementDefault,
  verticalActionDefault,
  verticalMeasurementDefault
} from './defaultProps'
import VcMeasurementDistance from './distance'
import VcMeasurementPolyline from './polyline'
import VcMeasurementHorizontal from './horizontal'
import VcMeasurementVertical from './vertical'
import VcMeasurementHeight from './height'
import VcMeasurementPoint from './point'
import VcMeasurementArea from './area'

interface PointMeasurement {
  position: Cesium.Cartesian3
  height: number
  slope: number
  drawStatus: number
  show: boolean
}

interface PolylineSegment {
  show: boolean
  positions: Array<Cesium.Cartesian3>
  drawStatus: number
}

interface DistanceMeasurementPolylineSegment extends PolylineSegment {
  distance: number
  labelPosition: Cesium.Cartesian3
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
}

interface HorizontalMeasurementDrawing extends PolylineDrawing {
  distance: number
  distances: Array<number>
  labels: Array<AnyObject>
  angles: Array<number>
  dashedLines?: Array<AnyObject>
  heightPlane?: Cesium.Plane
  heightPlaneCV?: Cesium.Plane
  height?: number
  firstMove?: boolean
  tempNextPos: Cesium.Cartesian3
}

interface VerticalMeasurementPolylineSegment extends PolylineSegment {
  distance?: number
  labelPosition?: Cesium.Cartesian3
  draggingPlane: Cesium.Plane
  surfaceNormal: Cesium.Cartesian3
}

interface HeightMeasurementPolylineSegment extends PolylineSegment {
  distance: number
  labelPosition: Cesium.Cartesian3
}

interface PolylineDrawing {
  show: boolean
  positions: Array<Cesium.Cartesian3>
  tempPositions: Array<Cesium.Cartesian3>
  drawStatus: number
  loop?: boolean
}

interface PolylineMeasurementDrawing extends PolylineDrawing {
  distance: number
  distances: Array<number>
  labels: Array<AnyObject>
  angles: Array<number>
}

interface PolygonMeasurementDrawing extends PolylineDrawing {
  distance: number
  distances: Array<number>
  labels: Array<AnyObject>
  area: number
  angles: Array<number>
}

interface MeasurementInstanceOpts {
  name: string
  actionRef: Ref<typeof VcFabAction | null>
  actionOpts:
    | typeof distanceActionDefault
    | typeof componentDistanceActionDefault
    | typeof polylineActionDefault
    | typeof horizontalActionDefault
    | typeof verticalActionDefault
    | typeof heightActionDefault
    | typeof areaActionDefault
    | typeof pointActionDefault
    | typeof clearActionDefault
  measurementRef: Ref<
    | typeof VcMeasurementDistance
    | typeof VcMeasurementPolyline
    | typeof VcMeasurementHorizontal
    | typeof VcMeasurementVertical
    | typeof VcMeasurementHeight
    | typeof VcMeasurementArea
    | typeof VcMeasurementPoint
    | null
  >
  measurementOpts:
    | typeof distanceMeasurementDefault
    | typeof componentDistanceMeasurementDefault
    | typeof polylineMeasurementDefault
    | typeof horizontalMeasurementDefault
    | typeof verticalMeasurementDefault
    | typeof heightMeasurementDefault
    | typeof areaMeasurementDefault
    | typeof pointMeasurementDefault
  actionStyle?: CSSProperties
  actionClass?: string
  tip?: string
  cmp:
    | typeof VcMeasurementDistance
    | typeof VcMeasurementPolyline
    | typeof VcMeasurementHorizontal
    | typeof VcMeasurementVertical
    | typeof VcMeasurementHeight
    | typeof VcMeasurementArea
    | typeof VcMeasurementPoint
    | null
  isActive: boolean
}

export {
  MeasurementInstanceOpts,
  PointMeasurement,
  PolylineSegment,
  DistanceMeasurementPolylineSegment,
  VerticalMeasurementPolylineSegment,
  HeightMeasurementPolylineSegment,
  PolylineDrawing,
  PolylineMeasurementDrawing,
  HorizontalMeasurementDrawing,
  PolygonMeasurementDrawing
}
