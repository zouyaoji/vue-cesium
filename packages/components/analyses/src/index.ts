/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-06 10:23:09
 * @LastEditTime: 2022-02-09 17:04:23
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\analyses\src\index.ts
 */

import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, ExtractPropTypes, getCurrentInstance, reactive, ref } from 'vue'
import { useLocale } from '@vue-cesium/composables'
import { clearActionDefault } from '@vue-cesium/composables/use-drawing/defaultOpts'
import {
  defaultOptions,
  analysesProps,
  mainFabDefault,
  sightlineAnalysisActionDefault,
  sightlineAnalysisDefault,
  viewshedAnalysisActionDefault
} from './defaultProps'
import { AnalysisActionCmpOpts, AnalysisActionCmpRef, AnalysisActionOpts, VcDrawingActionInstance } from '@vue-cesium/utils/drawing-types'
import { camelize } from '@vue-cesium/utils/util'
import { VcFabAction } from '@vue-cesium/components/ui'
import useDrawingFab from '@vue-cesium/composables/use-drawing/use-drawing-fab'
import VcAnalysisSightline from './sightline'
import VcAnalysisViewshed from './viewshed'
import { drawingEmit } from '@vue-cesium/utils/emits'

const emits = {
  ...drawingEmit,
  fabUpdated: (value: boolean) => true
}
export default defineComponent({
  name: 'VcAnalyses',
  props: analysesProps,
  emits: emits,
  setup(props: ExtractPropTypes<typeof analysesProps>, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcAnalyses'
    const { t } = useLocale()

    const options: any = {}
    // computed
    const clearActionOpts = reactive<typeof clearActionDefault>(Object.assign({}, defaultOptions.clearActionOpts, props.clearActionOpts))
    const mainFabOpts = reactive<typeof mainFabDefault>(Object.assign({}, defaultOptions.mainFabOpts, props.mainFabOpts))

    const sightlineActionOpts = reactive<typeof sightlineAnalysisActionDefault>(
      Object.assign({}, defaultOptions.sightlineActionOpts, props.sightlineActionOpts)
    )
    const sightlineAnalysisOpts = reactive<typeof sightlineAnalysisDefault>(
      Object.assign({}, defaultOptions.sightlineAnalysisOpts, props.sightlineAnalysisOpts)
    )

    const viewshedActionOpts = reactive<typeof viewshedAnalysisActionDefault>(
      Object.assign({}, defaultOptions.viewshedActionOpts, props.viewshedActionOpts)
    )
    const viewshedAnalysisOpts = reactive<typeof sightlineAnalysisDefault>(
      Object.assign({}, defaultOptions.viewshedAnalysisOpts, props.viewshedAnalysisOpts)
    )

    options.sightlineActionOpts = sightlineActionOpts
    options.sightlineAnalysisOpts = sightlineAnalysisOpts
    options.viewshedActionOpts = viewshedActionOpts
    options.viewshedAnalysisOpts = viewshedAnalysisOpts
    options.clearActionOpts = clearActionOpts

    const drawingActionInstances: Array<VcDrawingActionInstance> = props.analyses.map(analysisName => ({
      name: analysisName,
      type: 'analysis',
      actionStyle: {
        background: options[`${camelize(analysisName)}ActionOpts`].color,
        color: options[`${camelize(analysisName)}ActionOpts`].textColor
      },
      actionClass: `vc-analysis-${analysisName} vc-analysis-button${
        analysisName === (instance.proxy as any).selectedDrawingActionInstance?.name ? ' active' : ''
      }`,
      actionRef: ref<typeof VcFabAction>(null!),
      actionOpts: options[`${camelize(analysisName)}ActionOpts`] as AnalysisActionOpts,
      cmp: getDrawingCmp(analysisName),
      cmpRef: ref<AnalysisActionCmpRef>(null!),
      cmpOpts: options[`${camelize(analysisName)}AnalysisOpts`] as AnalysisActionCmpOpts,
      tip: options[`${camelize(analysisName)}ActionOpts`].tooltip.tip || t(`vc.analysis.${camelize(analysisName)}.tip`),
      isActive: false
    }))

    function getDrawingCmp(name) {
      switch (name) {
        case 'sightline':
          return VcAnalysisSightline
        case 'viewshed':
          return VcAnalysisViewshed
        default:
          return void 0
      }
    }

    return useDrawingFab(props, ctx, instance, drawingActionInstances, mainFabOpts, clearActionOpts, 'analysis')?.renderContent
  }
})

export { VcAnalysisSightline, VcAnalysisViewshed, analysesProps }

export type { VcAnalysesProps } from './defaultProps'
export type VcAnalysesEmits = typeof emits
