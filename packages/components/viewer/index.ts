import { SFCWithInstall } from '@vue-cesium/utils/types'
import { App } from 'vue'
import Viewer from './src'

Viewer.install = (app: App): void => {
  app.component(Viewer.name, Viewer)
}

const _Viewer = Viewer as SFCWithInstall<typeof Viewer>

export default _Viewer
export const VcViewer = _Viewer
