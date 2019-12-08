<script>
import { ellipsoid, vertexFormat } from '../../../mixins/mixinProps'
import mixinWall from '../../../mixins/graphics/mixinWall'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-wall',
  mixins: [ellipsoid, vertexFormat, mixinWall, mixinGeometry]
}
</script>
