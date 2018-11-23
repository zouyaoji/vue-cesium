<script>
import bindEvents from '../base/bindEvent'
import { Events } from '../base/events.js'
import commonMixin from '../base/mixins/common.js'
export default {
  name: 'arcgis-imagery-layer',
  render (h) {},
  mixins: [commonMixin('imageryLayers')],
  props: {
    url: {
      type: String
    },
    token: {
      type: String
    },
    tileDiscardPolicy: {
      type: Object
    },
    proxy: {
      type: Object
    },
    usePreCachedTilesIfAvailable: {
      type: Boolean,
      default: true
    },
    layers: {
      type: String
    },
    enablePickFeatures: {
      type: Boolean,
      default: true
    },
    rectangle: {
      type: Object
    },
    tilingScheme: {
      type: Object
    },
    ellipsoid: {
      type: Object
    },
    tileWidth: {
      type: Number,
      default: 256
    },
    tileHeight: {
      type: Number,
      default: 256
    },
    minimumLevel: {
      type: Number
    },
    maximumLevel: {
      type: Number
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
    token () {
      this.reload()
    },
    usePreCachedTilesIfAvailable () {
      this.reload()
    },
    layers () {
      this.reload()
    },
    enablePickFeatures () {
      this.reload()
    },
    rectangle () {
      this.reload()
    },
    tilingScheme () {
      this.reload()
    },
    ellipsoid () {
      this.reload()
    },
    tileWidth () {
      this.reload()
    },
    tileHeight () {
      this.reload()
    },
    minimumLevel () {
      this.reload()
    },
    maximumLevel () {
      this.reload()
    }
  },
  methods: {
    load () {
      const { Cesium, viewer, url, token, tileDiscardPolicy, proxy, usePreCachedTilesIfAvailable, layers, enablePickFeatures, rectangle,
        tilingScheme, ellipsoid, tileWidth, tileHeight, minimumLevel, maximumLevel, alpha, brightness, contrast, hue,
        saturation, gamma, show, splitDirection, minimumTerrainLevel, maximumTerrainLevel } = this

      if (!Cesium.defined(Cesium.ArcGisMapServerImageryProvider)) {
        throw new Cesium.DeveloperError('Your Cesium Package is not included ArcGisMapServerImageryProvider!')
      }
      let imageryProvider = new Cesium.ArcGisMapServerImageryProvider({
        url: url,
        token: token,
        tileDiscardPolicy: tileDiscardPolicy,
        proxy: proxy,
        usePreCachedTilesIfAvailable: usePreCachedTilesIfAvailable,
        layers: layers,
        enablePickFeatures: enablePickFeatures,
        rectangle: rectangle,
        tilingScheme: tilingScheme,
        ellipsoid: ellipsoid,
        tileWidth: tileWidth,
        tileHeight: tileHeight,
        minimumLevel: minimumLevel,
        maximumLevel: maximumLevel
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
      bindEvents.call(this, imageryProvider, Events['imagery-layer-events'])
      viewer.imageryLayers.add(this.originInstance)
    }
  }
}
</script>

<style>
</style>