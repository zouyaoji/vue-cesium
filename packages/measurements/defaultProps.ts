import { positionProps } from '@vue-cesium/composables/private/use-position'
import { show } from '@vue-cesium/utils/cesium-props'
import { getDefaultOptionByProps } from '@vue-cesium/utils/util'
import { PropType } from 'vue'
import MeasureUnits from './MeasureUnits'

const actionOptions = {
  externalLabel: false,
  label: '',
  labelPosition: 'right',
  hideLabel: false,
  tabindex: undefined,
  disable: false,
  outline: false,
  push: false,
  flat: false,
  unelevated: false,
  padding: undefined,
  color: 'primary',
  textColor: undefined,
  glossy: false,
  labelClass: undefined,
  labelStyle: undefined,
  square: false,
  tooltip: {
    delay: 500,
    anchor: 'bottom middle',
    offset: [0, 20],
    tip: void 0
  }
}

const measurementFabDefault = Object.assign({}, actionOptions, {
  direction: 'left',
  icon: 'vc-icons-measure-button',
  activeIcon: 'vc-icons-measure-button',
  verticalActionsAlign: 'center',
  hideIcon: false,
  persistent: false,
  autoExpand: true,
  hideActionOnClick: false,
  color: 'secondary'
})

const labelOptsDefault = {
  font: '16px 楷体',
  scale: 1,
  fillColor: 'white',
  showBackground: true,
  backgroundColor: { x: 0.165, y: 0.165, z: 0.165, w: 0.8 },
  backgroundPadding: [7, 5],
  horizontalOrigin: 0, // center
  verticalOrigin: 1, // bottom
  pixelOffset: [0, -9],
  disableDepthTestDistance: Number.POSITIVE_INFINITY
}

const pointOptsDefault = {
  color: 'rgb(255,229,0)',
  pixelSize: 8,
  outlineColor: 'black',
  outlineWidth: 1,
  disableDepthTestDistance: Number.POSITIVE_INFINITY
}

const polylineOptsDefault = {
  material: {
    fabric: {
      type: 'Color',
      uniforms: {
        color: '#51ff00'
      }
    }
  },
  depthFailMaterial: {
    fabric: {
      type: 'PolylineDash',
      uniforms: {
        color: 'rgba(255,0,0,0.5)'
      }
    }
  },
  width: 2,
  arcType: 0,
  ellipsoid: void 0
}

const editorOptsDefault = {
  pixelOffset: [4, 4],
  move: {
    icon: 'vc-icons-move',
    size: '24px',
    color: '#1296db',
    background: '#fff',
    round: true,
    flat: false,
    label: undefined,
    stack: false,
    dense: true,
    tooltip: {
      delay: 1000,                  // 鼠标悬浮多久显示提示信息
      anchor: 'bottom middle',      // 提示信息锚点
      offset: [0, 20]               // 提示信息位置偏移
    }
  }
}

const distanceActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-distance',
})

const distanceMeasurementDefault = {
  show: true,
  showComponentLines: false,
  measureUnits: new MeasureUnits(),
  drawtip: {
    show: true,
    pixelOffset: [32, 32]
  },
  pointOpts: pointOptsDefault,
  polylineOpts: polylineOptsDefault,
  labelOpts: Object.assign({}, labelOptsDefault, {
    horizontalOrigin: 1, // left
    verticalOrigin: -1, // top
    pixelOffset: [10, 10]
  }),
  editorOpts: editorOptsDefault
}

const componentDistanceActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-component-distance',
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
  }),
})

const clearActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-clear',
  color: 'red'
})

const defaultProps = {
  ...positionProps,
  ...show,
  measurements: {
    type: Array as PropType<Array<string>>,
    // ['distance', 'component-distance', 'polyline-distance', 'horizontal-distance', 'vertical-distance', 'height-from-terrain', 'area', 'point-coordinates']
    default: () => ['distance', 'component-distance']
  },
  activeColor: {
    type: String,
    default: 'amber'
  },
  editable: {
    type: Boolean,
    default: false
  },

  measurementFabOptions: {
    type: Object as PropType<typeof measurementFabDefault>,
    default: () => measurementFabDefault
  },
  distanceActionOpts: {
    type: Object as PropType<typeof distanceActionDefault>,
    default: () => distanceActionDefault
  },
  distanceMeasurementOpts: {
    type: Object,
    default: () => distanceMeasurementDefault
  },
  componentDistanceActionOpts: {
    type: Object as PropType<typeof componentDistanceActionDefault>,
    default: () => componentDistanceActionDefault
  },
  componentDistanceMeasurementOpts: {
    type: Object,
    default: () => componentDistanceMeasurementDefault
  },
  clearActionOpts: {
    type: Object,
    default: () => clearActionDefault
  }
}
const defaultOptions = getDefaultOptionByProps(defaultProps)

export {
  defaultProps,
  defaultOptions,
  measurementFabDefault,
  distanceActionDefault,
  distanceMeasurementDefault,
  componentDistanceActionDefault,
  componentDistanceMeasurementDefault,
  clearActionDefault
}
