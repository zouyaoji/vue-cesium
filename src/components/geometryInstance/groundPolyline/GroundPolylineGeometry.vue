<script>
import { positions, width, granularity, loop, arcType } from '../../../mixins/mixinProps'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-polyline-ground',
  mixins: [positions, width, granularity, loop, arcType, mixinGeometry]
}
</script>
