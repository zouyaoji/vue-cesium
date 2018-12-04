<script>
import imageryProvider from '../../mixins/imageryProvider'
export default {
  name: 'mapbox-imagery-provider',
  mixins: [imageryProvider],
  props: {
    url: {
      type: String
    },
    mapId: {
      type: String
    },
    accessToken: {
      type: String
    },
    format: {
      type: String,
      default: 'png'
    },
    ellipsoid: {
      type: String
    },
    minimumLevel: {
      type: Number
    },
    maximumLevel: {
      type: Number
    },
    rectangle: {
      type: Object
    },
    credit: {
      type: String
    }
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
      let imageryProvider = new Cesium.MapboxImageryProvider({
        url: url,
        mapId: mapId,
        accessToken: accessToken,
        format: format,
        ellipsoid: ellipsoid,
        minimumLevel: minimumLevel,
        maximumLevel: maximumLevel,
        rectangle: rectangle,
        credit: credit
      })
      return imageryProvider
    }
  }
}
</script>
