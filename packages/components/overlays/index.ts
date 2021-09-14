import { App } from 'vue'
import OverlayHtml from './html'
import OverlayHeatmap from './heatmap'
import { SFCWithInstall } from '@vue-cesium/utils/types'

const components = [OverlayHtml, OverlayHeatmap]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export default {
  install
}

components.forEach(cmp => {
  cmp['install'] = (app: App): void => {
    app.component(cmp.name, cmp)
  }
})

export const VcOverlayHtml = OverlayHtml as SFCWithInstall<typeof OverlayHtml>
export const VcOverlayHeatmap = OverlayHeatmap as SFCWithInstall<typeof OverlayHeatmap>
