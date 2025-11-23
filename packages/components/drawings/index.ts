import type { SFCWithInstall } from '@vue-cesium/utils/types'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2022-03-06 22:50:38
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\drawings\index.ts
 */
import type { App } from 'vue'
import Drawings from './src'

Drawings.install = (app: App): void => {
  app.component(Drawings.name, Drawings)
}

const _Drawings = Drawings as SFCWithInstall<typeof Drawings>

export default _Drawings
export const VcDrawings = _Drawings

export * from './src'
export * from './src/pin'
export * from './src/point'
export * from './src/polygon'
export * from './src/polyline'
export * from './src/rectangle'
export * from './src/regular'
