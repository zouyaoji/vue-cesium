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
import mixinPolygon from '../../../mixins/graphics/mixinPolygon'
import mixinGraphic from '../../../mixins/graphics/mixinGraphic'
export default {
  name: 'vc-graphics-polygon',
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
    mixinPolygon,
    mixinGraphic
  ],
  props: {
    hierarchy: Array | Object
  }
}
</script>
