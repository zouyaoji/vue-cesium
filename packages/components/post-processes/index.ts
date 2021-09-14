import { App } from 'vue'
import PostProcessStage from './post-process-stage'
import PostProcessStageScan from './post-process-stage-scan'
import PostProcessStageCollection from './post-process-stage-collection'
import { SFCWithInstall } from '@vue-cesium/utils/types'

const components = [PostProcessStage, PostProcessStageScan, PostProcessStageCollection]

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

export const VcPostProcessStage = PostProcessStage as SFCWithInstall<typeof PostProcessStage>
export const VcPostProcessStageScan = PostProcessStageScan as SFCWithInstall<typeof PostProcessStageScan>
export const VcPostProcessStageCollection = PostProcessStageCollection as SFCWithInstall<typeof PostProcessStageCollection>
