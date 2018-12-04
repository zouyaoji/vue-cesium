<script>
import imageryProvider from '../../mixins/imageryProvider'
export default {
  name: 'singletile-imagery-provider',
  mixins: [imageryProvider],
  props: {
    url: {
      type: String,
      default: 'https://a.tile.openstreetmap.org'
    },
    rectangle: {
      type: Object
    },
    credit: {
      type: String
    },
    ellipsoid: {
      type: Object
    }
  },
  watch: {
    url () {
      this.reload()
    },
    rectangle () {
      this.reload()
    },
    credit () {
      this.reload()
    },
    ellipsoid () {
      this.reload()
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, url, rectangle, credit, ellipsoid } = this
      let imageryProvider = new Cesium.SingleTileImageryProvider({
        url: url,
        rectangle: rectangle,
        credit: credit,
        ellipsoid: ellipsoid
      })
      return imageryProvider
    }
  }
}
</script>
