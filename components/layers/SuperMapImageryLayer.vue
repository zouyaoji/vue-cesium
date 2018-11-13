<script>
import bindEvents from '../base/bindEvent'
import { ImageryLayerEvents } from '../base/events.js'
import commonMixin from '../base/mixins/common.js'
export default {
  name: 'supermap-imagery-layer',
  render (h) {},
  mixins: [commonMixin('imageryLayers')],
  props: {
    url: {
      type: String
    },
    name: {
      type: String
    },
    minimumLevel: {
      type: Number,
      default: 0
    },
    maximumLevel: {
      type: Number,
      default: 20
    },
    credit: {
      type: String,
      default: 'MapQuest, SuperMap iServer Imagery'
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
    show: {
      type: Boolean,
      default: true
    },
    splitDirection: {
      type: Number
    },
    minimumTerrainLevel: {
      type: Number
    },
    maximumTerrainLevel: {
      type: Number
    }
  },
  watch: {
    rectangle (val) {
      this.originInstance.rectangle = val
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
    show (val) {
      this.originInstance.show = val
    },
    splitDirection (val) {
      this.originInstance.splitDirection = val
    },
    minimumTerrainLevel (val) {
      this.originInstance.minimumTerrainLevel = val
    },
    maximumTerrainLevel (val) {
      this.originInstance.maximumTerrainLevel = val
    },
    url (val) {
      this.reload()
    },
    name (val) {
      this.originInstance.imageryProvider.name = val
    },
    minimumLevel (val) {
      this.reload()
    },
    maximumLevel (val) {
      this.reload()
    },
    credit (val) {
      this.reload()
    }
  },
  methods: {
    load () {
      const { Cesium, viewer, url, name, minimumLevel, maximumLevel, credit, rectangle, alpha, brightness, contrast, hue,
        saturation, gamma, show, splitDirection, minimumTerrainLevel, maximumTerrainLevel } = this

      if (!Cesium.defined(Cesium.SuperMapImageryProvider)) {
        throw new Cesium.DeveloperError('Youer Cesium Package is not included SuperMapImageryProvider!')
      }
      let imageryProvider = new Cesium.SuperMapImageryProvider({
        url: url,
        name: name,
        minimumLevel: minimumLevel,
        maximumLevel: maximumLevel,
        credit: credit
      })

      this.originInstance = new Cesium.ImageryLayer(imageryProvider, {
        rectangle: rectangle,
        alpha: alpha,
        brightness: brightness,
        contrast: contrast,
        hue: hue,
        saturation: saturation,
        gamma: gamma,
        show: show,
        splitDirection: splitDirection,
        minimumTerrainLevel: minimumTerrainLevel,
        maximumTerrainLevel: maximumTerrainLevel
      })
      bindEvents.call(this, imageryProvider, ImageryLayerEvents['imagery-layer'])
      viewer.imageryLayers.add(this.originInstance)
    }
  }
}
</script>

<style>
</style>