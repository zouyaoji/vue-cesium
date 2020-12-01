import VcShinePoint from './VcShinePoint.vue'
import * as Entity from '../../entity'
import * as PointGraphics from '../../entity/point'
function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.use(Entity)
  Vue.use(PointGraphics)

  Vue.component(VcShinePoint.name, VcShinePoint)
}

export default plugin

export {
  VcShinePoint,
  plugin as install
}
