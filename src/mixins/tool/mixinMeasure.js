import cmp from '../virtualCmp'
const props = {
  mode: {
    type: Number,
    default: 1
  },
  font: {
    type: String,
    default: '100 20px SimSun'
  },
  fillColor: {
    type: String | Object | Array,
    default: 'WHITE'
  },
  labelStyle: {
    type: Number,
    default: 2
  },
  showBackground: {
    type: Boolean,
    default: true
  },
  backgroundColor: {
    type: String | Object | Array,
    default: 'rgba(38, 38, 38, 0.85)'
  },
  outlineWidth: {
    type: Number,
    default: 1
  },
  outlineColor: {
    type: String | Object | Array,
    default: 'BLUE'
  },
  pixelOffset: {
    type: Object,
    default: () => {
      return { x: 15, y: -20 }
    }
  },
  pointColor: {
    type: String | Object | Array,
    default: 'rgb(255,229,0)'
  },
  pointPixelSize: {
    type: Number,
    default: 8
  },
  polylineColor: {
    type: String | Object | Array,
    default: '#51ff00'
  },
  polylineWidth: {
    type: Number,
    default: 2
  },
  depthTest: {
    type: Boolean,
    default: false
  }
}

const methods = {
  async createCesiumObject () {
    const { viewer } = this
    const handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas)
    handler.setInputAction(this.LEFT_CLICK, Cesium.ScreenSpaceEventType.LEFT_CLICK)
    handler.setInputAction(this.MOUSE_MOVE, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
    handler.setInputAction(this.RIGHT_CLICK, Cesium.ScreenSpaceEventType.RIGHT_CLICK)
    return this.polylines
  },
  async mount () {
    return true
  },
  async unmount () {
    return true
  }
}
const watch = {}

export default {
  mixins: [cmp],
  props,
  watch,
  methods,
  created () {
    Object.defineProperties(this, {
      polyline: {
        enumerable: true,
        get: () => this.polyline
      }
    })
  }
}
