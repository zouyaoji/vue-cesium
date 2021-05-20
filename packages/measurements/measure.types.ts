import { VcFabAction } from '@vue-cesium/ui'
import { CSSProperties, Ref } from 'vue'
import { clearActionDefault, componentDistanceActionDefault, componentDistanceMeasurementDefault, distanceActionDefault, distanceMeasurementDefault } from './defaultProps'
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
  actionOpts: typeof distanceActionDefault | typeof componentDistanceActionDefault | typeof clearActionDefault
  measurementRef: Ref<typeof VcMeasurementDistance>
  measurementOpts: typeof distanceMeasurementDefault | typeof componentDistanceMeasurementDefault
  actionStyle?: CSSProperties
  actionClass?: string
  tip?: string
  cmp: typeof VcMeasurementDistance
  isActive: boolean
}

export {
  MeasurementsOption,
  DistanceMeasurementPolyline
}
