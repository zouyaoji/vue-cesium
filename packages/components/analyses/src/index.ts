/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-06 10:23:09
 * @LastEditTime: 2024-03-27 13:55:06
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-cesium\packages\components\analyses\src\index.ts
 */

import type { VcFabActionRef, VcFabProps, VcFabRef } from '@vue-cesium/components/ui'
import type { AnalysisActionCmpRef, VcDrawingActionInstance, VcDrawingOpts, VcViewshedAnalysisOpts } from '@vue-cesium/utils/drawing-types'
import type { VcActionTooltipProps, VcComponentInternalInstance, VcComponentPublicInstance } from '@vue-cesium/utils/types'
import type { VNode } from 'vue'
import type { VcAnalysesProps } from './defaultProps'
import { useLocale } from '@vue-cesium/composables'
import useDrawingFab from '@vue-cesium/composables/use-drawing/use-drawing-fab'
import { drawingEmit } from '@vue-cesium/utils/emits'
import { camelize } from '@vue-cesium/utils/util'
import { cloneDeep, isEqual, merge } from 'lodash-es'
import { computed, defineComponent, getCurrentInstance, reactive, ref } from 'vue'
import { analysesProps, defaultOptions } from './defaultProps'
import VcAnalysisSightline from './sightline'
import VcAnalysisViewshed from './viewshed'

const emits = {
  ...drawingEmit,
  fabUpdated: (value: boolean) => true,
  clearEvt: (
    e: {
      type: 'clear'
      option: VcActionTooltipProps
    },
    viewer: Cesium.Viewer
  ) => true
}
export default defineComponent({
  name: 'VcAnalyses',
  props: analysesProps,
  emits,
  setup(props: VcAnalysesProps, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'VcAnalyses'
    const { t } = useLocale()

    const options: any = {}
    // computed
    const clearActionOpts = reactive<VcActionTooltipProps>(Object.assign({}, defaultOptions.clearActionOpts, props.clearActionOpts))
    const mainFabOpts = reactive<VcActionTooltipProps & VcFabProps>(Object.assign({}, defaultOptions.mainFabOpts, props.mainFabOpts))

    const fabActionOpts = reactive<VcActionTooltipProps>(Object.assign({}, defaultOptions.fabActionOpts, props.fabActionOpts))

    const sightlineActionOpts = reactive<VcActionTooltipProps>(
      Object.assign({}, defaultOptions.sightlineActionOpts, mergeActionOpts('sightlineActionOpts'))
    )
    const sightlineAnalysisOpts = reactive<VcDrawingOpts>(merge(cloneDeep(defaultOptions.sightlineAnalysisOpts), props.sightlineAnalysisOpts))

    const viewshedActionOpts = reactive<VcActionTooltipProps>(
      Object.assign({}, defaultOptions.viewshedActionOpts, mergeActionOpts('viewshedActionOpts'))
    )
    const viewshedAnalysisOpts = reactive<VcViewshedAnalysisOpts>(merge(cloneDeep(defaultOptions.viewshedAnalysisOpts), props.viewshedAnalysisOpts))

    options.sightlineActionOpts = sightlineActionOpts
    options.sightlineAnalysisOpts = sightlineAnalysisOpts
    options.viewshedActionOpts = viewshedActionOpts
    options.viewshedAnalysisOpts = viewshedAnalysisOpts
    options.clearActionOpts = clearActionOpts

    const drawingActionInstances = computed<Array<VcDrawingActionInstance>>(() => {
      return props.analyses.map(analysisName => ({
        name: analysisName,
        type: 'analysis',
        actionStyle: {
          background: options[`${camelize(analysisName)}ActionOpts`].color,
          color: options[`${camelize(analysisName)}ActionOpts`].textColor
        },
        actionClass: `vc-analysis-${analysisName} vc-analysis-button`,
        actionRef: ref<VcFabActionRef>(null),
        actionOpts: options[`${camelize(analysisName)}ActionOpts`] as VcActionTooltipProps,
        cmp: getDrawingCmp(analysisName),
        cmpRef: ref<AnalysisActionCmpRef>(null!),
        cmpOpts: options[`${camelize(analysisName)}AnalysisOpts`] as VcDrawingOpts,
        tip: options[`${camelize(analysisName)}ActionOpts`].tooltip.tip || t(`vc.analysis.${camelize(analysisName)}.tip`),
        isActive: false
      }))
    })

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

    function mergeActionOpts(actionName) {
      return isEqual(defaultOptions[actionName], props[actionName]) ? fabActionOpts : Object.assign({}, fabActionOpts, props[actionName])
    }

    return useDrawingFab(props, ctx, instance, drawingActionInstances, mainFabOpts, clearActionOpts, 'analysis')?.renderContent
  }
})

export { analysesProps, VcAnalysisSightline, VcAnalysisViewshed }

export type { VcAnalysesProps } from './defaultProps'
export type VcAnalysesEmits = typeof emits
export interface VcAnalysesRef extends VcComponentPublicInstance<VcAnalysesProps> {
  /**
   * Get or set the editingActionName.
   */
  editingActionName?: string
  /**
   * Clear all drawing results.
   */
  clearAll: () => void
  /**
   * End listening for the ScreenSpaceEventHandler events.
   */
  deactivate: () => void
  /**
   * Start listening for ScreenSpaceEventHandler events.
   */
  activate: () => void
  /**
   * Toggle drawing instance.
   * @param drawingOption drawing instance or drawing instance name.
   */
  toggleAction: (drawingOption: VcDrawingActionInstance | string) => void
  /**
   * Get the float action button template reference.
   */
  getFabRef: () => VcFabRef
  /**
   * Get the drawingActionInstance by action name.
   */
  getDrawingActionInstance: (actionName: string) => VcDrawingActionInstance
  /**
   * Get the drawing action instances.
   */
  getDrawingActionInstances: () => Array<VcDrawingActionInstance>
  /**
   * Get the selected drawing action instance.
   */
  getSelectedDrawingActionInstance: () => VcDrawingActionInstance
}

export interface VcAnalysesSlots {
  /**
   * body slot content of the component
   */
  body: (drawingActionInstances: Array<VcDrawingActionInstance>) => VNode[]
}
