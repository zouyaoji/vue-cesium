/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-18 10:40:15
 * @LastEditTime: 2022-01-22 17:20:30
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\drawings\src\defaultProps.ts
 */

import {
  actionOptions,
  billboardOptsDefault,
  circleDrawingActionDefault,
  circleDrawingDefault,
  labelOptsDefault,
  pointDrawingDefault,
  pointOptsDefault,
  polygonDrawingDefault,
  polylineDrawingDefault,
  rectangleDrawingDefault,
  regularDrawingActionDefault,
  regularDrawingDefault
} from '@vue-cesium/composables/use-drawing/defaultOpts'
import { useDrawingFabProps } from '@vue-cesium/composables/use-drawing/props'
import { VcDrawingOpts } from '@vue-cesium/utils/drawing-types'
import type { VcActionTooltipProps } from '@vue-cesium/utils/types'
import { getDefaultOptionByProps } from '@vue-cesium/utils/util'
import type { PropType, ExtractPropTypes } from 'vue'
import { VcFabProps } from '../../ui'

const pointDrawingActionDefault: VcActionTooltipProps = Object.assign({}, actionOptions, {
  icon: 'vc-icons-drawing-point'
})

const polylineDrawingActionDefault: VcActionTooltipProps = Object.assign({}, actionOptions, {
  icon: 'vc-icons-drawing-polyline'
})

const polygonDrawingActionDefault: VcActionTooltipProps = Object.assign({}, actionOptions, {
  icon: 'vc-icons-drawing-polygon'
})

const rectangleDrawingActionDefault: VcActionTooltipProps = Object.assign({}, actionOptions, {
  icon: 'vc-icons-drawing-rectangle'
})

const pinDrawingActionDefault: VcActionTooltipProps = Object.assign({}, actionOptions, {
  icon: 'vc-icons-drawing-pin'
})

const pinDrawingDefault: VcDrawingOpts = Object.assign({}, pointDrawingDefault, {
  pointOpts: Object.assign({}, pointOptsDefault, {
    show: false
  }),
  billboardOpts: billboardOptsDefault,
  labelOpts: Object.assign({}, labelOptsDefault, {
    pixelOffset: [0, -30],
    verticalOrigin: 1
  })
})

const mainFabDefault = Object.assign({}, actionOptions, {
  direction: 'left',
  icon: 'vc-icons-drawing-button',
  activeIcon: 'vc-icons-drawing-button',
  verticalActionsAlign: 'center',
  hideIcon: false,
  persistent: false,
  // modelValue: true,
  hideActionOnClick: false,
  color: 'info'
} as VcFabProps)

export const drawingType = ['pin', 'point', 'polyline', 'polygon', 'rectangle', 'regular', 'circle']

const isValidDrawingType = (drawings: string[]) => {
  let flag = true
  drawings.forEach(drawing => {
    if (!drawingType.includes(drawing)) {
      console.error(`VueCesium: unknown drawing type: ${drawing}`)
      flag = false
    }
  })
  return flag
}

const drawingsProps = {
  ...useDrawingFabProps,
  drawings: {
    type: Array as PropType<Array<'pin' | 'point' | 'polyline' | 'polygon' | 'rectangle' | 'regular' | 'circle'>>,
    default: () => drawingType,
    validator: isValidDrawingType
  },
  mainFabOpts: {
    type: Object as PropType<VcActionTooltipProps & VcFabProps>,
    default: () => mainFabDefault
  },
  pinActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => pinDrawingActionDefault
  },
  pinDrawingOpts: {
    type: Object as PropType<VcDrawingOpts>,
    default: () => pinDrawingDefault
  },
  pointActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => pointDrawingActionDefault
  },
  pointDrawingOpts: {
    type: Object as PropType<VcDrawingOpts>,
    default: () => pointDrawingDefault
  },
  polylineActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => polylineDrawingActionDefault
  },
  polylineDrawingOpts: {
    type: Object as PropType<VcDrawingOpts>,
    default: () => polylineDrawingDefault
  },
  polygonActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => polygonDrawingActionDefault
  },
  polygonDrawingOpts: {
    type: Object as PropType<VcDrawingOpts>,
    default: () => polygonDrawingDefault
  },
  rectangleActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => rectangleDrawingActionDefault
  },
  rectangleDrawingOpts: {
    type: Object as PropType<VcDrawingOpts>,
    default: () => rectangleDrawingDefault
  },
  circleActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => circleDrawingActionDefault
  },
  circleDrawingOpts: {
    type: Object as PropType<VcDrawingOpts>,
    default: () => circleDrawingDefault
  },
  regularActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => regularDrawingActionDefault
  },
  regularDrawingOpts: {
    type: Object as PropType<VcDrawingOpts>,
    default: () => regularDrawingDefault
  }
}

export type VcDrawingsProps = ExtractPropTypes<typeof drawingsProps>
const defaultOptions = getDefaultOptionByProps<VcDrawingsProps>(drawingsProps)

export {
  drawingsProps,
  defaultOptions,
  pointDrawingActionDefault,
  polylineDrawingActionDefault,
  polygonDrawingActionDefault,
  rectangleDrawingActionDefault,
  pinDrawingActionDefault,
  pinDrawingDefault,
  mainFabDefault
}
