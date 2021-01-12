<script>
import { cutoutRectangle, colorToAlpha } from '../../mixins/mixinProps'
import mergeDescriptors from '../../utils/mergeDescriptors'
import cmp from '../../mixins/virtualCmp'
export default {
  name: 'vc-layer-imagery',
  mixins: [cmp, cutoutRectangle, colorToAlpha],
  props: {
    imageryProvider: Object,
    rectangle: Object,
    alpha: {
      type: [Number, Function],
      default: 1.0
    },
    brightness: {
      type: [Number, Function],
      default: 1.0
    },
    contrast: {
      type: [Number, Function],
      default: 1.0
    },
    hue: {
      type: [Number, Function],
      default: 0.0
    },
    saturation: {
      type: [Number, Function],
      default: 1.0
    },
    gamma: {
      type: [Number, Function],
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
    colorToAlphaThreshold: {
      type: Number,
      default: 0.004
    },
    sortOrder: Number
  },
  methods: {
    /**
     * ImageryLayer 初始化方式较为特殊，这儿覆盖重写 createCesiumObject 方法。
     */
    async createCesiumObject () {
      const { $props, transformProps, requiredArg } = this
      const options = transformProps($props)
      return new Cesium.ImageryLayer(requiredArg || {}, options)
    },
    async mount () {
      const { viewer, imageryLayer, sortOrder } = this
      imageryLayer.sortOrder = sortOrder
      viewer.imageryLayers.add(imageryLayer)
      return !this.viewer.isDestroyed() && viewer.imageryLayers.contains(imageryLayer)
    },
    async unmount () {
      const { viewer, imageryLayer } = this
      return !viewer.isDestroyed() && viewer.imageryLayers.remove(imageryLayer)
    },
    async refresh () {
      return this.unmount().then(() => {
        return this.createCesiumObject().then(cesiumObject => {
          this.originInstance = cesiumObject
          return this.mount()
        })
      })
    },
    setProvider (provider) {
      if (provider !== this._provider) {
        this._provider = provider
        provider && this.refresh()
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
      requiredArg: {
        enumerable: true,
        get: () => this.imageryProvider || this._provider
      }
    })
  }
}
</script>
