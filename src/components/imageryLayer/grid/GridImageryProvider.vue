<script>
import {
  tilingScheme,
  ellipsoid,
  tileWidth,
  tileHeight
} from '../../../mixins/mixinProps'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
export default {
  name: 'vc-provider-imagery-grid',
  mixins: [
    tilingScheme,
    ellipsoid,
    tileWidth,
    tileHeight,
    mixinImageryProvider
  ],
  props: {
    cells: {
      type: Number,
      default: 8
    },
    color: {
      type: String | Object | Array,
      default: () => [1.0, 1.0, 1.0, 0.4]
    },
    glowColor: {
      type: String | Array | Object,
      default: () => [0.0, 1.0, 0.0, 0.05]
    },
    glowWidth: {
      type: Number,
      default: 6
    },
    backgroundColor: {
      type: String | Array | Object,
      default: () => [0.0, 0.5, 0.0, 0.2]
    },
    canvasSize: {
      type: Number,
      default: 256
    }
  }
}
</script>
