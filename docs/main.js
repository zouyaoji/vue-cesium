import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import routes from './routes'

import DocPreview from './components/DocPreview.vue'
import TextField from './components/TextField.vue'
import VueSlider from 'vue-slider-component'
import VueMaterial from 'vue-material'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'material-design-icons/iconfont/material-icons.css'
import './fonts/iconfont.css'
import 'vue-material/dist/vue-material.css'
import 'vue-slider-component/theme/default.css'
import VueCesium from '../lib/index.js'
import '../lib/vc-navigation.css'
import '../lib/vc-navigation-sm.css'
Vue.use(VueCesium, {
  // cesiumPath is path of Cesium.js', for example:
  // local Cesium Build package:
  // cesiumPath: /static/Cesium/Cesium.js
  // Personal online Cesium Build package：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'
  // Personal online SuperMap Cesium Build package：
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js'
  // Official Online Cesium Build package：
  // cesiumPath: 'https://unpkg.com/cesium/Build/CesiumUnminified/Cesium.js',
  // cesiumPath: 'https://unpkg.com/cesium@1.57.0/Build/Cesium/Cesium.js',
  cesiumPath: './statics/Cesium/Cesium.js',
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5Y2U0ZTk2Ni1jNzdkLTQ3OWYtYjVmYS0yMGM3YTk3NjgzMmUiLCJpZCI6Njk5Nywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0ODA1MTc0OH0.Csy6yyAnv6JSBppH0Ou3ahshqcHFEhP27iOz5gjQMEo'
})

Vue.use(VueRouter)

Vue.use(VueMaterial)
Vue.material.registerTheme({
  white: {
    primary: 'white',
    accent: 'black'
  }
})

Vue.component('doc-preview', DocPreview)
Vue.component('text-field', TextField)
Vue.component('VueSlider', VueSlider)

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes
})

router.afterEach(route => {
  Vue.nextTick(Prism.highlightAll)
})

export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
