<script>
import imageryProvider from '../../mixins/imageryProvider'
export default {
  name: 'urltemplate-imagery-provider',
  mixins: [imageryProvider],
  props: {
    url: String,
    pickFeaturesUrl: String,
    urlSchemeZeroPadding: Object,
    subdomains: String,
    credit: String,
    minimumLevel: {
      type: Number,
      default: 0
    },
    maximumLevel: Number,
    rectangle: Object,
    tilingScheme: Object,
    ellipsoid: Object,
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
    getFeatureInfoFormats: Array,
    enablePickFeatures: {
      type: Boolean,
      default: true
    },
    customTags: Object
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
      let options = {
        url,
        pickFeaturesUrl,
        urlSchemeZeroPadding,
        subdomains,
        credit,
        minimumLevel,
        maximumLevel,
        rectangle,
        tilingScheme,
        ellipsoid,
        tileWidth,
        tileHeight,
        hasAlphaChannel,
        getFeatureInfoFormats,
        customTags,
        enablePickFeatures
      }
      this.removeNullItem(options)
      let imageryProvider = new Cesium.UrlTemplateImageryProvider(options)
      return imageryProvider
    }
  }
}
</script>
