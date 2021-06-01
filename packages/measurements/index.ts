import { App } from 'vue'
import VcMeasurements from './src'

VcMeasurements.install = (app: App): void => {
  app.component(VcMeasurements.name, VcMeasurements)
}

export default VcMeasurements
