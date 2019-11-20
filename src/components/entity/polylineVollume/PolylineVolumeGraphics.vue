<script>
import {
  show,
  distanceDisplayCondition,
  positions,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  shadows
} from '../../../mixins/mixinProps'
import mixinPolylineVolume from '../../../mixins/graphics/mixinPolylineVolume'
import mixinGraphic from '../../../mixins/graphics/mixinGraphic'
export default {
  name: 'vc-graphics-polyline-volume',
  mixins: [
    show,
    distanceDisplayCondition,
    positions,
    fill,
    material,
    outline,
    outlineColor,
    outlineWidth,
    shadows,
    mixinPolylineVolume,
    mixinGraphic
  ],
  props: {
    shape: Array
  }
}
</script>
