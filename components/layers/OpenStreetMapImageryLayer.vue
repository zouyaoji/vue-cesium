<script>
import bindEvents from '../base/bindEvent'
import { ImageryLayerEvents } from '../base/events.js'
import commonMixin from '../base/mixins/common.js'
export default {
  name: 'openstreetmap-imagery-layer',
  render (h) {},
  mixins: [commonMixin('imageryLayers')],
  props: {
    url: {
      type: String,
      default: 'https://a.tile.openstreetmap.org'
    },
    fileExtension: {
      type: String,
      default: 'png'
    },
    rectangle: {
      type: Object
    },
    minimumLevel: {
      type: Number
    },
    maximumLevel: {
      type: Number
    },
    ellipsoid: {
      type: Object
    },
    credit: {
      type: String,
      default: 'MapQuest, Open Street Map and contributors, CC-BY-SA'
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
    url () {
      this.reload()
    },
    fileExtension () {
      this.reload()
    },
    rectangle () {
      this.reload()
    },
    minimumLevel () {
      this.reload()
    },
    maximumLevel () {
      this.reload()
    },
    ellipsoid () {
      this.reload()
    },
    credit () {
      this.reload()
    }
  },
  methods: {
    load () {
      const { Cesium, viewer, url, fileExtension, rectangle, minimumLevel, maximumLevel, ellipsoid, credit, alpha,
        brightness, contrast, hue, saturation, gamma, show, splitDirection, minimumTerrainLevel, maximumTerrainLevel } = this

      if (!Cesium.defined(Cesium.OpenStreetMapImageryLayer)) {
        throw new Cesium.DeveloperError('Your Cesium Package is not included OpenStreetMapImageryLayer!')
      }
      let imageryProvider = new Cesium.OpenStreetMapImageryLayer({
        url: url,
        fileExtension: fileExtension,
        rectangle: rectangle,
        minimumLevel: minimumLevel,
        maximumLevel: maximumLevel,
        ellipsoid: ellipsoid,
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