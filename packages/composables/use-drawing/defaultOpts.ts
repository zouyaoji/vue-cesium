/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-18 13:48:30
 * @LastEditTime: 2021-11-30 10:19:56
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\composables\use-drawing\defaultOpts.ts
 */

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

const pointOptsDefault = {
  show: true,
  color: 'rgb(255,229,0)',
  pixelSize: 8,
  outlineColor: 'black',
  outlineWidth: 1,
  disableDepthTestDistance: Number.POSITIVE_INFINITY
}

const billboardOptsDefault = {
  show: true,
  disableDepthTestDistance: Number.POSITIVE_INFINITY,
  verticalOrigin: 1,
  image: ''
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
  show: true,
  classificationType: 2
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
  arcType: undefined,
  show: true,
  classificationType: 2
}

const labelOptsDefault = {
  show: true,
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
    delay: 1000, // 鼠标悬浮多久显示提示信息
    anchor: 'bottom middle', // 提示信息锚点
    offset: [0, 20] // 提示信息位置偏移
  }
}

const pointDrawingDefault = {
  show: true,
  drawtip: {
    show: true,
    pixelOffset: [32, 32]
  },
  pointOpts: pointOptsDefault,
  editorOpts: {
    delay: 1000,
    hideDelay: 1000,
    pixelOffset: [16, -8],
    move: Object.assign({}, editorOptsDefault),
    remove: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-remove'
    })
  },
  heightReference: 1
}

const segmentDrawingDefault = {
  show: true,
  showComponentLines: false,
  drawtip: {
    show: true,
    pixelOffset: [32, 32]
  },
  pointOpts: pointOptsDefault,
  polylineOpts: polylineOptsDefault,
  editorOpts: {
    pixelOffset: [16, -8],
    delay: 1000,
    hideDelay: 1000,
    move: Object.assign({}, editorOptsDefault),
    removeAll: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-delete'
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
    pixelOffset: [16, -8],
    delay: 1000,
    hideDelay: 1000,
    move: Object.assign({}, editorOptsDefault),
    insert: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-insert'
    }),
    remove: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-remove'
    }),
    removeAll: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-delete'
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
  polygonOpts: polygonOptsDefault,
  editorOpts: {
    pixelOffset: [16, -8],
    delay: 1000,
    hideDelay: 1000,
    move: Object.assign({}, editorOptsDefault),
    insert: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-insert'
    }),
    remove: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-remove'
    }),
    removeAll: Object.assign({}, editorOptsDefault, {
      icon: 'vc-icons-delete'
    })
  },
  loop: true
}

const rectangleDrawingDefault = Object.assign({}, polygonDrawingDefault, {
  pointOpts: Object.assign({}, pointOptsDefault, {
    show: false
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
  edge: 4,
  regular: false // regular
})

const circleDrawingDefault = Object.assign({}, rectangleDrawingDefault, {
  edge: 360,
  regular: true
})

const regularDrawingDefault = Object.assign({}, rectangleDrawingDefault, {
  edge: 6,
  regular: true
})

const clearActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-clear',
  color: 'red'
})

const regularDrawingActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-drawing-regular'
})

const circleDrawingActionDefault = Object.assign({}, actionOptions, {
  icon: 'vc-icons-drawing-circle'
})

export {
  actionOptions,
  clearActionDefault,
  editorOptsDefault,
  pointOptsDefault,
  billboardOptsDefault,
  labelOptsDefault,
  polylineOptsDefault,
  pointDrawingDefault,
  segmentDrawingDefault,
  polylineDrawingDefault,
  polygonDrawingDefault,
  rectangleDrawingDefault,
  circleDrawingDefault,
  circleDrawingActionDefault,
  regularDrawingDefault,
  regularDrawingActionDefault
}
