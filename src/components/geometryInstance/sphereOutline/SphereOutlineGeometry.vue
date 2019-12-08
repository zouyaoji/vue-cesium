<script>
import { radius, stackPartitions, slicePartitions, subdivisions } from '../../../mixins/mixinProps'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-outline-sphere',
  mixins: [radius, stackPartitions, slicePartitions, subdivisions, mixinGeometry]
}
</script>
