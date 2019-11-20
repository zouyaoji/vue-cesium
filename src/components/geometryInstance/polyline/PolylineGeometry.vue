<script>
import { positions, width, arcType, granularity, vertexFormat, ellipsoid } from '../../../mixins/mixinProps'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-polyline',
  mixins: [positions, width, arcType, granularity, vertexFormat, ellipsoid, mixinGeometry],
  props: {
    colors: Array,
    colorsPerVertex: {
      type: Boolean,
      default: false
    }
  }
}
</script>
