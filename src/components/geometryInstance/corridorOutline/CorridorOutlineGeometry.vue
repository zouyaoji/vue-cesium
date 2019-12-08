<script>
import { ellipsoid } from '../../../mixins/mixinProps'
import mixinCorridor from '../../../mixins/graphics/mixinCorridor'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-outline-corridor',
  mixins: [ellipsoid, mixinCorridor, mixinGeometry]
}
</script>
