import type { SFCWithInstall } from '@vue-cesium/utils/types'
import type { App } from 'vue'
import ConfigProvider from './src'

ConfigProvider.install = (app: App): void => {
  app.component(ConfigProvider.name, ConfigProvider)
}

const _ConfigProvider = ConfigProvider as SFCWithInstall<typeof ConfigProvider>

export default _ConfigProvider
export const VcConfigProvider = _ConfigProvider

export * from './src'
