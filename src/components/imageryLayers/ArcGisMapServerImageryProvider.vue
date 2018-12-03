<script>
import imageryProvider from '../../mixins/imageryProvider'
export default {
  name: 'arcgis-mapserver-imagery-provider',
  mixins: [imageryProvider],
  props: {
    url: {
      type: String
    },
    token: {
      type: String
    },
    tileDiscardPolicy: {
      type: Object
    },
    usePreCachedTilesIfAvailable: {
      type: Boolean,
      default: true
    },
    layers: {
      type: String
    },
    enablePickFeatures: {
      type: Boolean,
      default: true
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
    minimumLevel: {
      type: Number
    },
    maximumLevel: {
      type: Number
    }
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
      let imageryProvider = new Cesium.ArcGisMapServerImageryProvider({
        url: url,
        token: token,
        tileDiscardPolicy: tileDiscardPolicy,
        usePreCachedTilesIfAvailable: usePreCachedTilesIfAvailable,
        layers: layers,
        enablePickFeatures: enablePickFeatures,
        rectangle: rectangle,
        tilingScheme: tilingScheme,
        ellipsoid: ellipsoid,
        tileWidth: tileWidth,
        tileHeight: tileHeight,
        minimumLevel: minimumLevel,
        maximumLevel: maximumLevel
      })
      return imageryProvider
    }
  }
}
</script>
