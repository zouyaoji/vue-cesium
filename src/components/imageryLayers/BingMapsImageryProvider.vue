<script>
import imageryProvider from '../../mixins/imageryProvider'
export default {
  name: 'bingmaps-imagery-provider',
  mixins: [imageryProvider],
  props: {
    url: {
      type: String
    },
    bmKey: {
      type: String
    },
    tileProtocol: {
      type: String
    },
    mapStyle: {
      type: String,
      default: 'Aerial'
    },
    culture: {
      type: String
    },
    ellipsoid: {
      type: Object
    },
    tileDiscardPolicy: {
      type: Object
    }
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
      let imageryProvider = new Cesium.BingMapsImageryProvider({
        url: url,
        key: bmKey,
        tileProtocol: tileProtocol,
        mapStyle: mapStyle,
        culture: culture,
        ellipsoid: ellipsoid,
        tileDiscardPolicy: tileDiscardPolicy
      })
      return imageryProvider
    }
  }
}
</script>
