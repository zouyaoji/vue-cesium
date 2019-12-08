<script>
import { ellipsoid, granularity, vertexFormat, cornerType } from '../../../mixins/mixinProps'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-polyline-volume',
  mixins: [ellipsoid, granularity, vertexFormat, cornerType, mixinGeometry],
  props: {
    polylinePositions: Array,
    shapePositions: Array
  }
}
</script>
