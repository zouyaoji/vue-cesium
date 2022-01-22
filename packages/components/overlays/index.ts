/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:23
 * @LastEditTime: 2022-01-19 23:41:32
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\overlays\index.ts
 */
import { App } from 'vue'
import OverlayHtml from './html'
import OverlayHeatmap from './heatmap'
import OverlayEcharts from './echarts'
import OverlayWind from './wind'
import OverlayDynamic from './dynamic'
import { SFCWithInstall } from '@vue-cesium/utils/types'

const components = [OverlayHtml, OverlayHeatmap, OverlayEcharts, OverlayWind, OverlayDynamic]

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

export const VcOverlayHtml = OverlayHtml as SFCWithInstall<typeof OverlayHtml>
export const VcOverlayHeatmap = OverlayHeatmap as SFCWithInstall<typeof OverlayHeatmap>
export const VcOverlayEcharts = OverlayEcharts as SFCWithInstall<typeof OverlayEcharts>
export const VcOverlayWind = OverlayWind as SFCWithInstall<typeof OverlayWind>
export const VcOverlayDynamic = OverlayDynamic as SFCWithInstall<typeof OverlayDynamic>

export * from './dynamic'
export * from './echarts'
export * from './heatmap'
export * from './html'
export * from './wind'
