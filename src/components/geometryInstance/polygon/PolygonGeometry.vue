<script>
import { ellipsoid, vertexFormat } from '../../../mixins/mixinProps'
import mixinPolygon from '../../../mixins/graphics/mixinPolygon'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-polygon',
  mixins: [mixinPolygon, ellipsoid, vertexFormat, mixinGeometry],
  props: {
    polygonHierarchy: Object | Array
  }
}
</script>
