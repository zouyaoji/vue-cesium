import { SFCWithInstall } from '@vue-cesium/utils/types'
import { App } from 'vue'
import Measurements from './src'

Measurements.install = (app: App): void => {
  app.component(Measurements.name, Measurements)
}

const _Measurements = Measurements as SFCWithInstall<typeof Measurements>

export default _Measurements
export const VcMeasurements = _Measurements
