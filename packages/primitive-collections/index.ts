import { App } from 'vue'
import VcCollectionBillboard from './billboard-collection'
import VcBillboard from './billboard'
import VcCollectionLabel from './label-collection'
import VcLabel from './label'
import VcCollectionPoint from './point-collection'
import VcPoint from './point'
import VcCollectionPolyline from './polyline-collection'
import VcPolyline from './polyline'
import VcCollectionPrimitive from './primitive-collection'

const components = [
  VcCollectionBillboard,
  VcCollectionLabel,
  VcCollectionPoint,
  VcCollectionPolyline,
  VcCollectionPrimitive,

  VcBillboard,
  VcLabel,
  VcPoint,
  VcPolyline
]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export {
  VcCollectionBillboard,
  VcCollectionLabel,
  VcCollectionPoint,
  VcCollectionPolyline,
  VcCollectionPrimitive,

  VcBillboard,
  VcLabel,
  VcPoint,
  VcPolyline
}

export default {
  install
}
