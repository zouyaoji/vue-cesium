/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:23
 * @LastEditTime: 2023-05-04 22:49:26
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\packages\components\overlays\index.ts
 */
import { App } from 'vue'
import OverlayHtml from './html'
import OverlayHeatmap from './heatmap'
import OverlayEcharts from './echarts'
import OverlayWind from './wind'
import OverlayDynamic from './dynamic'
import OverlayTyphoon from './typhoon'
import { SFCWithInstall } from '@vue-cesium/utils/types'

const components = [OverlayHtml, OverlayHeatmap, OverlayEcharts, OverlayWind, OverlayDynamic, OverlayTyphoon]

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
export const VcOverlayTyphoon = OverlayTyphoon as SFCWithInstall<typeof OverlayTyphoon>

export * from './dynamic'
export * from './echarts'
export * from './heatmap'
export * from './html'
export * from './wind'
export * from './typhoon'
