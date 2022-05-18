/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-18 10:40:15
 * @LastEditTime: 2022-05-18 22:39:17
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
import { VcDrawingActiveEvt, VcDrawingDrawEvt, VcDrawingEditorEvt, VcDrawingMouseEvt, VcDrawingOpts } from '@vue-cesium/utils/drawing-types'
import type { VcActionTooltipProps, VcComponentInternalInstance, VcReadyObject } from '@vue-cesium/utils/types'
import { getDefaultOptionByProps } from '@vue-cesium/utils/util'
import type { PropType } from 'vue'
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
  }),
  showLabel: true
})

const mainFabDefault = Object.assign({}, actionOptions, {
  direction: 'right',
  icon: 'vc-icons-drawing-button',
  activeIcon: 'vc-icons-drawing-button',
  verticalActionsAlign: 'center',
  hideIcon: false,
  persistent: false,
  modelValue: true,
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

export type VcDrawingsProps = {
  /**
   * Specify the position of the VcDrawings.
   * Default value: bottom-left
   */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left'
  /**
   * An array of two numbers to offset the VcDrawings horizontally and vertically in pixels.
   * Default value: [0, 0]
   */
  offset?: [number, number]
  /**
   * Specify whether the drawing result is visible.
   * Default value: true
   */
  show?: boolean
  /**
   * Specify the interactive drawing mode, 0 means continuous drawing, and 1 means drawing ends once.
   * Default value: 1
   */
  mode?: number
  /**
   * Specify which drawing instances to load.
   * Default value: ['pin', 'point', 'polyline', 'polygon', 'rectangle', 'regular', 'circle']
   */
  drawings?: Array<'pin' | 'point' | 'polyline' | 'polygon' | 'rectangle' | 'regular' | 'circle'>
  /**
   * Specify the color when the drawing instance is activated.
   * Default value: positive
   */
  activeColor?: string
  /**
   * Specify whether the drawing result can be edited.
   * Default value: false
   */
  editable?: boolean
  /**
   * Specify whether the drawing result object is attached to the ground or 3dtiles. Only polyline and polygon objects work.
   * Default value: false
   */
  clampToGround?: boolean
  /**
   * Specify the style options of the floating action button of the VcMeasurements component.
   */
  mainFabOpts?: VcActionTooltipProps & VcFabProps
  /**
   * Specify the style options of the pin drawing action button.
   */
  pinActionOpts?: VcActionTooltipProps
  /**
   * Specify pin drawing options.
   */
  pinDrawingOpts?: VcDrawingOpts
  /**
   * Specify the style options of the point drawing action button.
   */
  pointActionOpts?: VcActionTooltipProps
  /**
   * Specify point drawing options.
   */
  pointDrawingOpts?: VcDrawingOpts
  /**
   * Specify the style options of the polyline drawing action button.
   */
  polylineActionOpts?: VcActionTooltipProps
  /**
   * Specify polyline drawing options.
   */
  polylineDrawingOpts?: VcDrawingOpts
  /**
   * Specify the style options of the polygon drawing action button.
   */
  polygonActionOpts?: VcActionTooltipProps
  /**
   * Specify polygon drawing options.
   */
  polygonDrawingOpts?: VcDrawingOpts
  /**
   * Specify the style options of the rectangle drawing action button.
   */
  rectangleActionOpts?: VcActionTooltipProps
  /**
   * Specify rectangle drawing options.
   */
  rectangleDrawingOpts?: VcDrawingOpts
  /**
   * Specify the style options of the circle drawing action button.
   */
  circleActionOpts?: VcActionTooltipProps
  /**
   * Specify circle drawing options.
   */
  circleDrawingOpts?: VcDrawingOpts
  /**
   * Specify the style options of the regular drawing action button.
   */
  regularActionOpts?: VcActionTooltipProps
  /**
   * Specify regular drawing options.
   */
  regularDrawingOpts?: VcDrawingOpts
  /**
   * Specify the style options of the clear action button.
   */
  clearActionOpts?: VcActionTooltipProps
  /**
   * Triggers before the VcDrawings is loaded.
   */
  onBeforeLoad?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the VcDrawings is successfully loaded.
   */
  onReady?: (readyObject: VcReadyObject) => void
  /**
   * Triggers when the VcDrawings is destroyed.
   */
  onDestroyed?: (instance: VcComponentInternalInstance) => void
  /**
   * Triggers when the measurement action is actived.
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
  onFabUpdated?: (value: boolean) => void
}
