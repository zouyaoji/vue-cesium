import { App } from 'vue'
import Drawings from './src'
import { SFCWithInstall } from '@vue-cesium/utils/types'

Drawings.install = (app: App): void => {
  app.component(Drawings.name, Drawings)
}

const _Drawings = Drawings as SFCWithInstall<typeof Drawings>

export default _Drawings
export const VcDrawings = _Drawings
