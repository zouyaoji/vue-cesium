<script>
import {
  show,
  distanceDisplayCondition,
  heightReference,
  extrudedHeightReference,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  numberOfVerticalLines,
  shadows,
  classificationType,
  zIndex,
  stRotation
} from '../../../mixins/mixinProps'
import mixinEllipse from '../../../mixins/graphics/mixinEllipse'
import mixinGraphic from '../../../mixins/graphics/mixinGraphic'
export default {
  name: 'vc-graphics-ellipse',
  mixins: [
    show,
    distanceDisplayCondition,
    heightReference,
    extrudedHeightReference,
    fill,
    material,
    outline,
    outlineColor,
    outlineWidth,
    numberOfVerticalLines,
    shadows,
    classificationType,
    zIndex,
    stRotation,
    mixinEllipse,
    mixinGraphic
  ]
}
</script>
