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
  watch: {
    url () {
      this.reload()
    },
    mapId () {
      this.reload()
    },
    accessToken () {
      this.reload()
    },
    format () {
      this.reload()
    },
    ellipsoid () {
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
    credit () {
      this.reload()
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
        rectangle,
        credit
      }
      this.removeNullItem(options)
      let imageryProvider = new Cesium.MapboxImageryProvider(options)
      return imageryProvider
    }
  }
}
</script>
