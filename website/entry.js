import { createApp, nextTick } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './route.config'
import demoBlock from './components/demo-block'
import RightNav from './components/right-nav'
import MainFooter from './components/footer'
import MainHeader from './components/header'
import SideNav from './components/side-nav'
import FooterNav from './components/footer-nav'
import title from './i18n/title'
import 'highlight.js/styles/color-brewer.css'
import './demo-styles/index.scss'
import './assets/styles/common.scss'
import './assets/styles/fonts/style.css'
import icon from './icon.json'

import App from './app.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'element-plus/lib/theme-chalk/display.css'

import VueCesium from 'vue-cesium'
import '../packages/theme-default/src/index.scss'
// import '../lib/theme-default/index.css'

const app = createApp(App)

app.config.globalProperties.$icon = icon

app.component('DemoBlock', demoBlock)
app.component('RightNav', RightNav)
app.component('MainFooter', MainFooter)
app.component('MainHeader', MainHeader)
app.component('SideNav', SideNav)
app.component('FooterNav', FooterNav)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
app.use(ElementPlus)
app.use(VueCesium, {
  cesiumPath: '/public/CesiumUnminified/Cesium.js',
  // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js',
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5Y2U0ZTk2Ni1jNzdkLTQ3OWYtYjVmYS0yMGM3YTk3NjgzMmUiLCJpZCI6Njk5Nywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0ODA1MTc0OH0.Csy6yyAnv6JSBppH0Ou3ahshqcHFEhP27iOz5gjQMEo'
})
app.use(router)
router.isReady().then(() => {

  router.afterEach(async route => {
    await nextTick()
    const data = title[route.meta.lang]
    for (let val in data) {
      if (new RegExp('^' + val, 'g').test(route.name)) {
        document.title = data[val]
        return
      }
    }
    document.title = 'Element'
    ga('send', 'event', 'PageView', route.name)
  })

})

app.mount('#app')
