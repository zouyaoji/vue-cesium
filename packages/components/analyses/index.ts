/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-31 11:46:30
 * @LastEditTime: 2022-01-06 11:21:50
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\analyses\index.ts
 */
import { App } from 'vue'
import AnalysisFlood from './flood'
import Analyses from './src'

import { SFCWithInstall } from '@vue-cesium/utils/types'

const components = [AnalysisFlood, Analyses]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export default {
  install
}

components.forEach(cmp => {
  cmp['install'] = (app: App): void => {
    app.component(cmp.name, cmp)
  }
})

export const VcAnalysisFlood = AnalysisFlood as SFCWithInstall<typeof AnalysisFlood>
export const VcAnalyses = Analyses as SFCWithInstall<typeof Analyses>
