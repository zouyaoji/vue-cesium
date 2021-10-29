/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-18 10:40:15
 * @LastEditTime: 2021-10-29 11:01:07
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
import { getDefaultOptionByProps } from '@vue-cesium/utils/util'
import { PropType } from 'vue'

const pointDrawingActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-drawing-point'
})

const polylineDrawingActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-drawing-polyline'
})

const polygonDrawingActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-drawing-polygon'
})

const rectangleDrawingActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-drawing-rectangle'
})

const pinDrawingActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-drawing-pin'
})

const pinDrawingDefault = Object.assign({}, pointDrawingDefault, {
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
  autoExpand: true,
  hideActionOnClick: false,
  color: 'info'
})

const defaultProps = {
  ...useDrawingFabProps,
  drawings: {
    type: Array as PropType<Array<string>>,
    default: () => ['pin', 'point', 'polyline', 'polygon', 'rectangle', 'regular', 'circle']
  },
  mainFabOpts: {
    type: Object as PropType<typeof mainFabDefault>,
    default: () => mainFabDefault
  },
  pinActionOpts: {
    type: Object as PropType<typeof pinDrawingActionDefault>,
    default: () => pinDrawingActionDefault
  },
  pinDrawingOpts: {
    type: Object as PropType<typeof pinDrawingDefault>,
    default: () => pinDrawingDefault
  },
  pointActionOpts: {
    type: Object as PropType<typeof pointDrawingActionDefault>,
    default: () => pointDrawingActionDefault
  },
  pointDrawingOpts: {
    type: Object as PropType<typeof pointDrawingDefault>,
    default: () => pointDrawingDefault
  },
  polylineActionOpts: {
    type: Object as PropType<typeof polylineDrawingActionDefault>,
    default: () => polylineDrawingActionDefault
  },
  polylineDrawingOpts: {
    type: Object as PropType<typeof polylineDrawingDefault>,
    default: () => polylineDrawingDefault
  },
  polygonActionOpts: {
    type: Object as PropType<typeof polygonDrawingActionDefault>,
    default: () => polygonDrawingActionDefault
  },
  polygonDrawingOpts: {
    type: Object as PropType<typeof polygonDrawingDefault>,
    default: () => polygonDrawingDefault
  },
  rectangleActionOpts: {
    type: Object as PropType<typeof rectangleDrawingActionDefault>,
    default: () => rectangleDrawingActionDefault
  },
  rectangleDrawingOpts: {
    type: Object as PropType<typeof rectangleDrawingDefault>,
    default: () => rectangleDrawingDefault
  },
  circleActionOpts: {
    type: Object as PropType<typeof circleDrawingActionDefault>,
    default: () => circleDrawingActionDefault
  },
  circleDrawingOpts: {
    type: Object as PropType<typeof circleDrawingDefault>,
    default: () => circleDrawingDefault
  },
  regularActionOpts: {
    type: Object as PropType<typeof regularDrawingActionDefault>,
    default: () => regularDrawingActionDefault
  },
  regularDrawingOpts: {
    type: Object as PropType<typeof regularDrawingDefault>,
    default: () => regularDrawingDefault
  }
}
const defaultOptions = getDefaultOptionByProps(defaultProps)

export {
  defaultProps,
  defaultOptions,
  pointDrawingActionDefault,
  polylineDrawingActionDefault,
  polygonDrawingActionDefault,
  rectangleDrawingActionDefault,
  pinDrawingActionDefault,
  pinDrawingDefault,
  mainFabDefault
}
