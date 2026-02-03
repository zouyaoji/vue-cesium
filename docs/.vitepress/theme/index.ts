/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2025-11-28 14:55:53
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2026-01-31 22:53:54
 * @FilePath: \vue-cesium\docs\.vitepress\theme\index.ts
 */
import type { Theme } from 'vitepress'
import { isClient } from '@vueuse/core'
import ElementPlus, {
  ID_INJECTION_KEY,
  ZINDEX_INJECTION_KEY
} from 'element-plus'
import VueCesium from 'vue-cesium'
import { define } from '../utils/types'
import VPApp, { globals, NotFound } from '../vitepress'
import 'uno.css'
import './style.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code-group.css'
import 'virtual:group-icons.css'
// 本地
import '@vue-cesium/theme-default/src/index.scss'
// npm
// import 'vue-cesium/dist/index.css'
import './normalize.scss'
import './demo.scss'

export default define<Theme>({
  NotFound,
  Layout: VPApp,
  enhanceApp: async ({ app, router }) => {
    app.use(ElementPlus)
    app.use(VueCesium)
    app.provide(ID_INJECTION_KEY, { prefix: 1024, current: 0 })
    app.provide(ZINDEX_INJECTION_KEY, { current: 0 })
    Object.entries(globals).forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
    if (!isClient)
      return
    const nprogress = await import('nprogress')
    router.onBeforeRouteChange = nprogress.start
    router.onAfterRouteChange = nprogress.done
  }
})
