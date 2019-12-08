<script>
import { center, ellipsoid, numberOfVerticalLines } from '../../../mixins/mixinProps'
import mixinEllipse from '../../../mixins/graphics/mixinEllipse'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-outline-ellipse',
  mixins: [center, ellipsoid, numberOfVerticalLines, mixinEllipse, mixinGeometry]
}
</script>
