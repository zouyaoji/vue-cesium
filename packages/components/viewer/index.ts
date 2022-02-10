/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-02-10 10:25:17
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\viewer\index.ts
 */
import { App } from 'vue'
import { ConfigProviderContext } from '@vue-cesium/utils/config'
import { SFCWithInstall } from '@vue-cesium/utils/types'
import Viewer from './src'

Viewer.install = (app: App, opts: ConfigProviderContext): void => {
  app.component(Viewer.name, Viewer)
}

const _Viewer = Viewer as SFCWithInstall<typeof Viewer>

export default _Viewer
export const VcViewer = _Viewer

export * from './src'
