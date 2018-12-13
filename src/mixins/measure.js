
import cmp from './virtualCmp'
import mergeDescriptors from '../util/mergeDescriptors'

const props = {}
const computed = {}
const methods = {
  createCesiumObject () {
    this.Cesium = this.$parent.Cesium
    this.viewer = this.$parent.viewer
    const { Cesium, viewer } = this
    this.outlineColorLabel = Cesium.Color.fromCssColorString('rgb(0,0,255)')
    this.backgroundColorLabel = Cesium.Color.fromCssColorString('rgba(42,42,42,0.8)')
    this.backgroundPaddingLabel = new Cesium.Cartesian2(7, 5)
    this.colorPoint = Cesium.Color.fromCssColorString('rgb(255,229,0)')
    this.materialLine = Cesium.Material.fromType('Color')
    this.materialLine.uniforms.color = new Cesium.Color(0.3176470588235294, 1, 0, 1)
    this.materialPolygon = Cesium.Color.fromCssColorString('rgba(255,165,0,0.5)')
    this.pixelOffsetScaleByDistance = new Cesium.NearFarScalar(150, 3, 15000000, 0.5)
    let handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas)
    handler.setInputAction(this.LEFT_CLICK, Cesium.ScreenSpaceEventType.LEFT_CLICK)
    handler.setInputAction(this.MOUSE_MOVE, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
    handler.setInputAction(this.RIGHT_CLICK, Cesium.ScreenSpaceEventType.RIGHT_CLICK)
  },
  mount () {

  },
  unload () {

  },
  getServices () {
    const vm = this
    return mergeDescriptors(cmp.methods.getServices.call(this), {
      get primitiveCollection () {
        return vm.primitiveCollection
      }
    })
  }
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
      primitiveCollection: {
        enumerable: true,
        get: () => this.cesiumObject
      }
    })
  }
}
