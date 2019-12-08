<script>
import { innerRadii, minimumClock, maximumClock, minimumCone, maximumCone, vertexFormat } from '../../../mixins/mixinProps'
import mixinEllipsoid from '../../../mixins/graphics/mixinEllipsoid'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-ellipsoid',
  mixins: [innerRadii, minimumClock, maximumClock, minimumCone, maximumCone, vertexFormat, mixinEllipsoid, mixinGeometry]
}
</script>
