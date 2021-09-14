import { SFCWithInstall } from '@vue-cesium/utils/types'
import { App } from 'vue'
import Entity from './src'

Entity.install = (app: App): void => {
  app.component(Entity.name, Entity)
}

const _Entity = Entity as SFCWithInstall<typeof Entity>

export default _Entity
export const VcEntity = _Entity
