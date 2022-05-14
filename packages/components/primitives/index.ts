/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2022-05-10 15:21:14
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitives\index.ts
 */
import { App } from 'vue'
import PrimitiveClassification from './classification'
import PrimitiveGround from './ground'
import PrimitiveGroundPolyline from './ground-polyline'
import PrimitiveModel from './model'
import Primitive from './primitive'
import PrimitiveTileset from './tileset'
import PrimitiveParticle from './particle'
import PrimitiveViewshed from './viewshed'
import { SFCWithInstall } from '@vue-cesium/utils/types'

const components = [PrimitiveClassification, PrimitiveGround, PrimitiveGroundPolyline, PrimitiveModel, Primitive, PrimitiveTileset, PrimitiveParticle]

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

export const VcPrimitiveClassification = PrimitiveClassification as SFCWithInstall<typeof PrimitiveClassification>
export const VcPrimitiveGround = PrimitiveGround as SFCWithInstall<typeof PrimitiveGround>
export const VcPrimitiveGroundPolyline = PrimitiveGroundPolyline as SFCWithInstall<typeof PrimitiveGroundPolyline>
export const VcPrimitiveModel = PrimitiveModel as SFCWithInstall<typeof PrimitiveModel>
export const VcPrimitive = Primitive as SFCWithInstall<typeof Primitive>
export const VcPrimitiveTileset = PrimitiveTileset as SFCWithInstall<typeof PrimitiveTileset>
export const VcPrimitiveParticle = PrimitiveParticle as SFCWithInstall<typeof PrimitiveParticle>
export const VcViewshed = PrimitiveViewshed as SFCWithInstall<typeof PrimitiveViewshed>

export * from './classification'
export * from './ground'
export * from './ground-polyline'
export * from './model'
export * from './particle'
export * from './primitive'
export * from './tileset'
export * from './viewshed'
