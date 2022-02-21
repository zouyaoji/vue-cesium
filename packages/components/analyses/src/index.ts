/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2022-01-06 10:23:09
 * @LastEditTime: 2022-02-18 23:45:13
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\analyses\src\index.ts
 */

import { VcActionTooltipProps, VcComponentInternalInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { defineComponent, ExtractPropTypes, getCurrentInstance, reactive, ref, VNode } from 'vue'
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
import {
  AnalysisActionCmpOpts,
  AnalysisActionCmpRef,
  AnalysisActionOpts,
  VcDrawingActionInstance,
  VcDrawingActiveEvt,
  VcDrawingDrawEvt,
  VcDrawingEditorEvt,
  VcDrawingMouseEvt,
  VcDrawingOpts,
  VcViewshedAnalysisOpts
} from '@vue-cesium/utils/drawing-types'
import { camelize } from '@vue-cesium/utils/util'
import { VcFabAction, VcFabProps } from '@vue-cesium/components/ui'
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

// export type { VcAnalysesProps } from './defaultProps'
export type VcAnalysesEmits = typeof emits

export type VcAnalysesProps = {
  /**
   * Specify the position of the VcAnalyses.
   * Default value: bottom-left
   */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left'
  /**
   * An array of two numbers to offset the VcAnalyses horizontally and vertically in pixels.
   * Default value: [0, 0]
   */
  offset?: [number, number]
  /**
   * Specify whether the analysis result is visible.
   * Default value: true
   */
  show?: boolean
  /**
   * Specify the interactive drawing mode, 0 means continuous drawing, and 1 means drawing ends once.
   * Default value: 1
   */
  mode?: number
  /**
   * Specify which analysis instances to load.
   * Default value: ['sightline', 'viewshed']
   */
  analyses?: Array<'sightline' | 'viewshed'>
  /**
   * Specify the color when the analysis instance is activated.
   * Default value: positive
   */
  activeColor?: string
  /**
   * Specify whether the analysis result can be edited.
   * Default value: false
   */
  editable?: boolean
  /**
   * Specify the style options of the floating action button of the VcAnalyses component.
   */
  mainFabOpts?: VcActionTooltipProps & VcFabProps
  /**
   * Specify the style options of the sightline analysis action button.
   */
  sightlineActionOpts?: VcActionTooltipProps
  /**
   * Specify sightline analysis options.
   */
  sightlineAnalysisOpts?: VcDrawingOpts
  /**
   * Specify the style options of the viewshed analysis action button.
   */
  viewshedActionOpts?: VcActionTooltipProps
  /**
   * Specify viewshed analysis options.
   */
  viewshedAnalysisOpts?: VcViewshedAnalysisOpts
  /**
   * Specify the style options of the clear action button.
   */
  clearActionOpts?: VcActionTooltipProps
  /**
   * Triggers before the VcCompass is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcCompass is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcCompass is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the analysis action is actived.
   */
  onActiveEvt?: (evt: VcDrawingActiveEvt, viewer: Cesium.Viewer) => void
  /**
   * 	Triggers when drawing.
   */
  onDrawEvt?: (evt: VcDrawingDrawEvt, viewer: Cesium.Viewer) => void
  /**
   * Triggers when the editor button is clicked.
   */
  onEditorEvt?: (evt: VcDrawingEditorEvt, viewer: Cesium.Viewer) => void
  /**
   * Triggers when the mouse is over or out on the drawing point.
   */
  onMouseEvt?: (evt: VcDrawingMouseEvt, viewer: Cesium.Viewer) => void
  /**
   * Triggers when the floating button is expanded or collapsed.
   */
  onFabUpdated: (value: boolean) => void
}

export type VcAnalysesSlots = {
  /**
   * body slot content of the component
   */
  body: () => VNode[]
}
