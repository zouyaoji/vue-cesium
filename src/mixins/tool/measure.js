import cmp from '../virtualCmp'

const props = {
  mode: {
    type: Number,
    default: 1
  },
  font: {
    type: String,
    default: '100 20px SimSun'
  }
}
const computed = {}
const methods = {
  createCesiumObject () {
    const { viewer } = this
    this.outlineColorLabel = Cesium.Color.fromCssColorString('rgb(0,0,255)')
    this.colorPoint = Cesium.Color.fromCssColorString('rgb(255,229,0)')
    this.materialPolygon = Cesium.Color.fromCssColorString('rgba(255,165,0,0.25)')
    this.disableDepthTestDistance = Number.POSITIVE_INFINITY
    this.pixelOffset = new Cesium.Cartesian2(10, -15)
    let handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas)
    handler.setInputAction(this.LEFT_CLICK, Cesium.ScreenSpaceEventType.LEFT_CLICK)
    handler.setInputAction(this.MOUSE_MOVE, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
    handler.setInputAction(this.RIGHT_CLICK, Cesium.ScreenSpaceEventType.RIGHT_CLICK)
  },
  mount () {},
  unload () {}
}
const watch = {}

export default {
  mixins: [cmp],
  props,
  computed,
  watch,
  methods,
  stubVNode: {
    attrs () {
      return {
        class: this.$options.name
      }
    }
  },
  created () {
    Object.defineProperties(this, {
      polyline: {
        enumerable: true,
        get: () => this.polyline
      }
    })
  }
}
