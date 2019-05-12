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
  computed: {
    changeProps () {
      const { url, rectangle, credit, ellipsoid } = this
      return {
        url, rectangle, credit, ellipsoid
      }
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, url, rectangle, credit, ellipsoid } = this
      let options = {
        url,
        rectangle: rectangle instanceof Cesium.Rectangle || this.isEmptyObj(rectangle) ? rectangle : Cesium.Rectangle.fromDegrees(rectangle.west, rectangle.south, rectangle.east, rectangle.north),
        credit,
        ellipsoid
      }
      this.removeNullItem(options)
      return new Cesium.SingleTileImageryProvider(options)
    }
  }
}
</script>
