import VcScanCircle from './VcScanCircle.vue'
import * as PostProcessStage from '../../stage'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.use(PostProcessStage)
  Vue.component(VcScanCircle.name, VcScanCircle)
}

export default plugin

export {
  VcScanCircle,
  plugin as install
}
