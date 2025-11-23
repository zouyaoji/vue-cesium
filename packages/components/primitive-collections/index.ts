import type { SFCWithInstall } from '@vue-cesium/utils/types'
/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2022-01-28 16:20:34
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\primitive-collections\index.ts
 */
import type { App } from 'vue'
import Billboard from './billboard'
import CollectionBillboard from './billboard-collection'
import CumulusCloud from './cloud'
import CollectionCloud from './cloud-collection'
import Label from './label'
import CollectionLabel from './label-collection'
import Point from './point'
import CollectionPoint from './point-collection'
import Polygon from './polygon'
import Polyline from './polyline'
import CollectionPolyline from './polyline-collection'
import CollectionPrimitive from './primitive-collection'

const components = [
  CollectionBillboard,
  CollectionCloud,
  CollectionLabel,
  CollectionPoint,
  CollectionPolyline,
  CollectionPrimitive,
  CumulusCloud,
  Billboard,
  Label,
  Point,
  Polyline,
  Polygon
]

function install(app: App): void {
  components.forEach((cmp) => {
    app.component(cmp.name, cmp)
  })
}

export default {
  install
}

components.forEach((cmp) => {
  cmp['install'] = (app: App): void => {
    app.component(cmp.name, cmp)
  }
})

export const VcCollectionBillboard = CollectionBillboard as SFCWithInstall<typeof CollectionBillboard>
export const VcCollectionCloud = CollectionCloud as SFCWithInstall<typeof CollectionCloud>
export const VcCollectionLabel = CollectionLabel as SFCWithInstall<typeof CollectionLabel>
export const VcCollectionPoint = CollectionPoint as SFCWithInstall<typeof CollectionPoint>
export const VcCollectionPolyline = CollectionPolyline as SFCWithInstall<typeof CollectionPolyline>
export const VcCollectionPrimitive = CollectionPrimitive as SFCWithInstall<typeof CollectionPrimitive>
export const VcBillboard = Billboard as SFCWithInstall<typeof Billboard>
export const VcCumulusCloud = CumulusCloud as SFCWithInstall<typeof CumulusCloud>
export const VcLabel = Label as SFCWithInstall<typeof Label>
export const VcPoint = Point as SFCWithInstall<typeof Point>
export const VcPolyline = Polyline as SFCWithInstall<typeof Polyline>
export const VcPolygon = Polygon as SFCWithInstall<typeof Polygon>

export * from './billboard'
export * from './billboard-collection'
export * from './cloud'
export * from './cloud-collection'
export * from './label'
export * from './label-collection'
export * from './point'
export * from './point-collection'
export * from './polygon'
export * from './polyline'
export * from './polyline-collection'
export * from './primitive-collection'
