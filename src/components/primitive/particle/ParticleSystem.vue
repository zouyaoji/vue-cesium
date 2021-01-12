<script>
import {
  show,
  modelMatrix,
  image,
  color,
  startColor,
  endColor,
  imageSize,
  minimumImageSize,
  maximumImageSize
} from '../../../mixins/mixinProps'
import mixinPrimitive from '../../../mixins/primitives/mixinPrimitive'
export default {
  name: 'vc-primitive-particle',
  mixins: [
    show,
    modelMatrix,
    image,
    color,
    startColor,
    endColor,
    imageSize,
    minimumImageSize,
    maximumImageSize,
    mixinPrimitive
  ],
  props: {
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
