<script>
import { radius, stackPartitions, slicePartitions, vertexFormat } from '../../../mixins/mixinProps'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-sphere',
  mixins: [radius, stackPartitions, slicePartitions, vertexFormat, mixinGeometry]
}
</script>
