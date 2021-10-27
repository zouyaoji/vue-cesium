/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-13 09:21:13
 * @LastEditTime: 2021-10-27 09:33:29
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\components\measurements\src\defaultProps.ts
 */
import { getDefaultOptionByProps } from '@vue-cesium/utils/util'
import { PropType } from 'vue'
import { MeasureUnits } from '@vue-cesium/shared'
import {
  actionOptions,
  circleDrawingActionDefault,
  editorOptsDefault,
  labelOptsDefault,
  pointDrawingDefault,
  polygonDrawingDefault,
  polylineDrawingDefault,
  polylineOptsDefault,
  regularDrawingActionDefault,
  segmentDrawingDefault
} from '@vue-cesium/composables/use-drawing/defaultOpts'
import { useDrawingFabProps } from '@vue-cesium/composables/use-drawing/props'

const distanceMeasurementActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-distance'
})

const distanceMeasurementDefault = Object.assign({}, segmentDrawingDefault, {
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

const componentDistanceMeasurementActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-component-distance'
})

const componentDistanceMeasurementDefault = Object.assign({}, distanceMeasurementDefault, {
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

const polylineMeasurementActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-polyline-distance'
})

const polylineMeasurementDefault = Object.assign({}, polylineDrawingDefault, {
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

const horizontalMeasurementActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-horizontal-distance'
})

const horizontalMeasurementDefault = Object.assign({}, polylineMeasurementDefault, {
  dashLineOpts: {
    material: {
      fabric: {
        type: 'PolylineDash',
        uniforms: {
          color: [255, 255, 0, 255]
        }
      }
    },
    depthFailMaterial: {
      fabric: {
        type: 'PolylineDash',
        uniforms: {
          color: [255, 255, 0, 255]
        }
      }
    },
    width: 2
  },
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

const verticalMeasurementActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-vertical-distance'
})

const verticalMeasurementDefault = Object.assign({}, segmentDrawingDefault, {
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

const heightMeasurementActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-height-from-terrain'
})

const heightMeasurementDefault = Object.assign({}, pointDrawingDefault, {
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

const areaMeasurementActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-area'
})

const areaMeasurementDefault = Object.assign({}, polygonDrawingDefault, {
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

const pointMeasurementActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-point-coordinates'
})

const pointMeasurementDefault = Object.assign({}, pointDrawingDefault, {
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

const rectangleMeasurementActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-drawing-rectangle'
})

const rectangleMeasurementDefault = Object.assign({}, areaMeasurementDefault, {
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
  showAngleLabel: false,
  regular: false // regular
})

const regularMeasurementDefault = Object.assign({}, rectangleMeasurementDefault, {
  edge: 6,
  loop: true
})

const circleMeasurementDefault = Object.assign({}, rectangleMeasurementDefault, {
  edge: 360,
  loop: true,
  showDistanceLabel: false,
  showAngleLabel: false
})

const mainFabDefault = Object.assign({}, actionOptions, {
  direction: 'left',
  icon: 'vc-icons-measurement-button',
  activeIcon: 'vc-icons-measurement-button',
  verticalActionsAlign: 'center',
  hideIcon: false,
  persistent: false,
  autoExpand: true,
  hideActionOnClick: false,
  color: 'info'
})

const defaultProps = {
  ...useDrawingFabProps,
  measurements: {
    type: Array as PropType<Array<string>>,
    default: () => [
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
  },
  mainFabOpts: {
    type: Object as PropType<typeof mainFabDefault>,
    default: () => mainFabDefault
  },
  distanceActionOpts: {
    type: Object as PropType<typeof distanceMeasurementActionDefault>,
    default: () => distanceMeasurementActionDefault
  },
  distanceMeasurementOpts: {
    type: Object as PropType<typeof distanceMeasurementDefault>,
    default: () => distanceMeasurementDefault
  },
  componentDistanceActionOpts: {
    type: Object as PropType<typeof componentDistanceMeasurementActionDefault>,
    default: () => componentDistanceMeasurementActionDefault
  },
  componentDistanceMeasurementOpts: {
    type: Object as PropType<typeof componentDistanceMeasurementDefault>,
    default: () => componentDistanceMeasurementDefault
  },
  polylineActionOpts: {
    type: Object as PropType<typeof polylineMeasurementActionDefault>,
    default: () => polylineMeasurementActionDefault
  },
  polylineMeasurementOpts: {
    type: Object as PropType<typeof polylineMeasurementDefault>,
    default: () => polylineMeasurementDefault
  },
  horizontalActionOpts: {
    type: Object as PropType<typeof horizontalMeasurementActionDefault>,
    default: () => horizontalMeasurementActionDefault
  },
  horizontalMeasurementOpts: {
    type: Object as PropType<typeof horizontalMeasurementDefault>,
    default: () => horizontalMeasurementDefault
  },
  verticalActionOpts: {
    type: Object as PropType<typeof verticalMeasurementActionDefault>,
    default: () => verticalMeasurementActionDefault
  },
  verticalMeasurementOpts: {
    type: Object as PropType<typeof verticalMeasurementDefault>,
    default: () => verticalMeasurementDefault
  },
  heightActionOpts: {
    type: Object as PropType<typeof heightMeasurementActionDefault>,
    default: () => heightMeasurementActionDefault
  },
  heightMeasurementOpts: {
    type: Object as PropType<typeof heightMeasurementDefault>,
    default: () => heightMeasurementDefault
  },
  areaActionOpts: {
    type: Object as PropType<typeof areaMeasurementActionDefault>,
    default: () => areaMeasurementActionDefault
  },
  areaMeasurementOpts: {
    type: Object as PropType<typeof areaMeasurementDefault>,
    default: () => areaMeasurementDefault
  },
  pointActionOpts: {
    type: Object as PropType<typeof pointMeasurementActionDefault>,
    default: () => pointMeasurementActionDefault
  },
  pointMeasurementOpts: {
    type: Object as PropType<typeof pointMeasurementDefault>,
    default: () => pointMeasurementDefault
  },
  rectangleActionOpts: {
    type: Object as PropType<typeof rectangleMeasurementActionDefault>,
    default: () => rectangleMeasurementActionDefault
  },
  rectangleMeasurementOpts: {
    type: Object as PropType<typeof rectangleMeasurementDefault>,
    default: () => rectangleMeasurementDefault
  },
  regularActionOpts: {
    type: Object as PropType<typeof regularDrawingActionDefault>,
    default: () => regularDrawingActionDefault
  },
  regularMeasurementOpts: {
    type: Object as PropType<typeof regularMeasurementDefault>,
    default: () => regularMeasurementDefault
  },
  circleActionOpts: {
    type: Object as PropType<typeof circleDrawingActionDefault>,
    default: () => circleDrawingActionDefault
  },
  circleMeasurementOpts: {
    type: Object as PropType<typeof circleMeasurementDefault>,
    default: () => circleMeasurementDefault
  }
}
const defaultOptions = getDefaultOptionByProps(defaultProps)

export {
  defaultProps,
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
