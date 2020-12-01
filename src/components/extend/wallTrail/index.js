import VcWallTrail from './VcWallTrail.vue'
import * as Entity from '../../entity'
import * as WallGraphics from '../../entity/wall'
function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.use(Entity)
  Vue.use(WallGraphics)
  Vue.component(VcWallTrail.name, VcWallTrail)
}

export default plugin

export {
  VcWallTrail,
  plugin as install
}
