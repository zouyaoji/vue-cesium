/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-08-31 16:26:50
 * @LastEditTime: 2021-09-09 17:44:02
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\website\entry.js
 */
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

import App from './app.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VueCesium from 'vue-cesium'
import '../packages/theme-default/src/index.scss'

const app = createApp(App)

app.component('DemoBlock', demoBlock)
app.component('RightNav', RightNav)
app.component('MainFooter', MainFooter)
app.component('MainHeader', MainHeader)
app.component('SideNav', SideNav)
app.component('FooterNav', FooterNav)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
app.use(ElementPlus)
app.use(VueCesium, {
  // cesiumPath: process.env.NODE_ENV === 'development' ? './CesiumUnminified/Cesium.js' : './Cesium/Cesium.js',
  // cesiumPath: 'https://unpkg.com/cesium@latest/Build/CesiumUnminified/Cesium.js',
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
