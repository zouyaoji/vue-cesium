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
  subdivisions,
  shadows
} from '../../../mixins/mixinProps'
import mixinEllipsoid from '../../../mixins/graphics/mixinEllipsoid'
import mixinGraphic from '../../../mixins/graphics/mixinGraphic'
export default {
  name: 'vc-graphics-ellipsoid',
  mixins: [
    show,
    distanceDisplayCondition,
    heightReference,
    fill,
    material,
    outline,
    outlineColor,
    outlineWidth,
    subdivisions,
    shadows,
    mixinEllipsoid,
    mixinGraphic
  ]
}
</script>
