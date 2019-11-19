<script>
import {
  accessToken
} from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
export default {
  name: 'vc-provider-imagery-ion',
  mixins: [
    accessToken,
    mixinImageryProvider
  ],
  props: {
    assetId: Number,
    server: String | Object
  }
}
</script>
