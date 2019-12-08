<script>
import { ellipsoid } from '../../../mixins/mixinProps'
import mixinWall from '../../../mixins/graphics/mixinWall'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-outline-wall',
  mixins: [ellipsoid, mixinWall, mixinGeometry]
}
</script>
