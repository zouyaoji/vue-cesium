import { App } from 'vue'
import VcPrimitiveClassification from './classification'
import VcPrimitiveGround from './ground'
import VcPrimitiveGroundPolyline from './ground-polyline'
import VcPrimitiveModel from './model'
import VcPrimitive from './primitive'
import VcPrimitiveTileset from './tileset'
import VcPrimitiveParticle from './particle'

const components = [
  VcPrimitiveClassification,
  VcPrimitiveGround,
  VcPrimitiveGroundPolyline,
  VcPrimitiveModel,
  VcPrimitive,
  VcPrimitiveTileset,
  VcPrimitiveParticle
]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export {
  VcPrimitiveClassification,
  VcPrimitiveGround,
  VcPrimitiveGroundPolyline,
  VcPrimitiveModel,
  VcPrimitive,
  VcPrimitiveTileset,
  VcPrimitiveParticle
}

export default {
  install
}
