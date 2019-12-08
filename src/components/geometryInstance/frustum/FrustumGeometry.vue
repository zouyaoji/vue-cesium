<script>
import { frustum, origin, orientation, vertexFormat } from '../../../mixins/mixinProps'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-frustum',
  mixins: [frustum, origin, orientation, vertexFormat, mixinGeometry]
}
</script>
