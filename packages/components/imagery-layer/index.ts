/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2022-01-18 14:54:37
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\imagery-layer\index.ts
 */
import type { SFCWithInstall } from '@vue-cesium/utils/types'
import type { App } from 'vue'
import ImageryLayer from './src'

ImageryLayer.install = (app: App): void => {
  app.component(ImageryLayer.name, ImageryLayer)
}

const _ImageryLayer = ImageryLayer as SFCWithInstall<typeof ImageryLayer>

export default _ImageryLayer
export const VcLayerImagery = _ImageryLayer

export * from './src'
