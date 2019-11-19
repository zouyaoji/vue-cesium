<script>
import mixinModel from '../../../mixins/graphics/mixinModel'
import mixinGraphic from '../../../mixins/graphics/mixinGraphic'
export default {
  name: 'vc-graphics-model',
  mixins: [mixinModel, mixinGraphic],
  props: {
    uri: String,
    runAnimations: {
      type: Boolean,
      default: true
    },
    imageBasedLightingFactor: {
      type: Object,
      default: () => {
        return {
          x: 1.0, y: 1.0
        }
      }
    },
    lightColor: Object,
    nodeTransformations: Object,
    articulations: Object
  }
}
</script>
