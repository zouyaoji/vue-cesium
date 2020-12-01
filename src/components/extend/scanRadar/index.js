import VcScanRadar from './VcScanRadar.vue'
import * as PostProcessStage from '../../stage'
function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.use(PostProcessStage)
  Vue.component(VcScanRadar.name, VcScanRadar)
}

export default plugin

export {
  VcScanRadar,
  plugin as install
}
