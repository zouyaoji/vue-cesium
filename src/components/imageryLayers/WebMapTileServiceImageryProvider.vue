<script>
import imageryProvider from '../../mixins/imageryProvider'
export default {
  name: 'wmts-imagery-provider',
  mixins: [imageryProvider],
  props: {
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
      const { Cesium, url, format, wmtsStyle, tileMatrixSetID, tileMatrixLabels, clock, times, dimensions, tileWidth, tileHeight,
        tilingScheme, rectangle, minimumLevel, maximumLevel, ellipsoid, credit, subdomains } = this
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
      return imageryProvider
    }
  }
}
</script>
