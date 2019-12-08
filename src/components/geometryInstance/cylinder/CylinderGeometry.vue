<script>
import { vertexFormat } from '../../../mixins/mixinProps'
import mixinCylinder from '../../../mixins/graphics/mixinCylinder'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-cylinder',
  mixins: [vertexFormat, mixinCylinder, mixinGeometry]
}
</script>
