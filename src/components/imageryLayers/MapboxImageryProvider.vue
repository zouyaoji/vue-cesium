<script>
import imageryProvider from '../../mixins/imageryProvider'
export default {
  name: 'mapbox-imagery-provider',
  mixins: [imageryProvider],
  props: {
    url: String,
    mapId: String,
    accessToken: String,
    format: {
      type: String,
      default: 'png'
    },
    ellipsoid: Object,
    minimumLevel: Number,
    maximumLevel: Number,
    rectangle: Object,
    credit: String
  },
  computed: {
    changeProps () {
      const { url, mapId, accessToken, format, ellipsoid, minimumLevel, maximumLevel, rectangle, credit } = this
      return {
        url, mapId, accessToken, format, ellipsoid, minimumLevel, maximumLevel, rectangle, credit
      }
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, url, mapId, accessToken, format, ellipsoid, minimumLevel, maximumLevel, rectangle, credit } = this
      let options = {
        url,
        mapId,
        accessToken,
        format,
        ellipsoid,
        minimumLevel,
        maximumLevel,
        rectangle: rectangle instanceof Cesium.Rectangle || this.isEmptyObj(rectangle) ? rectangle : Cesium.Rectangle.fromDegrees(rectangle.west, rectangle.south, rectangle.east, rectangle.north),
        credit
      }
      this.removeNullItem(options)
      return new Cesium.MapboxImageryProvider(options)
    }
  }
}
</script>
