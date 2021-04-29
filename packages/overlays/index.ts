import { App } from 'vue'
import VcOverlayHtml from './html'

const components = [
  VcOverlayHtml
]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export {
  VcOverlayHtml
}

export default {
  install
}
