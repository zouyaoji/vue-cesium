<script>
import mergeDescriptors from '../../util/mergeDescriptors'
import cmp from '../../mixins/virtualCmp'
export default {
  name: 'imagery-layer',
  mixins: [cmp],
  props: {
    imageryProvider: {
      type: Object
    },
    rectangle: {
      type: Object
    },
    alpha: {
      type: Number,
      default: 1.0
    },
    brightness: {
      type: Number,
      default: 1.0
    },
    contrast: {
      type: Number,
      default: 1.0
    },
    hue: {
      type: Number,
      default: 0.0
    },
    saturation: {
      type: Number,
      default: 1.0
    },
    gamma: {
      type: Number,
      default: 1.0
    },
    splitDirection: {
      type: Number
    },
    minificationFilter: Object,
    magnificationFilter: Object,
    show: {
      type: Boolean,
      default: true
    },
    maximumAnisotropy: Number,
    minimumTerrainLevel: {
      type: Number
    },
    maximumTerrainLevel: {
      type: Number
    },
    cutoutRectangle: Object
  },
  watch: {
    rectangle () {
      this.reload()
    },
    alpha (val) {
      this.originInstance.alpha = val
    },
    brightness (val) {
      this.originInstance.brightness = val
    },
    contrast (val) {
      this.originInstance.contrast = val
    },
    hue (val) {
      this.originInstance.hue = val
    },
    saturation (val) {
      this.originInstance.saturation = val
    },
    gamma (val) {
      this.originInstance.gamma = val
    },
    splitDirection (val) {
      this.originInstance.splitDirection = val
    },
    minificationFilter () {
      this.reload()
    },
    magnificationFilter () {
      this.reload()
    },
    show (val) {
      this.originInstance.show = val
    },
    minimumTerrainLevel (val) {
      this.originInstance.minimumTerrainLevel = val
    },
    maximumTerrainLevel (val) {
      this.originInstance.maximumTerrainLevel = val
    },
    cutoutRectangle (val) {
      this.originInstance.cutoutRectangle = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, rectangle, alpha, brightness, contrast, hue, saturation, gamma, splitDirection,
        minificationFilter, magnificationFilter, show, minimumTerrainLevel, maximumTerrainLevel, cutoutRectangle } = this
      let imageryLayer = new Cesium.ImageryLayer(this.provider || {}, {
        rectangle: rectangle,
        alpha: alpha,
        brightness: brightness,
        contrast: contrast,
        hue: hue,
        saturation: saturation,
        gamma: gamma,
        splitDirection: splitDirection,
        minificationFilter: minificationFilter,
        magnificationFilter: magnificationFilter,
        show: show,
        minimumTerrainLevel: minimumTerrainLevel,
        maximumTerrainLevel: maximumTerrainLevel,
        cutoutRectangle: cutoutRectangle
      })
      window.imageryLayer = this
      return imageryLayer
    },
    mount () {
      const { viewer } = this
      viewer.imageryLayers.add(this.imageryLayer)
    },
    unload () {
      const { viewer } = this
      viewer.imageryLayers.remove(this.imageryLayer)
    },
    refresh () {
      this.unload()
      this.originInstance = this.createCesiumObject()
      this.mount()
    },
    setProvider (provider) {
      if (provider !== this._provider) {
        this._provider = provider
        this.refresh()
      }
    },
    getServices () {
      const vm = this
      return mergeDescriptors(
        cmp.methods.getServices.call(this),
        {
          get imageryLayer () { return vm.imageryLayer },
          get providerContainer () { return vm }
        }
      )
    }
  },
  stubVNode: {
    attrs () {
      return {
        class: this.$options.name
      }
    }
  },
  created () {
    this._geometry = undefined
    Object.defineProperties(this, {
      imageryLayer: {
        enumerable: true,
        get: () => this.$services && this.cesiumObject
      },
      provider: {
        enumerable: true,
        get: () => this.imageryProvider || this._provider
      }
    })
  }
}
</script>
