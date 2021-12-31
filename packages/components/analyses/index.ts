/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-31 11:46:30
 * @LastEditTime: 2021-12-31 11:47:41
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\analyses\index.ts
 */
import { App } from 'vue'
import AnalysisFlood from './flood'

import { SFCWithInstall } from '@vue-cesium/utils/types'

const components = [AnalysisFlood]

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
