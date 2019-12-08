<script>
import { frustum, origin, orientation } from '../../../mixins/mixinProps'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-outline-frustum',
  mixins: [frustum, origin, orientation, mixinGeometry]
}
</script>
