<script>
import {
  tilingScheme,
  ellipsoid,
  tileWidth,
  tileHeight
} from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
export default {
  name: 'vc-provider-imagery-tile-coordinates',
  mixins: [
    tilingScheme,
    ellipsoid,
    tileWidth,
    tileHeight,
    mixinImageryProvider
  ],
  props: {
    color: {
      type: [Object, String, Array],
      default: 'YELLOW'
    }
  }
}
</script>
