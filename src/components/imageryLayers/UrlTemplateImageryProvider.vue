<script>
import imageryProvider from '../../mixins/imageryProvider'
export default {
  name: 'urltemplate-imagery-provider',
  mixins: [imageryProvider],
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
    }
  },
  watch: {
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
    createCesiumObject () {
      const { Cesium, url, pickFeaturesUrl, urlSchemeZeroPadding, subdomains, credit, minimumLevel, maximumLevel, rectangle,
        tilingScheme, ellipsoid, tileWidth, tileHeight, hasAlphaChannel, getFeatureInfoFormats, customTags, enablePickFeatures } = this
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
      return imageryProvider
    }
  }
}
</script>
