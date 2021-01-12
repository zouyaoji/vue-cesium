<script>
import { tilingScheme, ellipsoid, tileWidth, tileHeight, glowColor } from '../../../mixins/mixinProps'
import { makeColor } from '../../../utils/cesiumHelpers'
import mixinImageryProvider from '../../../mixins/providers/mixinImageryProvider'
export default {
  name: 'vc-provider-imagery-grid',
  mixins: [tilingScheme, ellipsoid, tileWidth, tileHeight, glowColor, mixinImageryProvider],
  props: {
    cells: {
      type: Number,
      default: 8
    },
    color: {
      type: [String, Object, Array],
      default: () => [1.0, 1.0, 1.0, 0.4],
      watcherOptions: {
        cesiumObjectBuilder: makeColor
      }
    },
    glowWidth: {
      type: Number,
      default: 6
    },
    backgroundColor: {
      type: [String, Array, Object],
      default: () => [0.0, 0.5, 0.0, 0.2],
      watcherOptions: {
        cesiumObjectBuilder: makeColor
      }
    },
    canvasSize: {
      type: Number,
      default: 256
    }
  }
}
</script>
