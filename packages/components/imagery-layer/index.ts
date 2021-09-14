import { SFCWithInstall } from '@vue-cesium/utils/types'
import { App } from 'vue'
import ImageryLayer from './src'

ImageryLayer.install = (app: App): void => {
  app.component(ImageryLayer.name, ImageryLayer)
}

const _ImageryLayer = ImageryLayer as SFCWithInstall<typeof ImageryLayer>

export default _ImageryLayer
export const VcLayerImagery = _ImageryLayer
