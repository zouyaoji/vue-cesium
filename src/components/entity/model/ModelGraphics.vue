<script>
import mixinModel from '../../../mixins/graphics/mixinModel'
import mixinGraphic from '../../../mixins/graphics/mixinGraphic'
import { imageBasedLightingFactor, lightColor, uri, nodeTransformations, runAnimations, articulations } from '../../../mixins/mixinProps'
export default {
  name: 'vc-graphics-model',
  mixins: [mixinModel, mixinGraphic, imageBasedLightingFactor, lightColor, uri, nodeTransformations, runAnimations, articulations]
}
</script>
