<script>
import { positions, arcType, granularity, ellipsoid } from '../../../mixins/mixinProps'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-polyline-simple',
  mixins: [positions, arcType, granularity, ellipsoid, ellipsoid, mixinGeometry],
  props: {
    colors: Array,
    colorsPerVertex: {
      type: Boolean,
      default: false
    }
  }
}
</script>
