<script>
import {
  url,
  ellipsoid,
  tileDiscardPolicy,
  credit
} from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
export default {
  name: 'vc-provider-imagery-googleearth-enterprise',
  mixins: [
    url,
    ellipsoid,
    tileDiscardPolicy,
    credit,
    mixinImageryProvider
  ],
  props: {
    metadata: Object
  }
}
</script>
