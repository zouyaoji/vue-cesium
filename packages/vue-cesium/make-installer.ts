/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-08-03 14:00:58
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\vue-cesium\make-installer.ts
 */

import type { ConfigProviderContext } from '@vue-cesium/utils/config'
import type { VcMittEvents } from '@vue-cesium/utils/types'
import type { Emitter } from 'mitt'
import type { App, Plugin } from 'vue'
import { provideGlobalConfig } from '@vue-cesium/composables/use-global-config'
import { logger } from '@vue-cesium/utils'
import mitt from 'mitt'
import { version } from './version'

const INSTALLED_KEY = Symbol('INSTALLED_KEY')

function makeInstaller(components: Plugin[] = []) {
  const install = (app: App, opts?: ConfigProviderContext) => {
    if (app[INSTALLED_KEY])
      return

    const vcMitt: Emitter<VcMittEvents> = mitt()

    const defaultConfig: ConfigProviderContext = {
      cesiumPath: 'https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js',
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OGE2MjZlOC1mMzhiLTRkZjQtOWEwZi1jZTE0MWY0YzhlMTAiLCJpZCI6MjU5LCJpYXQiOjE2NDM3MjU1NzZ9.ptZ5tVXvMmuWRC0WhjtYTg-17nQh14fgxBsx0HJiVXQ',
      $q: app.config.globalProperties?.$q,
      showNotify: false,
      debug: false,
      vcMitt
    }

    app[INSTALLED_KEY] = true

    const options = Object.assign(defaultConfig, opts)

    components.forEach((c) => {
      app.use(c, options)
    })

    provideGlobalConfig(options, app, true)

    logger.capsule('VueCesium', `v${version}`)
    logger.success('VueCesium  https://github.com/zouyaoji/vue-cesium')
    logger.success('Document  https://zouyaoji.top/vue-cesium')
    logger.success(`If you like it, give it a star reward, ^_^`)
    logger.success(`表示赞，给它一个星星奖励，^_^`)
  }

  return {
    version,
    install
  }
}

export default makeInstaller
