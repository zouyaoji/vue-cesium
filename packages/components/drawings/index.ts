/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2022-01-21 09:53:29
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\drawings\index.ts
 */
import { App } from 'vue'
import Drawings from './src'
import { SFCWithInstall } from '@vue-cesium/utils/types'

Drawings.install = (app: App): void => {
  app.component(Drawings.name, Drawings)
}

const _Drawings = Drawings as SFCWithInstall<typeof Drawings>

export default _Drawings
export const VcDrawings = _Drawings

export * from './src'
