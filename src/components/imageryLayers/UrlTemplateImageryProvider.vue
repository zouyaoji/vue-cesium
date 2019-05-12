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
  computed: {
    changeProps () {
      const { url, pickFeaturesUrl, urlSchemeZeroPadding, subdomains, credit, minimumLevel, maximumLevel, rectangle,
        tilingScheme, ellipsoid, tileWidth, tileHeight, hasAlphaChannel, getFeatureInfoFormats, customTags, enablePickFeatures } = this
      return {
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
        rectangle: rectangle instanceof Cesium.Rectangle || this.isEmptyObj(rectangle) ? rectangle : Cesium.Rectangle.fromDegrees(rectangle.west, rectangle.south, rectangle.east, rectangle.north),
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
      return new Cesium.UrlTemplateImageryProvider(options)
    }
  }
}
</script>
