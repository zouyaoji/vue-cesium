/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2023-06-05 13:16:37
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\packages\components\primitives\index.ts
 */
import { App } from 'vue'
import PrimitiveClassification from './classification'
import PrimitiveGround from './ground'
import PrimitiveGroundPolyline from './ground-polyline'
import PrimitiveModel from './model'
import Primitive from './primitive'
import PrimitiveTileset from './tileset'
import PrimitiveOsmBuildings from './osm-buildings'
import PrimitiveParticle from './particle'
import PrimitiveViewshed from './viewshed'
import PrimitiveTimeDynamicPointCloud from './time-dynamic-point-cloud'
import PrimitiveI3sDataProvider from './i3s'
import PrimitiveVoxel from './voxel'
import PrimitiveCluster from './primitive-cluster'
import { SFCWithInstall } from '@vue-cesium/utils/types'

const components = [
  PrimitiveClassification,
  PrimitiveGround,
  PrimitiveGroundPolyline,
  PrimitiveModel,
  Primitive,
  PrimitiveTileset,
  PrimitiveOsmBuildings,
  PrimitiveI3sDataProvider,
  PrimitiveVoxel,
  PrimitiveTimeDynamicPointCloud,
  PrimitiveParticle,
  PrimitiveCluster
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

export const VcPrimitiveClassification = PrimitiveClassification as SFCWithInstall<typeof PrimitiveClassification>
export const VcPrimitiveGround = PrimitiveGround as SFCWithInstall<typeof PrimitiveGround>
export const VcPrimitiveGroundPolyline = PrimitiveGroundPolyline as SFCWithInstall<typeof PrimitiveGroundPolyline>
export const VcPrimitiveModel = PrimitiveModel as SFCWithInstall<typeof PrimitiveModel>
export const VcPrimitive = Primitive as SFCWithInstall<typeof Primitive>
export const VcPrimitiveTileset = PrimitiveTileset as SFCWithInstall<typeof PrimitiveTileset>
export const VcPrimitiveOsmBuildings = PrimitiveOsmBuildings as SFCWithInstall<typeof PrimitiveOsmBuildings>
export const VcPrimitiveParticle = PrimitiveParticle as SFCWithInstall<typeof PrimitiveParticle>
export const VcViewshed = PrimitiveViewshed as SFCWithInstall<typeof PrimitiveViewshed>
export const VcPrimitiveTimeDynamicPointCloud = PrimitiveTimeDynamicPointCloud as SFCWithInstall<typeof PrimitiveTimeDynamicPointCloud>
export const VcPrimitiveI3sDataProvider = PrimitiveI3sDataProvider as SFCWithInstall<typeof PrimitiveI3sDataProvider>
export const VcPrimitiveVoxel = PrimitiveVoxel as SFCWithInstall<typeof PrimitiveVoxel>
export const VcPrimitiveCluster = PrimitiveCluster as SFCWithInstall<typeof PrimitiveCluster>

export * from './classification'
export * from './ground'
export * from './ground-polyline'
export * from './model'
export * from './osm-buildings'
export * from './particle'
export * from './primitive'
export * from './tileset'
export * from './viewshed'
export * from './time-dynamic-point-cloud'
export * from './i3s'
export * from './voxel'
export * from './primitive-cluster'
