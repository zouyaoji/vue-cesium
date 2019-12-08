<script>
import { rectangle, ellipsoid, granularity, height, rotation, extrudedHeight } from '../../../mixins/mixinProps'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-outline-rectangle',
  mixins: [rectangle, ellipsoid, granularity, height, rotation, extrudedHeight, mixinGeometry]
}
</script>
