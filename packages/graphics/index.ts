import { App } from 'vue'
import VcGraphicsBillboard from './billboard'

const components = [VcGraphicsBillboard]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export { VcGraphicsBillboard }

export default {
  install
}
