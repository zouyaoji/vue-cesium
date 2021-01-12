<script>
import {
  heightReference,
  fill,
  material,
  outline,
  outlineColor,
  outlineWidth,
  shadows
} from '../../../mixins/mixinProps'
import mixinBox from '../../../mixins/graphics/mixinBox'
import mixinGraphic from '../../../mixins/graphics/mixinGraphic'

export default {
  name: 'vc-graphics-box',
  mixins: [
    heightReference,
    fill,
    material,
    outline,
    outlineColor,
    outlineWidth,
    shadows,
    mixinBox,
    mixinGraphic]
}
</script>
