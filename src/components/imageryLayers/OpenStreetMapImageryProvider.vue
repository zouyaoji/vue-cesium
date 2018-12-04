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
    rectangle: {
      type: Object
    },
    minimumLevel: {
      type: Number
    },
    maximumLevel: {
      type: Number
    },
    ellipsoid: {
      type: Object
    },
    credit: {
      type: String,
      default: 'MapQuest, Open Street Map and contributors, CC-BY-SA'
    }
  },
  watch: {
    url () {
      this.reload()
    },
    fileExtension () {
      this.reload()
    },
    rectangle () {
      this.reload()
    },
    minimumLevel () {
      this.reload()
    },
    maximumLevel () {
      this.reload()
    },
    ellipsoid () {
      this.reload()
    },
    credit () {
      this.reload()
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, url, fileExtension, rectangle, minimumLevel, maximumLevel, ellipsoid, credit } = this
      /* eslint-disable new-cap */
      let imageryProvider = new Cesium.createOpenStreetMapImageryProvider({
        url: url,
        fileExtension: fileExtension,
        rectangle: rectangle,
        minimumLevel: minimumLevel,
        maximumLevel: maximumLevel,
        ellipsoid: ellipsoid,
        credit: credit
      })
      return imageryProvider
    }
  }
}
</script>
