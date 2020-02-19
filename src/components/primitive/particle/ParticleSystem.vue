<script>
import {
  show,
  modelMatrix,
  image
} from '../../../mixins/mixinProps'
import mixinPrimitive from '../../../mixins/primitives/mixinPrimitive'
export default {
  name: 'vc-primitive-particle',
  mixins: [
    show,
    modelMatrix,
    image,
    mixinPrimitive
  ],
  props: {
    color: Object | String | Array,
    updateCallback: Function,
    emitter: Object,
    emitterModelMatrix: Object,
    emissionRate: Number,
    bursts: Array,
    loop: {
      type: Boolean,
      default: true
    },
    scale: Number,
    startScale: Number,
    endScale: Number,
    startColor: Object | String | Array,
    endColor: Object | String | Array,
    imageSize: Object,
    minimumImageSize: Object,
    maximumImageSize: Object,
    speed: Number,
    minimumSpeed: Number,
    maximumSpeed: Number,
    lifetime: Number,
    particleLife: Number,
    minimumParticleLife: Number,
    maximumParticleLife: Number,
    mass: Number,
    minimumMass: Number,
    maximumMass: Number
  }
}
</script>
