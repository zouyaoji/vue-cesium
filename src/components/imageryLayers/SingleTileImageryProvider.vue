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
    rectangle: Object,
    credit: String,
    ellipsoid: Object
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
      let options = {
        url,
        rectangle,
        credit,
        ellipsoid
      }
      this.removeNullItem(options)
      let imageryProvider = new Cesium.SingleTileImageryProvider(options)
      return imageryProvider
    }
  }
}
</script>
