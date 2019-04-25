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
      let options = {
        url,
        fileExtension,
        rectangle,
        minimumLevel,
        maximumLevel,
        ellipsoid,
        credit
      }
      this.removeNullItem(options)
      /* eslint-disable new-cap */
      let imageryProvider = new Cesium.createOpenStreetMapImageryProvider(options)
      return imageryProvider
    }
  }
}
</script>
