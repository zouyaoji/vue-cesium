<script>
import mergeDescriptors from '../../util/mergeDescriptors'
import cmp from '../../mixins/virtualCmp'
export default {
  name: 'imagery-layer',
  mixins: [cmp],
  props: {
    imageryProvider: Object,
    rectangle: Object,
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
    splitDirection: Number,
    minificationFilter: Object,
    magnificationFilter: Object,
    show: {
      type: Boolean,
      default: true
    },
    maximumAnisotropy: Number,
    minimumTerrainLevel: Number,
    maximumTerrainLevel: Number,
    cutoutRectangle: Object
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
    minimumTerrainLevel (val) {
      this.imageryLayer.minimumTerrainLevel = val
    },
    maximumTerrainLevel (val) {
      this.imageryLayer.maximumTerrainLevel = val
    },
    cutoutRectangle (val) {
      this.imageryLayer.cutoutRectangle = val
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, rectangle, alpha, brightness, contrast, hue, saturation, gamma, splitDirection,
        minificationFilter, magnificationFilter, show, minimumTerrainLevel, maximumTerrainLevel, cutoutRectangle } = this
      let options = {
        rectangle,
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
        minimumTerrainLevel,
        maximumTerrainLevel,
        cutoutRectangle
      }
      this.removeNullItem(options)
      return new Cesium.ImageryLayer({})
    },
    mount () {
      // const { viewer, imageryLayer } = this
      // viewer.imageryLayers.add(imageryLayer)
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
      // if (provider !== this._provider) {
      //   this._provider = provider
      //   this.refresh()
      //   const listener = this.$listeners['update:imageryProvider']
      //   if (listener) this.$emit('update:imageryProvider', provider)
      // }
      const { viewer, imageryLayer } = this
      if (provider) {
        const listener = this.$listeners['update:imageryProvider']
        if (listener) this.$emit('update:imageryProvider', provider)
        this.originInstance = viewer.imageryLayers.addImageryProvider(provider)
      } else {
        viewer.imageryLayers.remove(imageryLayer)
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
    // this._provider = undefined
    Object.defineProperties(this, {
      imageryLayer: {
        enumerable: true,
        get: () => this.cesiumObject
      }
      // provider: {
      //   enumerable: true,
      //   get: () => this.imageryProvider || this._provider
      // }
    })
  }
}
</script>
