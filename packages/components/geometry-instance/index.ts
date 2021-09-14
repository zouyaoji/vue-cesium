import { SFCWithInstall } from '@vue-cesium/utils/types'
import { App } from 'vue'
import InstanceGeometry from './src'

InstanceGeometry.install = (app: App): void => {
  app.component(InstanceGeometry.name, InstanceGeometry)
}

const _InstanceGeometry = InstanceGeometry as SFCWithInstall<typeof InstanceGeometry>

export default _InstanceGeometry
export const VcInstanceGeometry = _InstanceGeometry
