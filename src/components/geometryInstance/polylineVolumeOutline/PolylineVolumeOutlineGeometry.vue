<script>
import { ellipsoid, granularity, cornerType, shapePositions, polylinePositions } from '../../../mixins/mixinProps'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-outline-polyline-volume',
  mixins: [ellipsoid, granularity, cornerType, shapePositions, polylinePositions, mixinGeometry]
}
</script>
