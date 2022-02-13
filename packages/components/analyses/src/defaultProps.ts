/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-18 10:40:15
 * @LastEditTime: 2022-02-13 22:24:38
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
import { VcDrawingOpts, VcViewshedAnalysisOpts } from '@vue-cesium/utils/drawing-types'
import type { VcActionTooltipProps } from '@vue-cesium/utils/types'
import { getDefaultOptionByProps } from '@vue-cesium/utils/util'
import type { ExtractPropTypes, PropType } from 'vue'
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
  ellipsoidOpts: {
    show: true,
    horizontalViewAngle: 90,
    verticalViewAngle: 60,
    color: '#fff'
  }
})

const mainFabDefault = Object.assign({}, actionOptions, {
  direction: 'right',
  icon: 'vc-icons-analysis-button',
  activeIcon: 'vc-icons-analysis-button',
  verticalActionsAlign: 'center',
  hideIcon: false,
  persistent: false,
  // modelValue: true,
  hideActionOnClick: false,
  color: 'info'
} as VcFabProps)

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
export type VcAnalysesProps = ExtractPropTypes<typeof analysesProps>
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
