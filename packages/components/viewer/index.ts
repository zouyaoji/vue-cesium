/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2021-10-07 19:27:00
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\viewer\index.ts
 */
import { App } from 'vue'
import { InstallOptions } from '@vue-cesium/utils/config'
import { SFCWithInstall } from '@vue-cesium/utils/types'
import { setConfig } from '@vue-cesium/utils/config'
import { LocaleInjectionKey, localeProviderMaker } from '@vue-cesium/composables'
import Viewer from './src'
import useLog from '@vue-cesium/composables/private/use-log'
const logger = useLog(undefined!)

Viewer.install = (app: App, opts: InstallOptions): void => {
  const defaultInstallOpt: InstallOptions = {
    cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js',
    accessToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5Y2U0ZTk2Ni1jNzdkLTQ3OWYtYjVmYS0yMGM3YTk3NjgzMmUiLCJpZCI6Njk5Nywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0ODA1MTc0OH0.Csy6yyAnv6JSBppH0Ou3ahshqcHFEhP27iOz5gjQMEo'
  }

  const option = Object.assign(defaultInstallOpt, opts)

  if (option.locale) {
    const localeProvides = localeProviderMaker(opts.locale)
    localeProvides && app.provide(LocaleInjectionKey, localeProvides)
  }

  app.config.globalProperties.$VueCesium = option
  setConfig(option)

  app.component(Viewer.name, Viewer)

  if (process.env.NODE_ENV === 'development') {
    logger.capsule('VueCesium', `v${option.version}`)
    logger.success('VueCesium  https://github.com/zouyaoji/vue-cesium')
    logger.success('Document  https://zouyaoji.top/vue-cesium')
    logger.success(`If you like it, give it a star reward, ^_^`)
    logger.success(`表示赞，给它一个星星奖励，^_^`)
  }
}

const _Viewer = Viewer as SFCWithInstall<typeof Viewer>

export default _Viewer
export const VcViewer = _Viewer
