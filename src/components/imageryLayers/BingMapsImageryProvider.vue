<script>
import {
  url,
  ellipsoid,
  tileDiscardPolicy
} from '../../mixins/entity/allProps'
import imageryProviderMixin from '../../mixins/imageryProvider/imageryProviderMixin'
export default {
  name: 'vc-imagery-provider-bingmaps',
  mixins: [url, ellipsoid, tileDiscardPolicy, imageryProviderMixin],
  props: {
    url: String | Object,
    bmKey: String,
    tileProtocol: String,
    mapStyle: {
      type: String,
      default: 'Aerial'
    },
    culture: {
      type: String,
      default: ''
    }
  },
  methods: {
    createCesiumObject () {
      return new Cesium.BingMapsImageryProvider(this.makeOptions())
    },
    makeOptions () {
      const { url, bmKey, tileProtocol, mapStyle, culture, ellipsoid, tileDiscardPolicy } = this
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
      return options
    }
  }
}
</script>
