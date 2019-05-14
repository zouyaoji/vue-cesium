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
  computed: {
    changeProps () {
      const { url, token, tileDiscardPolicy, usePreCachedTilesIfAvailable, layers, enablePickFeatures, rectangle,
        tilingScheme, ellipsoid, tileWidth, tileHeight, minimumLevel, maximumLevel } = this
      return {
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
        rectangle: rectangle instanceof Cesium.Rectangle || this.isEmptyObj(rectangle) ? rectangle : Cesium.Rectangle.fromDegrees(rectangle.west, rectangle.south, rectangle.east, rectangle.north),
        tilingScheme,
        ellipsoid,
        tileWidth,
        tileHeight,
        minimumLevel,
        maximumLevel
      }
      this.removeNullItem(options)
      return new Cesium.ArcGisMapServerImageryProvider(options)
    }
  }
}
</script>
