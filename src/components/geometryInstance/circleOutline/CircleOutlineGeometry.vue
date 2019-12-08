<script>
import { center, radius, ellipsoid, height, granularity, extrudedHeight, numberOfVerticalLines } from '../../../mixins/mixinProps'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-outline-circle',
  mixins: [center, radius, ellipsoid, height, granularity, extrudedHeight, numberOfVerticalLines, mixinGeometry]
}
</script>
