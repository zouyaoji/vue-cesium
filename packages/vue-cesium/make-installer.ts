/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-02-10 10:10:54
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\vue-cesium\make-installer.ts
 */

import { version } from './version'
import type { App, Plugin } from 'vue'
import type { ConfigProviderContext } from '@vue-cesium/utils/config'
import { provideGlobalConfig } from '@vue-cesium/composables/use-global-config'
import useLog from '@vue-cesium/composables/private/use-log'
const logger = useLog(undefined)

const INSTALLED_KEY = Symbol('INSTALLED_KEY')

const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, opts: ConfigProviderContext) => {
    if (app[INSTALLED_KEY]) return

    const defaultConfig: ConfigProviderContext = {
      cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js'
      // accessToken:
      // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5Y2U0ZTk2Ni1jNzdkLTQ3OWYtYjVmYS0yMGM3YTk3NjgzMmUiLCJpZCI6Njk5Nywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0ODA1MTc0OH0.Csy6yyAnv6JSBppH0Ou3ahshqcHFEhP27iOz5gjQMEo'
    }

    app[INSTALLED_KEY] = true
    components.forEach(c => {
      app.use(c, opts)
    })

    const options = Object.assign(defaultConfig, opts)
    provideGlobalConfig(options, app)

    if (process.env.NODE_ENV === 'development') {
      logger.capsule('VueCesium', `v${version}`)
      logger.success('VueCesium  https://github.com/zouyaoji/vue-cesium')
      logger.success('Document  https://zouyaoji.top/vue-cesium')
      logger.success(`If you like it, give it a star reward, ^_^`)
      logger.success(`表示赞，给它一个星星奖励，^_^`)
    }
  }

  return {
    version,
    install
  }
}

export default makeInstaller
