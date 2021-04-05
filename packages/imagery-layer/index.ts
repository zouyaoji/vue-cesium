import { App } from 'vue'
import ImageryLayer from './src'

ImageryLayer.install = (app: App): void => {
  app.component(ImageryLayer.name, ImageryLayer)
}

export default ImageryLayer
