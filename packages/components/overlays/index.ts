/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-11 09:17:23
 * @LastEditTime: 2021-10-28 14:17:38
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\overlays\index.ts
 */
import { App } from 'vue'
import OverlayHtml from './html'
import OverlayHeatmap from './heatmap'
import OverlayEchart from './echart'
import OverlayWind from './wind'
import { SFCWithInstall } from '@vue-cesium/utils/types'

const components = [OverlayHtml, OverlayHeatmap, OverlayEchart, OverlayWind]

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
export const VcOverlayEchart = OverlayEchart as SFCWithInstall<typeof OverlayEchart>
export const VcOverlayWind = OverlayWind as SFCWithInstall<typeof OverlayWind>
