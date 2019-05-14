<script>
import imageryProvider from '../../mixins/imageryProvider'
export default {
  name: 'wmts-imagery-provider',
  mixins: [imageryProvider],
  props: {
    url: String,
    format: {
      type: String,
      default: 'image/jpeg'
    },
    layer: String,
    wmtsStyle: String,
    tileMatrixSetID: String,
    tileMatrixLabels: Array,
    clock: Object,
    times: Object,
    dimensions: Object,
    tileWidth: {
      type: Number,
      default: 256
    },
    tileHeight: {
      type: Number,
      default: 256
    },
    tilingScheme: Object,
    rectangle: Object,
    minimumLevel: {
      type: Number,
      default: 0
    },
    maximumLevel: Number,
    ellipsoid: Object,
    credit: String,
    subdomains: {
      type: String | Array,
      default: 'abc'
    },
    token: String
  },
  computed: {
    changeProps () {
      const { url, format, layer, wmtsStyle, tileMatrixSetID, tileMatrixLabels, clock, times, dimensions, tileWidth, tileHeight,
        tilingScheme, rectangle, minimumLevel, maximumLevel, ellipsoid, credit, subdomains, token } = this
      return {
        url,
        format,
        layer,
        wmtsStyle,
        tileMatrixSetID,
        tileMatrixLabels,
        clock,
        times,
        dimensions,
        tileWidth,
        tileHeight,
        tilingScheme,
        rectangle,
        minimumLevel,
        maximumLevel,
        ellipsoid,
        credit,
        subdomains,
        token
      }
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, url, format, layer, wmtsStyle, tileMatrixSetID, tileMatrixLabels, clock, times, dimensions, tileWidth, tileHeight,
        tilingScheme, rectangle, minimumLevel, maximumLevel, ellipsoid, credit, subdomains, token } = this
      let options = {
        url: Cesium.defined(token) ? url + '&tk=' + token : url,
        format,
        layer,
        style: wmtsStyle,
        tileMatrixSetID,
        tileMatrixLabels,
        clock,
        times,
        dimensions,
        tileWidth,
        tileHeight,
        tilingScheme,
        rectangle: rectangle instanceof Cesium.Rectangle || this.isEmptyObj(rectangle) ? rectangle : Cesium.Rectangle.fromDegrees(rectangle.west, rectangle.south, rectangle.east, rectangle.north),
        minimumLevel,
        maximumLevel,
        ellipsoid,
        credit,
        subdomains
      }
      this.removeNullItem(options)
      return new Cesium.WebMapTileServiceImageryProvider(options)
    }
  }
}
</script>
