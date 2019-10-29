<script>
import mergeDescriptors from '../../util/mergeDescriptors'
import cmp from '../../mixins/virtualCmp'
import { makeRectangle, makeColor } from '../../util/util'
export default {
  name: 'vc-imagery-layer',
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
  methods: {
    async createCesiumObject () {
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
    async mount () {
      const { viewer, imageryLayer, setPropWatchers } = this
      setPropWatchers(true)
      return viewer.imageryLayers.add(imageryLayer)
    },
    async unmount () {
      const { viewer, imageryLayer, setPropWatchers } = this
      setPropWatchers(false)
      return viewer.imageryLayers.remove(imageryLayer)
    },
    async refresh () {
      this.unload()
      this.originInstance = await this.createCesiumObject()
      return this.mount().then(() => {
        this._mounted = true
        return true
      })
    },
    setProvider (provider) {
      if (provider !== this._provider) {
        this._provider = provider
        this.refresh()
        const listener = this.$listeners['update:imageryProvider']
        if (listener) this.$emit('update:imageryProvider', provider)
        return true
      }
      return false
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
    this.cesiumClass = 'ImageryLayer'
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
