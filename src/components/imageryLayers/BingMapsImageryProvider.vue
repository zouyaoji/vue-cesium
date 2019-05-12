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
  computed: {
    changeProps () {
      const { url, bmKey, tileProtocol, mapStyle, culture, ellipsoid, tileDiscardPolicy } = this
      return {
        url, bmKey, tileProtocol, mapStyle, culture, ellipsoid, tileDiscardPolicy
      }
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
      return new Cesium.BingMapsImageryProvider(options)
    }
  }
}
</script>
