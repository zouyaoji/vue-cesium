import { positionProps } from '@vue-cesium/composables/private/use-position'
import { show } from '@vue-cesium/utils/cesium-props'
import { getDefaultOptionByProps } from '@vue-cesium/utils/util'
import { PropType } from 'vue'

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
  icon: 'vc-icons-drawing-button',
  activeIcon: 'vc-icons-drawing-button',
  verticalActionsAlign: 'center',
  hideIcon: false,
  persistent: false,
  autoExpand: true,
  hideActionOnClick: false,
  color: 'info'
})

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
  ellipsoid: undefined
}

const polygonOptsDefault = {
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

const pointActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-drawing-point',
})

const polylineActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-drawing-polyline',
})

const polygonActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-drawing-polygon',
})

const pointDrawingDefault = {
  show: true,
  drawtip: {
    show: true,
    pixelOffset: [32, 32]
  },
  pointOpts: pointOptsDefault,
  editorOpts: {
    pixelOffset: [4, -4],
    move: Object.assign({}, editorOptsDefault),
    remove: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-remove',
    })
  }
}

const polylineDrawingDefault = {
  show: true,
  drawtip: {
    show: true,
    pixelOffset: [32, 32]
  },
  pointOpts: pointOptsDefault,
  polylineOpts: polylineOptsDefault,
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
  loop: false
}

const polygonDrawingDefault = {
  show: true,
  drawtip: {
    show: true,
    pixelOffset: [32, 32]
  },
  pointOpts: pointOptsDefault,
  polylineOpts: Object.assign(polylineOptsDefault, {
    depthFailMaterial: {
      fabric: {
        type: 'Color',
        uniforms: {
          color: '#51ff00'
        }
      }
    }
  }),
  polygonOpts: polygonOptsDefault,
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
  loop: true
}


const clearActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-clear',
  color: 'red'
})

const defaultProps = {
  ...positionProps,
  ...show,
  drawings: {
    type: Array as PropType<Array<string>>,
    default: () => ['point', 'polyline', 'polygon']
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
  pointActionOpts: {
    type: Object as PropType<typeof pointActionDefault>,
    default: () => pointActionDefault
  },
  pointDrawingOpts: {
    type: Object as PropType<typeof pointDrawingDefault>,
    default: () => pointDrawingDefault
  },
  polylineActionOpts: {
    type: Object as PropType<typeof polylineActionDefault>,
    default: () => polylineActionDefault
  },
  polylineDrawingOpts: {
    type: Object as PropType<typeof polylineDrawingDefault>,
    default: () => polylineDrawingDefault
  },
  polygonActionOpts: {
    type: Object as PropType<typeof polygonActionDefault>,
    default: () => polygonActionDefault
  },
  polygonDrawingOpts: {
    type: Object as PropType<typeof polygonDrawingDefault>,
    default: () => polygonDrawingDefault
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
  pointActionDefault,
  pointDrawingDefault,
  polylineActionDefault,
  polylineDrawingDefault,
  polygonActionDefault,
  polygonDrawingDefault,
  clearActionDefault
}
