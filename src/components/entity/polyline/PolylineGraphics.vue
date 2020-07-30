<script>
import {
  granularity,
  arcType,
  clampToGround,
  classificationType,
  zIndex
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
    mixinPolyline,
    mixinGraphic
  ],
  props: {
    depthFailMaterial: Object | Array | String
  }
}
</script>
