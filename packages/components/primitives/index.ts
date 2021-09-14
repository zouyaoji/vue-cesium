import { App } from 'vue'
import PrimitiveClassification from './classification'
import PrimitiveGround from './ground'
import PrimitiveGroundPolyline from './ground-polyline'
import PrimitiveModel from './model'
import Primitive from './primitive'
import PrimitiveTileset from './tileset'
import PrimitiveParticle from './particle'
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
