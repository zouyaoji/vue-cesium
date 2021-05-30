import { App } from 'vue'
import VcMeasurements from './src'
import MeasureUnits, { DistanceUnits, AreaUnits, VolumeUnits, AngleUnits } from './src/MeasureUnits'

VcMeasurements.install = (app: App): void => {
  app.component(VcMeasurements.name, VcMeasurements)
}

export default VcMeasurements
export {
  MeasureUnits,
  DistanceUnits, AreaUnits, VolumeUnits, AngleUnits
}
