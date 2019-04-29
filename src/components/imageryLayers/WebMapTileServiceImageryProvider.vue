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
    credit: {
      type: String
    },
    subdomains: {
      type: String | Array,
      default: 'abc'
    },
    token: String
  },
  watch: {
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
        rectangle,
        minimumLevel,
        maximumLevel,
        ellipsoid,
        credit,
        subdomains
      }
      this.removeNullItem(options)
      let imageryProvider = new Cesium.WebMapTileServiceImageryProvider(options)
      return imageryProvider
    }
  }
}
</script>
