<script>
import { ellipsoid, vertexFormat, rectangle } from '../../../mixins/mixinProps'
import mixinRectangle from '../../../mixins/graphics/mixinRectangle'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-rectangle',
  mixins: [mixinRectangle, ellipsoid, vertexFormat, rectangle, mixinGeometry]
}
</script>
