import { positionProps } from '@vue-cesium/composables/private/use-position'
import { show } from '@vue-cesium/utils/cesium-props'
import { getDefaultOptionByProps } from '@vue-cesium/utils/util'
import { PropType } from 'vue'
import { MeasureUnits } from '@vue-cesium/shared'

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
    tip: undefined
  }
}

const mainFabDefault = Object.assign({}, actionOptions, {
  direction: 'left',
  icon: 'vc-icons-measure-button',
  activeIcon: 'vc-icons-measure-button',
  verticalActionsAlign: 'center',
  hideIcon: false,
  persistent: false,
  autoExpand: true,
  hideActionOnClick: false,
  color: 'info'
})

const labelOptsDefault = {
  font: '16px Arial Microsoft YaHei sans-serif',
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
        color: [255, 0, 0, 127]
      }
    }
  },
  width: 2,
  arcType: 0,
  ellipsoid: undefined,
  show: true
}

const editorOptsDefault = {
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
  editorOpts: {
    pixelOffset: [4, -4],
    move: Object.assign({}, editorOptsDefault),
    removeAll: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-delete',
    })
  },
  decimals: {
    distance: 2,
    angle: 2
  },
  locale: undefined
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
  })
})

const polylineActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-polyline-distance',
})

const horizontalActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-horizontal-distance',
})

const verticalActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-vertical-distance',
})

const heightActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-height-from-terrain',
})

const areaActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-area',
})

const pointActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-measure-point-coordinates',
})

const polylineMeasurementDefault = {
  show: true,
  measureUnits: new MeasureUnits(),
  drawtip: {
    show: true,
    pixelOffset: [32, 32]
  },
  pointOpts: pointOptsDefault,
  polylineOpts: polylineOptsDefault,
  labelOpts: labelOptsDefault,
  labelsOpts: Object.assign({}, labelOptsDefault, {
    scale: 0.8,
    horizontalOrigin: 1, // left
    verticalOrigin: -1, // tOP,
    pixelOffset: [5, 5]
  }),
  editorOpts: {
    pixelOffset: [4, -4],
    move: Object.assign({}, editorOptsDefault),
    insert: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-insert',
    }),
    remove: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-remove',
    }),
    removeAll: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-delete',
    })
  },
  decimals: {
    distance: 2,
    angle: 2
  },
  showAngleLabel: true,
  locale: undefined
}

const horizontalMeasurementDefault = {
  show: true,
  measureUnits: new MeasureUnits(),
  drawtip: {
    show: true,
    pixelOffset: [32, 32]
  },
  pointOpts: pointOptsDefault,
  polylineOpts: polylineOptsDefault,
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
  editorOpts: {
    pixelOffset: [4, -4],
    move: Object.assign({}, editorOptsDefault),
    insert: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-insert',
    }),
    remove: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-remove',
    }),
    removeAll: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-delete',
    })
  },
  decimals: {
    distance: 2,
    angle: 2
  },
  showAngleLabel: true,
  showDashedLine: true,
  locale: undefined
}

const verticalMeasurementDefault = {
  show: true,
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
  editorOpts: {
    pixelOffset: [4, -4],
    move: Object.assign({}, editorOptsDefault),
    removeAll: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-delete',
    })
  },
  decimals: {
    distance: 2
  },
  locale: undefined
}

const heightMeasurementDefault = {
  show: true,
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
  editorOpts: {
    pixelOffset: [4, -4],
    move: Object.assign({}, editorOptsDefault),
    removeAll: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-delete',
    })
  },
  decimals: {
    distance: 2
  },
  locale: undefined
}

const areaMeasurementDefault = {
  show: true,
  measureUnits: new MeasureUnits(),
  drawtip: {
    show: true,
    pixelOffset: [32, 32]
  },
  pointOpts: pointOptsDefault,
  polylineOpts: Object.assign({}, polylineOptsDefault, {
    depthFailMaterial: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: '#51ff00'
        }
      }
    }
  }),
  polygonOpts: {
    show: true,
    material: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: [255, 165, 0, 125]
        }
      }
    },
    depthFailMaterial: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: [255, 165, 0, 125]
        }
      }
    },
    perPositionHeight: true,
    arcType: undefined
  },
  labelOpts: labelOptsDefault,
  labelsOpts: Object.assign({}, labelOptsDefault, {
    scale: 0.8,
    horizontalOrigin: 1, // left
    verticalOrigin: -1, // tOP,
    pixelOffset: [5, 5]
  }),
  editorOpts: {
    pixelOffset: [4, -4],
    move: Object.assign({}, editorOptsDefault),
    insert: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-insert',
    }),
    remove: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-remove',
    }),
    removeAll: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-delete',
    })
  },
  decimals: {
    area: 2,
    distance: 2,
    angle: 2
  },
  showDistanceLabel: true,
  showAngleLabel: true,
  loop: true,
  locale: undefined
}

const pointMeasurementDefault = {
  show: true,
  measureUnits: new MeasureUnits(),
  drawtip: {
    show: true,
    pixelOffset: [32, 48]
  },
  pointOpts: pointOptsDefault,
  labelOpts: Object.assign({}, labelOptsDefault, {
    horizontalOrigin: 1, // left
    verticalOrigin: 0, // center
    pixelOffset: [10, 0]
  }),
  editorOpts: {
    pixelOffset: [4, -4],
    move: Object.assign({}, editorOptsDefault),
    remove: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-remove',
    })
  },
  decimals: {
    lng: 6,
    lat: 6,
    height: 2,
    slope: 3
  },
  locale: undefined,
  heightReference: 1
}

const clearActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-clear',
  color: 'red'
})

const defaultProps = {
  ...positionProps,
  ...show,
  measurements: {
    type: Array as PropType<Array<string>>,
    default: () => ['distance', 'component-distance', 'polyline', 'horizontal', 'vertical', 'height', 'area', 'point']
  },
  activeColor: {
    type: String,
    default: 'positive'
  },
  editable: {
    type: Boolean,
    default: false
  },
  mainFabOpts: {
    type: Object as PropType<typeof mainFabDefault>,
    default: () => mainFabDefault
  },
  distanceActionOpts: {
    type: Object as PropType<typeof distanceActionDefault>,
    default: () => distanceActionDefault
  },
  distanceMeasurementOpts: {
    type: Object as PropType<typeof distanceMeasurementDefault>,
    default: () => distanceMeasurementDefault
  },
  componentDistanceActionOpts: {
    type: Object as PropType<typeof componentDistanceActionDefault>,
    default: () => componentDistanceActionDefault
  },
  componentDistanceMeasurementOpts: {
    type: Object as PropType<typeof componentDistanceMeasurementDefault>,
    default: () => componentDistanceMeasurementDefault
  },
  polylineActionOpts: {
    type: Object as PropType<typeof polylineActionDefault>,
    default: () => polylineActionDefault
  },
  polylineMeasurementOpts: {
    type: Object as PropType<typeof polylineMeasurementDefault>,
    default: () => polylineMeasurementDefault
  },
  horizontalActionOpts: {
    type: Object as PropType<typeof horizontalActionDefault>,
    default: () => horizontalActionDefault
  },
  horizontalMeasurementOpts: {
    type: Object as PropType<typeof horizontalMeasurementDefault>,
    default: () => horizontalMeasurementDefault
  },
  verticalActionOpts: {
    type: Object as PropType<typeof verticalActionDefault>,
    default: () => verticalActionDefault
  },
  verticalMeasurementOpts: {
    type: Object as PropType<typeof verticalMeasurementDefault>,
    default: () => verticalMeasurementDefault
  },
  heightActionOpts: {
    type: Object as PropType<typeof heightActionDefault>,
    default: () => heightActionDefault
  },
  heightMeasurementOpts: {
    type: Object as PropType<typeof heightMeasurementDefault>,
    default: () => heightMeasurementDefault
  },
  areaActionOpts: {
    type: Object as PropType<typeof areaActionDefault>,
    default: () => areaActionDefault
  },
  areaMeasurementOpts: {
    type: Object as PropType<typeof areaMeasurementDefault>,
    default: () => areaMeasurementDefault
  },
  pointActionOpts: {
    type: Object as PropType<typeof pointActionDefault>,
    default: () => pointActionDefault
  },
  pointMeasurementOpts: {
    type: Object as PropType<typeof pointMeasurementDefault>,
    default: () => pointMeasurementDefault
  },
  clearActionOpts: {
    type: Object as PropType<typeof clearActionDefault>,
    default: () => clearActionDefault
  }
}
const defaultOptions = getDefaultOptionByProps(defaultProps)

export {
  defaultProps,
  defaultOptions,
  mainFabDefault,
  distanceActionDefault,
  distanceMeasurementDefault,
  componentDistanceActionDefault,
  componentDistanceMeasurementDefault,
  polylineActionDefault,
  polylineMeasurementDefault,
  horizontalActionDefault,
  horizontalMeasurementDefault,
  verticalActionDefault,
  verticalMeasurementDefault,
  heightActionDefault,
  heightMeasurementDefault,
  areaActionDefault,
  areaMeasurementDefault,
  pointActionDefault,
  pointMeasurementDefault,
  clearActionDefault
}
