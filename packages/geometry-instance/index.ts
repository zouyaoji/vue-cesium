import { App } from 'vue'
import VcInstanceGeometry from './src'

VcInstanceGeometry.install = (app: App): void => {
  app.component(VcInstanceGeometry.name, VcInstanceGeometry)
}

export default VcInstanceGeometry
