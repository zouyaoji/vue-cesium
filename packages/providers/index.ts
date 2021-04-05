import { App } from 'vue'
import VcProviderImageryArcgisMapserver from './arcgis'
import VcProviderImageryBaidumap from './baidu'
import VcProviderImageryBingmaps from './bingmaps'

const components = [
  VcProviderImageryArcgisMapserver,
  VcProviderImageryBaidumap,
  VcProviderImageryBingmaps
]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export {
  VcProviderImageryArcgisMapserver,
  VcProviderImageryBaidumap,
  VcProviderImageryBingmaps
}

export default {
  install
}
