<script>
import {
  center,
  radius,
  ellipsoid,
  height,
  granularity,
  vertexFormat,
  extrudedHeight,
  stRotation
} from '../../../mixins/mixinProps'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-circle',
  mixins: [center, radius, ellipsoid, height, granularity, vertexFormat, extrudedHeight, stRotation, mixinGeometry]
}
</script>

}
