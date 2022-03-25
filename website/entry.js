/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-08-31 16:26:50
 * @LastEditTime: 2022-02-17 11:47:55
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
import AppHeading from './components/heading'
import AppLink from './components/link'
import AppImg from './components/img'
import icon from './icon.json'
import title from './i18n/title'
import 'highlight.js/styles/color-brewer.css'
import './demo-styles/index.scss'
import './assets/styles/common.scss'
import './assets/styles/fonts/style.css'

import App from './app.vue'
import ElementPlus from 'element-plus'
import * as ElementPlusSvgIcons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'

import VueCesium from 'vue-cesium'
import '../packages/theme-default/src/index.scss'

const app = createApp(App)

const svgIcons = []
for (let i in ElementPlusSvgIcons) {
  const component = ElementPlusSvgIcons[i]
  app.component(component.name, component)
  svgIcons.push(component.name)
}

app.config.globalProperties.$svgIcons = svgIcons
app.config.globalProperties.$icon = icon

app.component('DemoBlock', demoBlock)
app.component('RightNav', RightNav)
app.component('MainFooter', MainFooter)
app.component('MainHeader', MainHeader)
app.component('SideNav', SideNav)
app.component('FooterNav', FooterNav)
app.component('AppHeading', AppHeading)
app.component('AppLink', AppLink)
app.component('AppImg', AppImg)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
app.use(ElementPlus)
app.use(VueCesium)

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
    document.title = 'Vue Cesium'
    ga('send', 'event', 'PageView', route.name)
  })
})

app.mount('#app')
