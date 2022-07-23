/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-18 10:40:15
 * @LastEditTime: 2022-07-05 11:28:27
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\analyses\src\defaultProps.ts
 */

import {
  actionOptions,
  pointOptsDefault,
  polygonDrawingDefault,
  editorOptsDefault,
  polylineOptsDefault,
  segmentDrawingDefault,
  polylinePrimitiveOptsDefault
} from '@vue-cesium/composables/use-drawing/defaultOpts'
import { useDrawingFabProps } from '@vue-cesium/composables/use-drawing/props'
import {
  VcDrawingActiveEvt,
  VcDrawingDrawEvt,
  VcDrawingEditorEvt,
  VcDrawingMouseEvt,
  VcDrawingOpts,
  VcPointDrawing,
  VcPolylineDrawing,
  VcSegmentDrawing,
  VcViewshedAnalysisOpts
} from '@vue-cesium/utils/drawing-types'
import type { VcActionTooltipProps, VcComponentInternalInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { getDefaultOptionByProps } from '@vue-cesium/utils/util'
import type { PropType } from 'vue'
import type { VcFabProps } from '../../ui'

const sightlineAnalysisActionDefault: VcActionTooltipProps = Object.assign({}, actionOptions, {
  icon: 'vc-icons-analysis-sightline'
})

const sightlineAnalysisDefault: VcDrawingOpts = Object.assign({}, segmentDrawingDefault, {
  polylineOpts: Object.assign({}, polylineOptsDefault, {
    colors: ['#51ff00', 'red']
  }),
  primitiveOpts: Object.assign({}, polylinePrimitiveOptsDefault, {
    appearance: {
      type: 'PolylineColorAppearance'
    },
    depthFailAppearance: {
      type: 'PolylineColorAppearance'
    }
  }),
  sightlineType: 'polyline' // segment polyline
})

const viewshedAnalysisActionDefault: VcActionTooltipProps = Object.assign({}, actionOptions, {
  icon: 'vc-icons-analysis-viewshed'
})

const viewshedAnalysisDefault: VcViewshedAnalysisOpts = Object.assign({}, polygonDrawingDefault, {
  pointOpts: Object.assign({}, pointOptsDefault, {
    show: false
  }),
  polylineOpts: Object.assign({}, polylineOptsDefault, {
    width: 15
  }),
  primitiveOpts: Object.assign({}, polylinePrimitiveOptsDefault, {
    show: false,
    appearance: {
      type: 'PolylineMaterialAppearance',
      options: {
        material: {
          fabric: {
            type: 'PolylineArrow',
            uniforms: {
              color: [255, 255, 0, 255]
            }
          }
        }
      }
    },
    depthFailAppearance: {
      type: 'PolylineMaterialAppearance',
      options: {
        material: {
          fabric: {
            type: 'PolylineArrow',
            uniforms: {
              color: [255, 255, 0, 255]
            }
          }
        }
      }
    }
  }),
  editorOpts: {
    pixelOffset: [16, -8],
    delay: 1000,
    hideDelay: 1000,
    move: Object.assign({}, editorOptsDefault),
    removeAll: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-delete'
    })
  },
  viewshedOpts: {
    fovH: 90,
    fovV: 60,
    offsetHeight: 1.8,
    visibleColor: '#00ff00',
    invisibleColor: '#ff0000',
    showGridLine: true,
    faceColor: 'rgba(255,255,255,0.1)',
    lineColor: 'rgba(255,255,255,0.4)'
  }
})

const mainFabDefault = Object.assign({}, actionOptions, {
  direction: 'right',
  icon: 'vc-icons-analysis-button',
  activeIcon: 'vc-icons-analysis-button',
  verticalActionsAlign: 'center',
  hideIcon: false,
  persistent: false,
  modelValue: true,
  hideActionOnClick: false,
  color: 'info'
} as VcActionTooltipProps & VcFabProps)

export const analysisType = ['sightline', 'viewshed']

const isValidAnalysisType = (drawings: string[]) => {
  let flag = true
  drawings.forEach(drawing => {
    if (!analysisType.includes(drawing)) {
      console.error(`VueCesium: unknown analysis type: ${drawing}`)
      flag = false
    }
  })
  return flag
}

const analysesProps = {
  ...useDrawingFabProps,
  analyses: {
    type: Array as PropType<Array<'sightline' | 'viewshed'>>,
    default: () => analysisType,
    validator: isValidAnalysisType
  },
  mainFabOpts: {
    type: Object as PropType<VcActionTooltipProps & VcFabProps>,
    default: () => mainFabDefault
  },
  sightlineActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => sightlineAnalysisActionDefault
  },
  sightlineAnalysisOpts: {
    type: Object as PropType<VcDrawingOpts>,
    default: () => sightlineAnalysisDefault
  },
  viewshedActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => viewshedAnalysisActionDefault
  },
  viewshedAnalysisOpts: {
    type: Object as PropType<VcViewshedAnalysisOpts>,
    default: () => viewshedAnalysisDefault
  }
}
const defaultOptions = getDefaultOptionByProps<VcAnalysesProps>(analysesProps)

export {
  analysesProps,
  defaultOptions,
  sightlineAnalysisActionDefault,
  sightlineAnalysisDefault,
  viewshedAnalysisActionDefault,
  viewshedAnalysisDefault,
  mainFabDefault
}

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
   * Triggers before the VcAnalyses is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcAnalyses is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcAnalyses is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the analysis action is actived.
   */
  onActiveEvt?: (evt: VcDrawingActiveEvt, viewer: Cesium.Viewer) => void
  /**
   * 	Triggers when drawing.
   */
  onDrawEvt?: (evt: VcDrawingDrawEvt<VcPolylineDrawing | VcSegmentDrawing | VcPointDrawing>, viewer: Cesium.Viewer) => void
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
  onFabUpdated?: (value: boolean) => void
}
