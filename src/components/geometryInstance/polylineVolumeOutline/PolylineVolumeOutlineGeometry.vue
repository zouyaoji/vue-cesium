<script>
import { ellipsoid, granularity, cornerType } from '../../../mixins/mixinProps'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-outline-polyline-volume',
  mixins: [ellipsoid, granularity, cornerType, mixinGeometry],
  props: {
    polylinePositions: Array,
    shapePositions: Array
  }
}
</script>
