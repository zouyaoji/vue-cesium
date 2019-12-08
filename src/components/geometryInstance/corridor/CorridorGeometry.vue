<script>
import { ellipsoid, vertexFormat } from '../../../mixins/mixinProps'
import mixinCorridor from '../../../mixins/graphics/mixinCorridor'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-corridor',
  mixins: [ellipsoid, vertexFormat, mixinCorridor, mixinGeometry]
}
</script>
