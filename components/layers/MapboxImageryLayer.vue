<script>
import bindEvents from '../base/bindEvent'
import { ImageryLayerEvents } from '../base/events.js'
import commonMixin from '../base/mixins/common.js'
export default {
  name: 'mapbox-imagery-layer',
  render (h) {},
  mixins: [commonMixin('imageryLayers')],
  props: {
    url: {
      type: String
    },
    mapId: {
      type: String
    },
    accessToken: {
      type: String
    },
    format: {
      type: String,
      default: 'png'
    },
    ellipsoid: {
      type: String
    },
    minimumLevel: {
      type: Number
    },
    maximumLevel: {
      type: Number
    },
    rectangle: {
      type: Object
    },
    credit: {
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
    mapId () {
      this.reload()
    },
    accessToken () {
      this.reload()
    },
    format () {
      this.reload()
    },
    ellipsoid () {
      this.reload()
    },
    minimumLevel () {
      this.reload()
    },
    maximumLevel () {
      this.reload()
    },
    rectangle () {
      this.reload()
    },
    credit () {
      this.reload()
    }
  },
  methods: {
    load () {
      const { Cesium, viewer, url, mapId, accessToken, format, ellipsoid, minimumLevel, maximumLevel, rectangle, credit, alpha, brightness,
        contrast, hue, saturation, gamma, show, splitDirection, minimumTerrainLevel, maximumTerrainLevel } = this

      if (!Cesium.defined(Cesium.MapboxImageryProvider)) {
        throw new Cesium.DeveloperError('Your Cesium Package is not included MapboxImageryProvider!')
      }
      let imageryProvider = new Cesium.MapboxImageryProvider({
        url: url,
        mapId: mapId,
        accessToken: accessToken,
        format: format,
        ellipsoid: ellipsoid,
        minimumLevel: minimumLevel,
        maximumLevel: maximumLevel,
        rectangle: rectangle,
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