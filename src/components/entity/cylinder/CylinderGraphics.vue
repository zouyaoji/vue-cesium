<script>
import {
  show,
  distanceDisplayCondition,
  heightReference,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  numberOfVerticalLines,
  shadows
} from '../../../mixins/mixinProps'
import mixinCylinder from '../../../mixins/graphics/mixinCylinder'
import mixinGraphic from '../../../mixins/graphics/mixinGraphic'
export default {
  name: 'vc-graphics-cylinder',
  mixins: [
    show,
    distanceDisplayCondition,
    heightReference,
    fill,
    material,
    outline,
    outlineColor,
    outlineWidth,
    numberOfVerticalLines,
    shadows,
    mixinCylinder,
    mixinGraphic
  ]
}
</script>
