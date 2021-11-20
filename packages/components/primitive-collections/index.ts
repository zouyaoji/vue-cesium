/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2021-11-20 20:44:43
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitive-collections\index.ts
 */
import { App } from 'vue'
import CollectionBillboard from './billboard-collection'
import Billboard from './billboard'
import CollectionLabel from './label-collection'
import Label from './label'
import CollectionPoint from './point-collection'
import Point from './point'
import CollectionPolyline from './polyline-collection'
import Polyline from './polyline'
import CollectionPrimitive from './primitive-collection'
import Polygon from './polygon'
import { SFCWithInstall } from '@vue-cesium/utils/types'

const components = [
  CollectionBillboard,
  CollectionLabel,
  CollectionPoint,
  CollectionPolyline,
  CollectionPrimitive,
  Billboard,
  Label,
  Point,
  Polyline,
  Polygon
]

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

export const VcCollectionBillboard = CollectionBillboard as SFCWithInstall<typeof CollectionBillboard>
export const VcCollectionLabel = CollectionLabel as SFCWithInstall<typeof CollectionLabel>
export const VcCollectionPoint = CollectionPoint as SFCWithInstall<typeof CollectionPoint>
export const VcCollectionPolyline = CollectionPolyline as SFCWithInstall<typeof CollectionPolyline>
export const VcCollectionPrimitive = CollectionPrimitive as SFCWithInstall<typeof CollectionPrimitive>
export const VcBillboard = Billboard as SFCWithInstall<typeof Billboard>
export const VcLabel = Label as SFCWithInstall<typeof Label>
export const VcPoint = Point as SFCWithInstall<typeof Point>
export const VcPolyline = Polyline as SFCWithInstall<typeof Polyline>
export const VcPolygon = Polygon as SFCWithInstall<typeof Polygon>
