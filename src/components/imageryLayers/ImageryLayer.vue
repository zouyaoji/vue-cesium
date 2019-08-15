<script>
import mergeDescriptors from '@/util/mergeDescriptors'
import cmp from '@/mixins/virtualCmp'
import { makeRectangle, makeColor } from '@/util/util'
export default {
  name: 'imagery-layer',
  mixins: [cmp],
  props: {
    imageryProvider: Object,
    rectangle: Object,
    alpha: {
      type: Number | Function,
      default: 1.0
    },
    brightness: {
      type: Number | Function,
      default: 1.0
    },
    contrast: {
      type: Number | Function,
      default: 1.0
    },
    hue: {
      type: Number | Function,
      default: 0.0
    },
    saturation: {
      type: Number | Function,
      default: 1.0
    },
    gamma: {
      type: Number | Function,
      default: 1.0
    },
    splitDirection: Number,
    minificationFilter: Number,
    magnificationFilter: Number,
    show: {
      type: Boolean,
      default: true
    },
    maximumAnisotropy: Number,
    minimumTerrainLevel: Number,
    maximumTerrainLevel: Number,
    cutoutRectangle: Object,
    colorToAlpha: Object,
    colorToAlphaThreshold: {
      type: Number,
      default: 0.004
    }
  },
  watch: {
    rectangle () {
      this.reload()
    },
    alpha (val) {
      this.imageryLayer.alpha = val
    },
    brightness (val) {
      this.imageryLayer.brightness = val
    },
    contrast (val) {
      this.imageryLayer.contrast = val
    },
    hue (val) {
      this.imageryLayer.hue = val
    },
    saturation (val) {
      this.imageryLayer.saturation = val
    },
    gamma (val) {
      this.imageryLayer.gamma = val
    },
    splitDirection (val) {
      this.imageryLayer.splitDirection = val
    },
    minificationFilter () {
      this.reload()
    },
    magnificationFilter () {
      this.reload()
    },
    show (val) {
      this.imageryLayer.show = val
    },
    maximumAnisotropy (val) {
      this.imageryLayer.maximumAnisotropy = val
    },
    minimumTerrainLevel (val) {
      this.imageryLayer.minimumTerrainLevel = val
    },
    maximumTerrainLevel (val) {
      this.imageryLayer.maximumTerrainLevel = val
    },
    cutoutRectangle (val) {
      this.imageryLayer.cutoutRectangle = makeRectangle(val)
    },
    colorToAlpha (val) {
      this.imageryLayer.colorToAlpha = makeColor(val)
    },
    colorToAlphaThreshold (val) {
      this.imageryLayer.colorToAlphaThreshold = val
    }
  },
  methods: {
    createCesiumObject () {
      const { rectangle, alpha, brightness, contrast, hue, saturation, gamma, splitDirection, minificationFilter, magnificationFilter,
        show, maximumAnisotropy, minimumTerrainLevel, maximumTerrainLevel, cutoutRectangle, colorToAlpha, colorToAlphaThreshold } = this
      let options = {
        rectangle: makeRectangle(rectangle),
        alpha,
        brightness,
        contrast,
        hue,
        saturation,
        gamma,
        splitDirection,
        minificationFilter,
        magnificationFilter,
        show,
        maximumAnisotropy,
        minimumTerrainLevel,
        maximumTerrainLevel,
        cutoutRectangle: makeRectangle(cutoutRectangle),
        colorToAlpha: makeColor(colorToAlpha),
        colorToAlphaThreshold
      }
      this.removeNullItem(options)
      return new Cesium.ImageryLayer(this.provider || {}, options)
    },
    mount () {
      const { viewer, imageryLayer } = this
      viewer.imageryLayers.add(imageryLayer)
    },
    unload () {
      const { viewer, imageryLayer } = this
      viewer.imageryLayers.remove(imageryLayer)
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
        const listener = this.$listeners['update:imageryProvider']
        if (listener) this.$emit('update:imageryProvider', provider)
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
    this._provider = undefined
    Object.defineProperties(this, {
      imageryLayer: {
        enumerable: true,
        get: () => this.cesiumObject
      },
      provider: {
        enumerable: true,
        get: () => this.imageryProvider || this._provider
      }
    })
  }
}
</script>
