import { App } from 'vue'
import VcDrawings from './src'

VcDrawings.install = (app: App): void => {
  app.component(VcDrawings.name, VcDrawings)
}

export default VcDrawings
