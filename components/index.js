import { version } from '../package.json'
import CesiumViewer from './viewer/Viewer.vue'
import SuperMapImageryLayer from './layers/SuperMapImageryLayer.vue'
import ArcGisMapServerImageryLayer from './layers/ArcGisMapServerImageryLayer.vue'
import BingMapsImageryLayer from './layers/BingMapsImageryLayer.vue'
import TiandituImageryLayer from './layers/TiandituImageryLayer.vue'
export default {
  install (Vue, options) {
    const { cesiumPath } = options
    Vue.prototype._Cesium = () => ({ cesiumPath })
    Vue.component('cesium-viewer', CesiumViewer)
    Vue.component('supermap-imagery-layer', SuperMapImageryLayer)
    Vue.component('arcgis-imagery-layer', ArcGisMapServerImageryLayer)
    Vue.component('bingmap-imagery-layer', BingMapsImageryLayer)
    Vue.component('tianditu-imagery-layer', TiandituImageryLayer)
  },
  version
}

export {
  CesiumViewer, SuperMapImageryLayer, ArcGisMapServerImageryLayer, BingMapsImageryLayer,
  TiandituImageryLayer
}
