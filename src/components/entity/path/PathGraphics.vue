<script>
import { show, distanceDisplayCondition, width, material } from '../../../mixins/mixinProps'
import mixinGraphic from '../../../mixins/graphics/mixinGraphic'
export default {
  name: 'vc-graphics-path',
  mixins: [show, distanceDisplayCondition, width, material, mixinGraphic],
  props: {
    leadTime: Number,
    trailTime: Number,
    resolution: {
      type: Number,
      default: 60
    }
  }
}
</script>
