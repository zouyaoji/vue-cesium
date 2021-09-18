/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-09-18 13:47:23
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\vue-cesium\make-installer.ts
 */

import { version } from './version'

import type { App, Plugin } from 'vue'
import type { InstallOptions } from '@vue-cesium/utils/config'

const makeInstaller = (components: Plugin[] = []) => {
  const apps: App[] = []

  const install = (app: App, opts: InstallOptions) => {
    if (apps.includes(app)) return
    apps.push(app)

    components.forEach(c => {
      app.use(c, opts)
    })
  }

  return {
    version,
    install
  }
}

export default makeInstaller
