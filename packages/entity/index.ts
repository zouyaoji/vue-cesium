import { App } from 'vue'
import Entity from './src'

Entity.install = (app: App): void => {
  app.component(Entity.name, Entity)
}

export default Entity
