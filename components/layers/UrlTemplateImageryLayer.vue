<script>
import bindEvents from '../base/bindEvent'
import { ImageryLayerEvents } from '../base/events.js'
import commonMixin from '../base/mixins/common.js'
export default {
  name: 'urltemplate-imagery-layer',
  render (h) {},
  mixins: [commonMixin('imageryLayers')],
  props: {
    url: {
      type: String
    },
    pickFeaturesUrl: {
      type: String
    },
    urlSchemeZeroPadding: {
      type: Object
    },
    subdomains: {
      type: String
    },
    credit: {
      type: String
    },
    minimumLevel: {
      type: Number,
      default: 0
    },
    maximumLevel: {
      type: Number
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
    hasAlphaChannel: {
      type: Boolean,
      default: true
    },
    getFeatureInfoFormats: {
      type: Array
    },
    enablePickFeatures: {
      type: Boolean,
      default: true
    },
    customTags: {
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
    pickFeaturesUrl () {
      this.reload()
    },
    urlSchemeZeroPadding () {
      this.reload()
    },
    subdomains () {
      this.reload()
    },
    credit () {
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
    hasAlphaChannel () {
      this.reload()
    },
    getFeatureInfoFormats () {
      this.reload()
    },
    enablePickFeatures () {
      this.reload()
    },
    customTags () {
      this.reload()
    }
  },
  methods: {
    load () {
      const { Cesium, viewer, url, pickFeaturesUrl, urlSchemeZeroPadding, subdomains, credit, minimumLevel, maximumLevel, rectangle,
        tilingScheme, ellipsoid, tileWidth, tileHeight, hasAlphaChannel, getFeatureInfoFormats, customTags, enablePickFeatures, alpha,
        brightness, contrast, hue, saturation, gamma, show, splitDirection, minimumTerrainLevel, maximumTerrainLevel } = this

      if (!Cesium.defined(Cesium.UrlTemplateImageryProvider)) {
        throw new Cesium.DeveloperError('Your Cesium Package is not included UrlTemplateImageryProvider!')
      }
      let imageryProvider = new Cesium.UrlTemplateImageryProvider({
        url: url,
        pickFeaturesUrl: pickFeaturesUrl,
        urlSchemeZeroPadding: urlSchemeZeroPadding,
        subdomains: subdomains,
        credit: credit,
        minimumLevel: minimumLevel,
        maximumLevel: maximumLevel,
        rectangle: rectangle,
        tilingScheme: tilingScheme,
        ellipsoid: ellipsoid,
        tileWidth: tileWidth,
        tileHeight: tileHeight,
        hasAlphaChannel: hasAlphaChannel,
        getFeatureInfoFormats: getFeatureInfoFormats,
        customTags: customTags,
        enablePickFeatures: enablePickFeatures
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