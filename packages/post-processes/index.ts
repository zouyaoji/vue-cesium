import { App } from 'vue'
import VcPostProcessStage from './post-process-stage'
import VcPostProcessStageScan from './post-process-stage-scan'
import VcPostProcessStageCollection from './post-process-stage-collection'

const components = [
  VcPostProcessStage,
  VcPostProcessStageScan,
  VcPostProcessStageCollection
]

const install = (app: App): void => {
  components.forEach(cmp => {
    app.component(cmp.name, cmp)
  })
}

export {
  VcPostProcessStage,
  VcPostProcessStageScan,
  VcPostProcessStageCollection
}

export default {
  install
}
