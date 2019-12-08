<script>
import { innerRadii, minimumClock, maximumClock, minimumCone, maximumCone, subdivisions } from '../../../mixins/mixinProps'
import mixinEllipsoid from '../../../mixins/graphics/mixinEllipsoid'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-outline-ellipsoid',
  mixins: [innerRadii, minimumClock, maximumClock, minimumCone, maximumCone, subdivisions, mixinEllipsoid, mixinGeometry],
  props: {
    stackPartitions: {
      type: Number,
      default: 10
    },
    slicePartitions: {
      type: Number,
      default: 8
    }
  }
}
</script>
