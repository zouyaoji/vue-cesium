<script>
import imageryProvider from '../../mixins/imageryProvider'
export default {
  name: 'openstreetmap-imagery-provider',
  mixins: [imageryProvider],
  props: {
    url: {
      type: String,
      default: 'https://a.tile.openstreetmap.org'
    },
    fileExtension: {
      type: String,
      default: 'png'
    },
    rectangle: Object,
    minimumLevel: Number,
    maximumLevel: Number,
    ellipsoid: Object,
    credit: {
      type: String,
      default: 'MapQuest, Open Street Map and contributors, CC-BY-SA'
    }
  },
  computed: {
    changeProps () {
      const { url, fileExtension, rectangle, minimumLevel, maximumLevel, ellipsoid, credit } = this
      return {
        url, fileExtension, rectangle, minimumLevel, maximumLevel, ellipsoid, credit
      }
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, url, fileExtension, rectangle, minimumLevel, maximumLevel, ellipsoid, credit } = this
      let options = {
        url,
        fileExtension,
        rectangle: rectangle instanceof Cesium.Rectangle || this.isEmptyObj(rectangle) ? rectangle : Cesium.Rectangle.fromDegrees(rectangle.west, rectangle.south, rectangle.east, rectangle.north),
        minimumLevel,
        maximumLevel,
        ellipsoid,
        credit
      }
      this.removeNullItem(options)
      /* eslint-disable new-cap */
      return new Cesium.createOpenStreetMapImageryProvider(options)
    }
  }
}
</script>
