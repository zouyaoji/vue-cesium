import cmp from '../virtualCmp'

const props = {
  mode: {
    type: Number,
    default: 1
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
    default: true
  }
}
const computed = {}
const methods = {
  async createCesiumObject () {
    const { viewer } = this
    let handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas)
    handler.setInputAction(this.LEFT_CLICK, Cesium.ScreenSpaceEventType.LEFT_CLICK)
    handler.setInputAction(this.MOUSE_MOVE, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
    handler.setInputAction(this.RIGHT_CLICK, Cesium.ScreenSpaceEventType.RIGHT_CLICK)
    this.handler = handler
    return this.polylines
  },
  async mount () {
    return true
  },
  async unload () {
    return true
  }
}

export default {
  mixins: [cmp],
  props,
  computed,
  methods,
  destroyed () {
    const { handler } = this
    if (handler) {
      handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK)
      handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE)
      handler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK)
    }
  }
}
