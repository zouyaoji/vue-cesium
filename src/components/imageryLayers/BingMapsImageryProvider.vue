<script>
import imageryProvider from '../../mixins/imageryProvider'
export default {
  name: 'bingmaps-imagery-provider',
  mixins: [imageryProvider],
  props: {
    url: String,
    bmKey: String,
    tileProtocol: String,
    mapStyle: {
      type: String,
      default: 'Aerial'
    },
    culture: String,
    ellipsoid: Object,
    tileDiscardPolicy: Object
  },
  watch: {
    url () {
      this.reload()
    },
    bmKey () {
      this.reload()
    },
    tileProtocol () {
      this.reload()
    },
    mapStyle () {
      this.reload()
    },
    culture () {
      this.reload()
    },
    ellipsoid () {
      this.reload()
    },
    tileDiscardPolicy () {
      this.reload()
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, url, bmKey, tileProtocol, mapStyle, culture, ellipsoid, tileDiscardPolicy } = this
      let options = {
        url,
        key: bmKey,
        tileProtocol,
        mapStyle,
        culture,
        ellipsoid,
        tileDiscardPolicy
      }
      this.removeNullItem(options)
      let imageryProvider = new Cesium.BingMapsImageryProvider(options)
      return imageryProvider
    }
  }
}
</script>
