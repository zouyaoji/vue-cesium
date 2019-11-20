<script>
import {
  granularity,
  arcType,
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
    classificationType,
    zIndex,
    mixinPolyline,
    mixinGraphic
  ],
  props: {
    clampToGround: {
      type: Boolean,
      default: false
    },
    depthFailMaterial: Object | Array | String
  }
}
</script>
