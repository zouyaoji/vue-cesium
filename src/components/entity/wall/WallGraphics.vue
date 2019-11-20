<script>
import {
  show,
  distanceDisplayCondition,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  shadows
} from '../../../mixins/mixinProps'
import mixinWall from '../../../mixins/graphics/mixinWall'
import mixinGraphic from '../../../mixins/graphics/mixinGraphic'
export default {
  name: 'vc-graphics-wall',
  mixins: [
    show,
    distanceDisplayCondition,
    fill,
    material,
    outline,
    outlineColor,
    outlineWidth,
    shadows,
    mixinWall,
    mixinGraphic
  ]
}
</script>
