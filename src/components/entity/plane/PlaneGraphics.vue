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
import { makeCartesian2 } from '../../../utils/cesiumHelpers'
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
    // 和 BoxGraphics.dimensions 区分
    plane: {
      type: [Object, Array, Function],
      watcherOptions: {
        cesiumObjectBuilder: makeCartesian2
      }
    }
  }
}
</script>
