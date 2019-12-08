<script>
import { center, ellipsoid, stRotation, vertexFormat } from '../../../mixins/mixinProps'
import mixinEllipse from '../../../mixins/graphics/mixinEllipse'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-ellipse',
  mixins: [center, ellipsoid, stRotation, vertexFormat, mixinEllipse, mixinGeometry]
}
</script>
