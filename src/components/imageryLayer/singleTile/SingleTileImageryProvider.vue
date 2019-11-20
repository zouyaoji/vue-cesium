<script>
import {
  url,
  rectangle,
  credit,
  ellipsoid
} from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
export default {
  name: 'vc-provider-imagery-tile-single',
  mixins: [
    url,
    rectangle,
    credit,
    ellipsoid,
    mixinImageryProvider
  ]
}
</script>
