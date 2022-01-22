/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-01-18 11:24:43
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\vue-cesium\make-installer.ts
 */

import { version } from './version'

import type { App, Plugin } from 'vue'
import type { InstallOptions } from '@vue-cesium/utils/config'

const INSTALLED_KEY = Symbol('INSTALLED_KEY')

const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, opts: InstallOptions) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true
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
