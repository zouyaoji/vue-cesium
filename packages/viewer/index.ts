import { App } from 'vue'
import Viewer from './src'
Viewer.install = (app: App): void => {
  app.component(Viewer.name, Viewer)
}

export default Viewer
