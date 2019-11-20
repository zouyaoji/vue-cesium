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
  shadows,
  classificationType,
  zIndex
} from '../../../mixins/mixinProps'
import mixinRectangle from '../../../mixins/graphics/mixinRectangle'
import mixinGraphic from '../../../mixins/graphics/mixinGraphic'
export default {
  name: 'vc-graphics-rectangle',
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
    shadows,
    classificationType,
    zIndex,
    mixinRectangle,
    mixinGraphic
  ],
  props: {
    coordinates: Object
  }
}
</script>
