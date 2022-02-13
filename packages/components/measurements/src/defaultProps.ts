/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-13 09:21:13
 * @LastEditTime: 2022-02-13 00:14:25
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\src\defaultProps.ts
 */
import { getDefaultOptionByProps } from '@vue-cesium/utils/util'
import type { PropType, ExtractPropTypes } from 'vue'
import { MeasureUnits } from '@vue-cesium/shared'
import {
  actionOptions,
  circleDrawingActionDefault,
  editorOptsDefault,
  labelOptsDefault,
  pointDrawingDefault,
  pointOptsDefault,
  polygonDrawingDefault,
  polylineDrawingDefault,
  polylineOptsDefault,
  polylinePrimitiveOptsDefault,
  regularDrawingActionDefault,
  segmentDrawingDefault
} from '@vue-cesium/composables/use-drawing/defaultOpts'
import { useDrawingFabProps } from '@vue-cesium/composables/use-drawing/props'
import type { VcFabProps } from '../../ui'
import type { VcActionTooltipProps } from '@vue-cesium/utils/types'
import type { VcLabelProps } from '../../primitive-collections'
import type {
  VcComponentDistanceMeasurementOpts,
  VcHorizontalMeasurementOpts,
  VcMeasurementOpts,
  VcPolylineMeasurementOpts,
  VcRegularMeasurementOpts
} from '@vue-cesium/utils/drawing-types'

const distanceMeasurementActionDefault: VcActionTooltipProps = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-distance'
})

const distanceMeasurementDefault: VcMeasurementOpts = Object.assign({}, segmentDrawingDefault, {
  labelOpts: Object.assign({}, labelOptsDefault, {
    horizontalOrigin: 1, // left
    verticalOrigin: -1, // top
    pixelOffset: [10, 10]
  }) as VcLabelProps,
  measureUnits: new MeasureUnits(),
  decimals: {
    distance: 2,
    angle: 2
  },
  locale: undefined
})

const componentDistanceMeasurementActionDefault: VcActionTooltipProps = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-component-distance'
})

const componentDistanceMeasurementDefault: VcComponentDistanceMeasurementOpts = Object.assign({}, distanceMeasurementDefault, {
  showComponentLines: true,
  xLabelOpts: labelOptsDefault,
  xAngleLabelOpts: Object.assign({}, labelOptsDefault, {
    horizontalOrigin: 1, // left
    verticalOrigin: 0, // center
    pixelOffset: [9, 0]
  }),
  yLabelOpts: Object.assign({}, labelOptsDefault, {
    horizontalOrigin: -1, // right
    pixelOffset: [-9, 0]
  }),
  yAngleLabelOpts: Object.assign({}, labelOptsDefault, {
    verticalOrigin: -1, // top
    pixelOffset: [0, 9]
  })
})

const polylineMeasurementActionDefault: VcActionTooltipProps = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-polyline-distance'
})

const polylineMeasurementDefault: VcPolylineMeasurementOpts = Object.assign({}, polylineDrawingDefault, {
  measureUnits: new MeasureUnits(),
  labelOpts: labelOptsDefault,
  labelsOpts: Object.assign({}, labelOptsDefault, {
    scale: 0.8,
    horizontalOrigin: 1, // left
    verticalOrigin: -1, // tOP,
    pixelOffset: [5, 5]
  }),
  decimals: {
    distance: 2,
    angle: 2
  },
  showAngleLabel: true,
  showDistanceLabel: true,
  locale: undefined,
  loop: false
})

const horizontalMeasurementActionDefault: VcActionTooltipProps = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-horizontal-distance'
})

const horizontalMeasurementDefault: VcHorizontalMeasurementOpts = Object.assign({}, polylineMeasurementDefault, {
  dashLineOpts: {
    width: 2
  },
  dashLinePrimitiveOpts: Object.assign({}, polylinePrimitiveOptsDefault, {
    appearance: {
      type: 'PolylineMaterialAppearance',
      options: {
        material: {
          fabric: {
            type: 'PolylineDash',
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
            type: 'PolylineDash',
            uniforms: {
              color: [255, 255, 0, 255]
            }
          }
        }
      }
    }
  }),
  labelOpts: Object.assign({}, labelOptsDefault, {
    horizontalOrigin: 1,
    verticalOrigin: 1,
    pixelOffset: [10, -10]
  }),
  labelsOpts: Object.assign({}, labelOptsDefault, {
    scale: 0.8,
    horizontalOrigin: 1, // left
    verticalOrigin: -1, // tOP,
    pixelOffset: [5, 5]
  }),
  showDashedLine: true
})

const verticalMeasurementActionDefault: VcActionTooltipProps = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-vertical-distance'
})

const verticalMeasurementDefault: VcMeasurementOpts = Object.assign({}, segmentDrawingDefault, {
  labelOpts: Object.assign({}, labelOptsDefault, {
    horizontalOrigin: 1, // left
    verticalOrigin: -1, // top
    pixelOffset: [10, 10]
  }),
  measureUnits: new MeasureUnits(),
  decimals: {
    distance: 2,
    angle: 2
  },
  locale: undefined
})

const heightMeasurementActionDefault: VcActionTooltipProps = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-height-from-terrain'
})

const heightMeasurementDefault: VcMeasurementOpts = Object.assign({}, pointDrawingDefault, {
  polylineOpts: polylineOptsDefault,
  labelOpts: Object.assign({}, labelOptsDefault, {
    horizontalOrigin: 1, // left
    verticalOrigin: -1, // top
    pixelOffset: [10, 10]
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
  measureUnits: new MeasureUnits(),
  decimals: {
    distance: 2
  },
  locale: undefined
})

const areaMeasurementActionDefault: VcActionTooltipProps = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-area'
})

const areaMeasurementDefault: VcPolylineMeasurementOpts = Object.assign({}, polygonDrawingDefault, {
  labelOpts: labelOptsDefault,
  labelsOpts: Object.assign({}, labelOptsDefault, {
    scale: 0.8,
    horizontalOrigin: 1, // left
    verticalOrigin: -1, // tOP,
    pixelOffset: [5, 5]
  }),
  showDistanceLabel: true,
  showAngleLabel: true,
  measureUnits: new MeasureUnits(),
  decimals: {
    area: 2,
    distance: 2,
    angle: 2
  },
  loop: true,
  locale: undefined
})

const pointMeasurementActionDefault: VcActionTooltipProps = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-point-coordinates'
})

const pointMeasurementDefault: VcMeasurementOpts = Object.assign({}, pointDrawingDefault, {
  heightReference: 1, // 0: NONE, 1: CLAMP_TO_GROUND
  measureUnits: new MeasureUnits(),
  drawtip: {
    show: true,
    pixelOffset: [32, 48]
  },
  labelOpts: Object.assign({}, labelOptsDefault, {
    horizontalOrigin: 1, // left
    verticalOrigin: 0, // center
    pixelOffset: [10, 0]
  }),
  decimals: {
    lng: 6,
    lat: 6,
    height: 2,
    slope: 3
  },
  locale: undefined
})

const rectangleMeasurementActionDefault: VcActionTooltipProps = Object.assign({}, actionOptions, {
  icon: 'vc-icons-drawing-rectangle'
})

const rectangleMeasurementDefault: VcRegularMeasurementOpts = Object.assign({}, areaMeasurementDefault, {
  pointOpts: Object.assign({}, pointOptsDefault, {
    show: false
  }),
  drawtip: {
    show: true,
    pixelOffset: [32, 32]
  },
  editorOpts: {
    pixelOffset: [16, -8],
    delay: 1000,
    hideDelay: 1000,
    move: Object.assign({}, editorOptsDefault),
    removeAll: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-delete'
    })
  },
  edge: 4,
  loop: false,
  showAngleLabel: false
})

const regularMeasurementDefault: VcRegularMeasurementOpts = Object.assign({}, rectangleMeasurementDefault, {
  edge: 6,
  loop: true
})

const circleMeasurementDefault: VcRegularMeasurementOpts = Object.assign({}, rectangleMeasurementDefault, {
  edge: 360,
  loop: true,
  showDistanceLabel: false,
  showAngleLabel: false
})

const mainFabDefault = Object.assign({}, actionOptions, {
  direction: 'right',
  icon: 'vc-icons-measurement-button',
  activeIcon: 'vc-icons-measurement-button',
  verticalActionsAlign: 'center',
  hideIcon: false,
  persistent: false,
  // modelValue: true,
  hideActionOnClick: false,
  color: 'info'
} as VcFabProps)

export const measurementType = [
  'distance',
  'component-distance',
  'polyline',
  'horizontal',
  'vertical',
  'height',
  'area',
  'point',
  'rectangle',
  'regular',
  'circle'
]
const isValidMeasurementType = (measurements: string[]) => {
  let flag = true
  measurements.forEach(measurement => {
    if (!measurementType.includes(measurement)) {
      console.error(`VueCesium: unknown measurement type: ${measurement}`)
      flag = false
    }
  })
  return flag
}

const measurementsProps = {
  ...useDrawingFabProps,
  measurements: {
    type: Array as PropType<
      Array<
        'distance' | 'component-distance' | 'polyline' | 'horizontal' | 'vertical' | 'height' | 'area' | 'point' | 'rectangle' | 'regular' | 'circle'
      >
    >,
    default: () => measurementType,
    validator: isValidMeasurementType
  },
  mainFabOpts: {
    type: Object as PropType<VcActionTooltipProps & VcFabProps>,
    default: () => mainFabDefault
  },
  distanceActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => distanceMeasurementActionDefault
  },
  distanceMeasurementOpts: {
    type: Object as PropType<VcMeasurementOpts>,
    default: () => distanceMeasurementDefault
  },
  componentDistanceActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => componentDistanceMeasurementActionDefault
  },
  componentDistanceMeasurementOpts: {
    type: Object as PropType<VcComponentDistanceMeasurementOpts>,
    default: () => componentDistanceMeasurementDefault
  },
  polylineActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => polylineMeasurementActionDefault
  },
  polylineMeasurementOpts: {
    type: Object as PropType<VcPolylineMeasurementOpts>,
    default: () => polylineMeasurementDefault
  },
  horizontalActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => horizontalMeasurementActionDefault
  },
  horizontalMeasurementOpts: {
    type: Object as PropType<VcHorizontalMeasurementOpts>,
    default: () => horizontalMeasurementDefault
  },
  verticalActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => verticalMeasurementActionDefault
  },
  verticalMeasurementOpts: {
    type: Object as PropType<VcMeasurementOpts>,
    default: () => verticalMeasurementDefault
  },
  heightActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => heightMeasurementActionDefault
  },
  heightMeasurementOpts: {
    type: Object as PropType<VcMeasurementOpts>,
    default: () => heightMeasurementDefault
  },
  areaActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => areaMeasurementActionDefault
  },
  areaMeasurementOpts: {
    type: Object as PropType<VcPolylineMeasurementOpts>,
    default: () => areaMeasurementDefault
  },
  pointActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => pointMeasurementActionDefault
  },
  pointMeasurementOpts: {
    type: Object as PropType<VcMeasurementOpts>,
    default: () => pointMeasurementDefault
  },
  rectangleActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => rectangleMeasurementActionDefault
  },
  rectangleMeasurementOpts: {
    type: Object as PropType<VcRegularMeasurementOpts>,
    default: () => rectangleMeasurementDefault
  },
  regularActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => regularDrawingActionDefault
  },
  regularMeasurementOpts: {
    type: Object as PropType<VcRegularMeasurementOpts>,
    default: () => regularMeasurementDefault
  },
  circleActionOpts: {
    type: Object as PropType<VcActionTooltipProps>,
    default: () => circleDrawingActionDefault
  },
  circleMeasurementOpts: {
    type: Object as PropType<VcRegularMeasurementOpts>,
    default: () => circleMeasurementDefault
  }
}
export type VcMeasurementsProps = ExtractPropTypes<typeof measurementsProps>
const defaultOptions = getDefaultOptionByProps<VcMeasurementsProps>(measurementsProps)

export {
  measurementsProps,
  defaultOptions,
  distanceMeasurementActionDefault,
  distanceMeasurementDefault,
  componentDistanceMeasurementActionDefault,
  componentDistanceMeasurementDefault,
  polylineMeasurementActionDefault,
  polylineMeasurementDefault,
  horizontalMeasurementActionDefault,
  horizontalMeasurementDefault,
  verticalMeasurementActionDefault,
  verticalMeasurementDefault,
  heightMeasurementActionDefault,
  heightMeasurementDefault,
  areaMeasurementActionDefault,
  areaMeasurementDefault,
  pointMeasurementActionDefault,
  pointMeasurementDefault,
  rectangleMeasurementActionDefault,
  rectangleMeasurementDefault,
  regularMeasurementDefault,
  circleMeasurementDefault,
  mainFabDefault
}
