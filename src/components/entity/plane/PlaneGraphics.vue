<script>
import {
  show,
  distanceDisplayCondition,
  dimensions,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  shadows
} from '../../../mixins/mixinProps'
import mixinGraphic from '../../../mixins/graphics/mixinGraphic'
export default {
  name: 'vc-graphics-plane',
  mixins: [
    show,
    distanceDisplayCondition,
    dimensions,
    fill,
    material,
    outline,
    outlineColor,
    outlineWidth,
    shadows,
    mixinGraphic
  ],
  props: {
    plane: Object
  }
}
</script>
