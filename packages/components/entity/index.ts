/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2022-01-18 14:53:04
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\entity\index.ts
 */
import { SFCWithInstall } from '@vue-cesium/utils/types'
import { App } from 'vue'
import Entity from './src'

Entity.install = (app: App): void => {
  app.component(Entity.name, Entity)
}

const _Entity = Entity as SFCWithInstall<typeof Entity>

export default _Entity
export const VcEntity = _Entity

export * from './src'
