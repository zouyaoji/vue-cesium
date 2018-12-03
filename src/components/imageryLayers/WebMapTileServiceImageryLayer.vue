<script>
import bindEvents from '../../util/bindEvent'
import { Events } from '../../util/events.js'
import commonMixin from '../../mixins/common.js'
export default {
  name: 'wmts-imagery-layer',
  render (h) {},
  mixins: [commonMixin('imageryLayers')],
  props: {
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
    format: {
      type: String,
      default: 'image/jpeg'
    },
    layer: {
      type: String
    },
    wmtsStyle: {
      type: String
    },
    tileMatrixSetID: {
      type: String
    },
    tileMatrixLabels: {
      type: Array
    },
    clock: {
      type: Object
    },
    times: {
      type: Object
    },
    dimensions: {
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
    tilingScheme: {
      type: Object
    },
    rectangle: {
      type: Object
    },
    minimumLevel: {
      type: Number,
      default: 0
    },
    maximumLevel: {
      type: Number
    },
    ellipsoid: {
      type: Object
    },
    credit: {
      type: String
    },
    subdomains: {
      type: String | Array,
      default: 'abc'
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
    format () {
      this.reload()
    },
    layer () {
      this.reload()
    },
    wmtsStyle () {
      this.reload()
    },
    tileMatrixSetID () {
      this.reload()
    },
    tileMatrixLabels () {
      this.reload()
    },
    clock () {
      this.reload()
    },
    times () {
      this.reload()
    },
    dimensions () {
      this.reload()
    },
    tileWidth () {
      this.reload()
    },
    tileHeight () {
      this.reload()
    },
    tilingScheme () {
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
    },
    subdomains () {
      this.reload()
    }
  },
  methods: {
    load () {
      const { Cesium, viewer, url, format, wmtsStyle, tileMatrixSetID, tileMatrixLabels, clock, times, dimensions, tileWidth, tileHeight,
        tilingScheme, rectangle, minimumLevel, maximumLevel, ellipsoid, credit, subdomains, alpha, brightness, contrast, hue,
        saturation, gamma, show, splitDirection, minimumTerrainLevel, maximumTerrainLevel } = this

      if (!Cesium.defined(Cesium.WebMapTileServiceImageryProvider)) {
        throw new Cesium.DeveloperError('Your Cesium Package is not included WebMapTileServiceImageryProvider!')
      }
      let imageryProvider = new Cesium.WebMapTileServiceImageryProvider({
        url: url,
        format: format,
        style: wmtsStyle,
        tileMatrixSetID: tileMatrixSetID,
        tileMatrixLabels: tileMatrixLabels,
        clock: clock,
        times: times,
        dimensions: dimensions,
        tileWidth: tileWidth,
        tileHeight: tileHeight,
        tilingScheme: tilingScheme,
        rectangle: rectangle,
        minimumLevel: minimumLevel,
        maximumLevel: maximumLevel,
        ellipsoid: ellipsoid,
        credit: credit,
        subdomains: subdomains
      })

      this.originInstance = new Cesium.ImageryLayer(imageryProvider, {
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