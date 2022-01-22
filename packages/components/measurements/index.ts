/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2022-01-18 14:54:42
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\index.ts
 */
import { SFCWithInstall } from '@vue-cesium/utils/types'
import { App } from 'vue'
import Measurements from './src'

Measurements.install = (app: App): void => {
  app.component(Measurements.name, Measurements)
}

const _Measurements = Measurements as SFCWithInstall<typeof Measurements>

export default _Measurements
export const VcMeasurements = _Measurements

export * from './src'
