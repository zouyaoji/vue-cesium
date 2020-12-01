import Viewer from './Viewer.vue'
import lang from '../../exts/lang'
function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  const $vc = {
    VERSION: 'C_PKG_VERSION'
  }
  Vue.prototype.$vc = Vue.prototype.$vc || $vc
  if (!Vue.prototype.$vc.lang) {
    lang.install($vc, options.lang)
  }

  plugin.installed = true
  Vue.prototype._Cesium = () => options
  Vue.component(Viewer.name, Viewer)
}

export default plugin

export {
  Viewer,
  plugin as install
}
