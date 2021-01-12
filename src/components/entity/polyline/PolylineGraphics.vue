<script>
import {
  granularity,
  arcType,
  clampToGround,
  classificationType,
  zIndex,
  depthFailMaterial
} from '../../../mixins/mixinProps'
import mixinPolyline from '../../../mixins/graphics/mixinPolyline'
import mixinGraphic from '../../../mixins/graphics/mixinGraphic'

export default {
  name: 'vc-graphics-polyline',
  mixins: [
    granularity,
    arcType,
    clampToGround,
    classificationType,
    zIndex,
    depthFailMaterial,
    mixinPolyline,
    mixinGraphic
  ]
}
</script>
