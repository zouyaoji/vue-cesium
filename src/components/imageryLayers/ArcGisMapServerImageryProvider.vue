<script>
import imageryProvider from '../../mixins/imageryProvider'
export default {
  name: 'arcgis-mapserver-imagery-provider',
  mixins: [imageryProvider],
  props: {
    url: String,
    token: String,
    tileDiscardPolicy: Object,
    usePreCachedTilesIfAvailable: {
      type: Boolean,
      default: true
    },
    layers: String,
    enablePickFeatures: {
      type: Boolean,
      default: true
    },
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
    minimumLevel: Number,
    maximumLevel: Number
  },
  watch: {
    url () {
      this.reload()
    },
    token () {
      this.reload()
    },
    tileDiscardPolicy () {
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
    createCesiumObject () {
      const { Cesium, url, token, tileDiscardPolicy, usePreCachedTilesIfAvailable, layers, enablePickFeatures, rectangle,
        tilingScheme, ellipsoid, tileWidth, tileHeight, minimumLevel, maximumLevel } = this
      let options = {
        url,
        token,
        tileDiscardPolicy,
        usePreCachedTilesIfAvailable,
        layers,
        enablePickFeatures,
        rectangle,
        tilingScheme,
        ellipsoid,
        tileWidth,
        tileHeight,
        minimumLevel,
        maximumLevel
      }
      this.removeNullItem(options)
      let imageryProvider = new Cesium.ArcGisMapServerImageryProvider(options)
      return imageryProvider
    }
  }
}
</script>
