<script>
import imageryProvider from '../../mixins/imageryProvider'
export default {
  name: 'wms-imagery-provider',
  mixins: [imageryProvider],
  props: {
    url: String,
    format: {
      type: String,
      default: 'image/jpeg'
    },
    layers: String,
    parameters: Object,
    getFeatureInfoParameters: Object,
    enablePickFeatures: {
      type: Boolean,
      default: true
    },
    getFeatureInfoFormats: Array,
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
    minimumLevel: {
      type: Number,
      default: 0
    },
    maximumLevel: Number,
    crs: String,
    srs: String,
    credit: String,
    subdomains: String | Array,
    clock: Object,
    times: Object,
    token: String
  },
  computed: {
    changeProps () {
      const { url, layers, parameters, getFeatureInfoParameters, enablePickFeatures, getFeatureInfoFormats, rectangle, tilingScheme, ellipsoid, tileWidth, tileHeight,
        minimumLevel, maximumLevel, crs, srs, credit, subdomains, clock, times, token } = this
      return {
        url,
        layers,
        parameters,
        getFeatureInfoParameters,
        enablePickFeatures,
        getFeatureInfoFormats,
        rectangle,
        tilingScheme,
        ellipsoid,
        tileWidth,
        tileHeight,
        minimumLevel,
        maximumLevel,
        crs,
        srs,
        credit,
        subdomains,
        clock,
        times,
        token
      }
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, url, layers, parameters, getFeatureInfoParameters, enablePickFeatures, getFeatureInfoFormats, rectangle, tilingScheme, ellipsoid, tileWidth, tileHeight,
        minimumLevel, maximumLevel, crs, srs, credit, subdomains, clock, times, token } = this
      let options = {
        url,
        layers,
        parameters,
        getFeatureInfoParameters,
        enablePickFeatures,
        getFeatureInfoFormats,
        rectangle: rectangle instanceof Cesium.Rectangle || this.isEmptyObj(rectangle) ? rectangle : Cesium.Rectangle.fromDegrees(rectangle.west, rectangle.south, rectangle.east, rectangle.north),
        tilingScheme,
        ellipsoid,
        tileWidth,
        tileHeight,
        minimumLevel,
        maximumLevel,
        crs,
        srs,
        credit,
        subdomains,
        clock,
        times,
        token
      }
      this.removeNullItem(options)
      return new Cesium.WebMapServiceImageryProvider(options)
    }
  }
}
</script>
