<script>
import {
  polygonHierarchy,
  height,
  extrudedHeight,
  vertexFormat,
  ellipsoid,
  granularity,
  perPositionHeight,
  arcType
} from '../../../mixins/mixinProps'
import mixinGeometry from '../../../mixins/primitives/mixinGeometry'
export default {
  name: 'vc-geometry-outline-polygon',
  mixins: [
    polygonHierarchy,
    height,
    extrudedHeight,
    vertexFormat,
    ellipsoid,
    granularity,
    perPositionHeight,
    arcType,
    mixinGeometry
  ]
}
</script>
