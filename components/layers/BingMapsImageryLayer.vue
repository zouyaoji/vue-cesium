<script>
import bindEvents from '../base/bindEvent'
import { ImageryLayerEvents } from '../base/events.js'
import commonMixin from '../base/mixins/common.js'
export default {
  name: 'bingmaps-imagery-layer',
  render (h) {},
  mixins: [commonMixin('imageryLayers')],
  props: {
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
    },
    url: {
      type: String
    },
    bmKey: {
      type: String
    },
    tileProtocol: {
      type: String
    },
    mapStyle: {
      type: String,
      default: 'Aerial'
    },
    culture: {
      type: String
    },
    ellipsoid: {
      type: Object
    },
    tileDiscardPolicy: {
      type: Object
    },
    proxy: {
      type: Object
    }
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
    bmKey () {
      this.reload()
    },
    tileProtocol () {
      this.reload()
    },
    mapStyle () {
      this.reload()
    },
    culture () {
      this.reload()
    },
    ellipsoi () {
      this.reload()
    },
    tileDiscardPolicy () {
      this.reload()
    },
    proxy () {
      this.reload()
    }
  },
  methods: {
    load () {
      const { Cesium, viewer, url, bmKey, tileProtocol, mapStyle, culture, ellipsoid, tileDiscardPolicy, proxy, rectangle, alpha, brightness, contrast, hue,
        saturation, gamma, show, splitDirection, minimumTerrainLevel, maximumTerrainLevel } = this

      if (!Cesium.defined(Cesium.BingMapsImageryProvider)) {
        throw new Cesium.DeveloperError('Your Cesium Package is not included BingMapsImageryProvider!')
      }
      let imageryProvider = new Cesium.BingMapsImageryProvider({
        url: url,
        key: bmKey,
        tileProtocol: tileProtocol,
        mapStyle: mapStyle,
        culture: culture,
        ellipsoid: ellipsoid,
        tileDiscardPolicy: tileDiscardPolicy,
        proxy: proxy
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