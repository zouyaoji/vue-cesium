<script>
import {
  url,
  ellipsoid,
  tileDiscardPolicy
} from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
export default {
  name: 'vc-provider-imagery-bingmaps',
  mixins: [url, ellipsoid, tileDiscardPolicy, mixinImageryProvider],
  props: {
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
  }
}
</script>
