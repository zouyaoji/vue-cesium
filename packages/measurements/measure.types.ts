import { VcPrimitive } from '@vue-cesium/primitives'
import { VcFabAction } from '@vue-cesium/ui'
import { AnyObject } from '@vue-cesium/utils/types'
import { ComputedRef, CSSProperties, Ref } from 'vue'
import VcMeasurementDistance from './distance'

interface DistanceMeasurementPolyline {
  show: boolean
  positions: Array<Cesium.Cartesian3>
  xyPolylinePositions?: Array<Cesium.Cartesian3>
  xyBoxPositions?: Array<Cesium.Cartesian3>
  startPoint?: Cesium.Cartesian3
  endPoint?: Cesium.Cartesian3
  distance?: number
  labelPosition?: Cesium.Cartesian3
  xDistance?: number
  xLabelPosition?: Cesium.Cartesian3
  yDistance?: number
  yLabelPosition?: Cesium.Cartesian3
  xAngle?: number
  xAnglePosition?: Cesium.Cartesian3
  yAngle?: number
  yAnglePosition?: Cesium.Cartesian3
}

interface MeasurementsOption {
  name: string
  actionRef: Ref<typeof VcFabAction>
  actionOpts: AnyObject
  measurementRef: Ref<typeof VcMeasurementDistance>
  measurementOpts: AnyObject
  actionStyle?: CSSProperties
  actionClass?: ComputedRef<string>
  tip?: string
}

export {
  MeasurementsOption,
  DistanceMeasurementPolyline
}
