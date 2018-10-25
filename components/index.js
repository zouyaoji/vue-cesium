import { version } from '../package.json'
import CesiumViewer from './viewer/viewer.vue'
export default {
  install (Vue, options) {
    const { cesiumPath } = options
    Vue.prototype._Cesium = () => ({ cesiumPath })
    Vue.component('cesium-viewer', CesiumViewer)
  },
  version
}

export {
  CesiumViewer
}
