import { App } from 'vue'
import VcOverlayHtml from './html'
import VcOverlayHeatmap from './heatmap'

const components = [
  VcOverlayHtml,
  VcOverlayHeatmap
]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export {
  VcOverlayHtml,
  VcOverlayHeatmap
}

export default {
  install
}
