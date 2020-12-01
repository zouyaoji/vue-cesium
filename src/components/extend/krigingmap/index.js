
import VcKrigingMap from './VcKrigingMap.vue'
// 按需引入该组件时自动引入下面组件才能正常工作
import * as GeoJsonDataSource from '../../datasource/geojson'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true
  Vue.use(GeoJsonDataSource)
  Vue.component(VcKrigingMap.name, VcKrigingMap)
}

export default plugin

export {
  VcKrigingMap,
  plugin as install
}
