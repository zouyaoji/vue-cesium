import VcShineEllipse from './VcShineEllipse.vue'
// 按需引入该组件时自动引入下面组件才能正常工作
import * as Entity from '../../entity'
import * as EllipseGraphics from '../../entity/ellipse'
function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  Vue.use(Entity)
  Vue.use(EllipseGraphics)

  Vue.component(VcShineEllipse.name, VcShineEllipse)
}

export default plugin

export {
  VcShineEllipse,
  plugin as install
}
