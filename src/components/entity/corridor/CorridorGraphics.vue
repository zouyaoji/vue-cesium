<script>
import {
  show, distanceDisplayCondition, heightReference, extrudedHeightReference, fill, material, outline, outlineColor,
  outlineWidth, shadows, classificationType, zIndex
} from '../../../mixins/mixinProps'
import mixinCorridor from '../../../mixins/graphics/mixinCorridor'
import mixinGraphic from '../../../mixins/graphics/mixinGraphic'
export default {
  name: 'vc-graphics-corridor',
  mixins: [mixinCorridor, heightReference, extrudedHeightReference, fill, material, outline,
    outlineColor, outlineWidth, shadows, classificationType, zIndex, mixinGraphic, show, distanceDisplayCondition]
}
</script>
