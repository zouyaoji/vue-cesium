<script>
import { numberOfVerticalLines } from '../../../mixins/mixinProps'
import mixinCylinder from '../../../mixins/graphics/mixinCylinder'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-outline-cylinder',
  mixins: [numberOfVerticalLines, mixinCylinder, mixinGeometry]
}
</script>
