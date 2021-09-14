import { setConfig } from '@vue-cesium/utils/config'
import { LocaleInjectionKey, localeProviderMaker } from '@vue-cesium/composables'
import { version } from './version'

import type { App, Plugin } from 'vue'
import type { InstallOptions } from '@vue-cesium/utils/config'

const makeInstaller = (components: Plugin[] = []) => {
  const apps: App[] = []

  const install = (app: App, opts: InstallOptions) => {
    const defaultInstallOpt: InstallOptions = {
      cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js',
      accessToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5Y2U0ZTk2Ni1jNzdkLTQ3OWYtYjVmYS0yMGM3YTk3NjgzMmUiLCJpZCI6Njk5Nywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0ODA1MTc0OH0.Csy6yyAnv6JSBppH0Ou3ahshqcHFEhP27iOz5gjQMEo'
    }

    const option = Object.assign(defaultInstallOpt, opts)
    if (apps.includes(app)) return
    apps.push(app)

    components.forEach(c => {
      app.use(c)
    })

    if (option.locale) {
      const localeProvides = localeProviderMaker(opts.locale)
      app.provide(LocaleInjectionKey, localeProvides)
    }

    app.config.globalProperties.$VueCesium = option
    setConfig(option)
  }

  return {
    version,
    install
  }
}

export default makeInstaller
