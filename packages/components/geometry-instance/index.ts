/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2022-01-18 14:54:23
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\geometry-instance\index.ts
 */
import type { SFCWithInstall } from '@vue-cesium/utils/types'
import type { App } from 'vue'
import GeometryInstance from './src'

GeometryInstance.install = (app: App): void => {
  app.component(GeometryInstance.name, GeometryInstance)
}

const _GeometryInstance = GeometryInstance as SFCWithInstall<typeof GeometryInstance>

export default _GeometryInstance
export const VcGeometryInstance = _GeometryInstance

export * from './src'
